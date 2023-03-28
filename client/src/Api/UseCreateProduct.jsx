import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT } from "./Public.jsx";

export function useCreateProduct() {
  // Importing mutation
  const [createProductMutation, { loading, error }] =
    useMutation(CREATE_PRODUCT);

    // Invoking another function to avoid boilerplating
  async function createProduct(createProductInput) {
    try {
      const { data } = await createProductMutation({
        variables: {
          createProductInput,
        },
      });
      console.log("Product created successfully:", data.createProduct);
      return data.createProduct;
    } catch (e) {
      console.error("Error creating product:", e);
      throw e;
    }
  }

  return [createProduct, { loading, error }];
}
