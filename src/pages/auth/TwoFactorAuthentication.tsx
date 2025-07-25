import React, { useCallback, useState, type FormEvent } from "react";
import {
  AuthFormContainer,
  OTPInput,
  SubmitButton,
  TextInput,
} from "../../components";

const TwoFactorAuthentication: React.FC = () => {
  const initialData: TwoFactorAuthenticationFormDataInterface = {
    email: "",
    otp: "",
  };

  const [formData, setFormData] =
    useState<TwoFactorAuthenticationFormDataInterface>(initialData);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  const handleFormSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <AuthFormContainer formTitle="2FA" handleFormSubmit={handleFormSubmit}>
      <TextInput
        id="tfa-email"
        inputType="email"
        label="Email Address"
        required={true}
        name="email"
        value={formData.email}
        disabled={true}
        handleInputChange={handleInputChange}
      />
      <OTPInput />
      <section className="mt-[22px]">
        <SubmitButton label="Submit" includeBottomMargin={false} />
      </section>
    </AuthFormContainer>
  );
};

export default TwoFactorAuthentication;
