import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../Api/Public.jsx";
import React from "react";

export function useCreateUser() {
  const [createUserMutation, { loading, error }] = useMutation(CREATE_USER);

  async function createUser(createUserInput) {
    try {
      const { data } = await createUserMutation({
        variables: {
          createUserInput,
        },
      });
      console.log("User created successfully:", data.createUser);
      return data.createUser;
    } catch (e) {
      console.error("Error creating product:", e);
      throw e;
    }
  }

  return [createUser, { loading, error }];
}
