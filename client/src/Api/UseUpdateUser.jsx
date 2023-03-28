import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "./Public.jsx";

export function useUpdateUser() {
  const [updateUserMutation, { loading, error }] = useMutation(UPDATE_USER);

  async function updateUser(updateUserId, updateUserInput) {
    try {
      const { data } = await updateUserMutation({
        variables: {
          updateUserId,
          updateUserInput,
        },
      });
      console.log("User updated successfully:", data.updateUser);
      return data.updateUser;
    } catch (e) {
      console.error("Error updating user:", e);
      throw e;
    }
  }

  return [updateUser, { loading, error }];
}
