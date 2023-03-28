import { UPDATE_PRODUCT } from "./Public.jsx";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";

export function useUpdateProduct() {
  
  const [updateProductMutation, { loading, error }] =
    useMutation(UPDATE_PRODUCT);

  async function updateProduct(updateProductId, createUpdateInput) {
    try {
      const { id } = useParams();
      const { data } = await updateProductMutation({
        variables: {
          updateProductId,
          createUpdateInput,
        },
      });
      console.log("User created successfully:", data.updateProduct);
      return data.updateProduct;
    } catch (e) {
      console.error("Error creating product:", e);
      throw e;
    }
  }

  return [updateProduct, { loading, error }];
}
