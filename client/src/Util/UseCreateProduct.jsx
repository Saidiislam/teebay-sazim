import { useMutation } from '@apollo/client';
import {CREATE_PRODUCT} from "../Api/Public.jsx";
import React from "react";

export function useCreateProduct() {
    const [createProductMutation, { loading, error }] = useMutation(CREATE_PRODUCT);

    async function createProduct(createProductInput) {
        try {
            const { data } = await createProductMutation({
                variables: {
                    createProductInput,
                },
            });
            console.log('Product created successfully:', data.createProduct);
            return data.createProduct;
        } catch (e) {
            console.error('Error creating product:', e);
            throw e;
        }
    }

    return [createProduct, { loading, error }];
}