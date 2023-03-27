import { useState } from "react";
import { useCreateProduct } from "../../Util/UseCreateProduct.jsx";
import React from "react";
export function CreateProductForm() {
  const [createProduct, { loading, error }] = useCreateProduct();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(parseInt(1));
  const [description, setDescription] = useState("");
  const [rentPrice, setRentPrice] = useState(1);
  const [status, setStatus] = useState("UNSOLD");
  const [userId, setUserId] = useState(1);
  const [categories, setCategories] = useState(["TOYS"]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const createdProduct = await createProduct({
        title,
        price,
        description,
        rentPrice,
        status,
        userId,
        categories,
      });
      console.log("Created product:", createdProduct);
    } catch (e) {
      console.error("Error creating product:", e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>

      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>

      <label>
        Rent:
        <input
          type="number"
          value={rentPrice}
          onChange={(e) => setRentPrice(e.target.value)}
          required
        />
      </label>

      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>

      <button type="submit" disabled={loading}>
        {loading ? "Creating product..." : "Create product"}
      </button>

      {error && <p>Error: {error.message}</p>}
    </form>
  );
}
