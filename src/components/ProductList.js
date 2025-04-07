import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/products/');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-md rounded-md p-4">
          <img
            src={product.image_url || 'https://via.placeholder.com/150'}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-bold text-green-600 mt-2">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
