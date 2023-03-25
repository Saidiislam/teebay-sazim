import { Center, SlideFade } from "@chakra-ui/react";
import React from "react";
import { InputField } from "../Components/InputField";
import { PasswordField } from "../Components/PasswordField";
import { CustomForm } from "../Components/CustomForm";

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
