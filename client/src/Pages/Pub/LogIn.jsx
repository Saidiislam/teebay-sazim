import React from "react";
import {Center, SlideFade} from "@chakra-ui/react";
import {CustomForm} from "../../Components/Forms/CustomForm.jsx";
import {InputField} from "../../Components/Forms/InputField.jsx";
import {PasswordField} from "../../Components/Forms/PasswordField.jsx";

export const LogIn = () => {
  return (
    <Center minH={"100vh"}>
      <SlideFade in={true} reverse={true}>
        <CustomForm
          alternate={"Sign Up"}
          btnName={"Sign In"}
          heading={"Welcome Back"}
          switchTo={"/signup"}
        >
          <InputField label="Email Address" name="email" placeholder="Email" />

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
