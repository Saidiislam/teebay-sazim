import React from "react";
import { Center, SlideFade } from "@chakra-ui/react";
import { CustomForm } from "../../Components/Forms/CustomForm.jsx";
import { InputField } from "../../Components/Forms/InputField.jsx";
import { PasswordField } from "../../Components/Forms/PasswordField.jsx";
import { SignInVal } from "../../Util/YupConfig.jsx";
import { useLoginUser } from "../../Api/UseLoginUser.jsx";
import { setToken } from "../../Api/Auth/AuthService.jsx";

export const LogIn = () => {
  const [loginUser, { loading, error }] = useLoginUser();
  const handleSubmit = async (values) => {
    try {
      const loggedUser = await loginUser({
        email: values.email,
        password: values.password,
      });
      loggedUser && setToken(loggedUser);
      window.location.reload(false);
    } catch (e) {
      console.error("Error creating product:", e);
    }
  };

  return (
    <Center minH={"100vh"}>
      <SlideFade in={true} reverse={true}>
        <CustomForm
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SignInVal}
          submit={handleSubmit}
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
