import { useState } from "react";
import { createProduct } from "../api/api";

export default function ManageProducts() {
  const [formData, setFormData] = useState({
    name: "", description: "", price: "", category: "", image_url: ""
  });
  const [imageFile, setImageFile] = useState(null);
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) data.append(key, formData[key]);
    });

    if (imageFile) {
      data.append("image_file", imageFile);
    }

    try {
      await createProduct(data, token);
      alert("Product created");
    } catch (err) {
      console.error(err);
      alert("Failed to create product");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4">
      <input name="name" placeholder="Name" onChange={handleChange} className="border p-1 w-full" />
      <input name="description" placeholder="Description" onChange={handleChange} className="border p-1 w-full" />
      <input name="price" placeholder="Price" type="number" onChange={handleChange} className="border p-1 w-full" />
      <input name="category" placeholder="Category" onChange={handleChange} className="border p-1 w-full" />
      
      <div className="space-y-1">
        <label>Image File (optional)</label>
        <input type="file" accept="image/*" onChange={handleFileChange} className="border p-1 w-full" />
      </div>

      <div className="space-y-1">
        <label>OR Image URL</label>
        <input name="image_url" placeholder="Image URL" onChange={handleChange} className="border p-1 w-full" />
      </div>

      <button type="submit" className="bg-green-600 text-white p-2">Add Product</button>
    </form>
  );
}
