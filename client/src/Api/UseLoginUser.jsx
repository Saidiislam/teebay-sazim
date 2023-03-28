import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "./Public.jsx";

export function useLoginUser() {
  const [loginUserMutation, { loading, error }] = useMutation(LOGIN_USER);

  async function loginUser(loginUserInput) {
    try {
      const { data } = await loginUserMutation({
        variables: {
          loginUserInput,
        },
      });
      console.log("User signed in successfully:", data.loginUser);
      return data.loginUser;
    } catch (e) {
      console.error("Error logging in", e);
      throw e;
    }
  }

  return [loginUser, { loading, error }];
}
