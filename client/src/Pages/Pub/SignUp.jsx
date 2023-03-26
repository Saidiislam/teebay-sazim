import React from "react";
import {Center, SlideFade} from "@chakra-ui/react";
import {CustomForm} from "../../Components/Forms/CustomForm.jsx";
import {InputField} from "../../Components/Forms/InputField.jsx";
import {NumInputField} from "../../Components/Forms/NumInputField.jsx";
import {PasswordField} from "../../Components/Forms/PasswordField.jsx";

export const SignUp = () => {
  return (
    <Center minH={"100vh"}>
      <SlideFade in={true} reverse={true}>
        <CustomForm
          alternate={"Sign In"}
          btnName={"Sign Up"}
          heading={"Register an account"}
          switchTo={"/login"}
        >
          <InputField
            label="First Name"
            name="firstName"
            placeholder="First Name"
          />
          <InputField
            label="Last Name"
            name="lastName"
            placeholder="Last Name"
          />

          <InputField label="Address" name="addess" placeholder="Address" />

          <InputField label="Email Address" name="email" placeholder="Email" />

          <NumInputField label="Phone" name="phone" placeholder="phone" />

          <PasswordField
            label="Password"
            name="password"
            placeholder="Enter Password"
          />
        </CustomForm>
      </SlideFade>
    </Center>
  );
};
