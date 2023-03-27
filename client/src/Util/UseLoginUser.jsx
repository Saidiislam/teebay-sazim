import { useMutation } from "@apollo/client";
import {LOGIN_USER} from "../Api/Public.jsx";
import React from "react";

export function useLoginUser() {
    const [loginUserMutation, { loading, error }] = useMutation(LOGIN_USER);

    async function loginUser(loginUserInput) {
        try {
            const { data } = await loginUserMutation({
                variables: {
                    loginUserInput
                },
            });
            console.log("User created successfully:", data.loginUser);
            return data.loginUser;
        } catch (e) {
            console.error("Error creating product:", e);
            throw e;
        }
    }

    return [loginUser, { loading, error }];
}
