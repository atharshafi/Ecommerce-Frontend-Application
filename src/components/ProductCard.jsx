export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-yellow-100 shadow-lg rounded-lg overflow-hidden border hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 truncate">{product.name}</h2>
        <p className="text-lg font-bold text-gray-600 mt-2">${product.price}</p>
        <button
          onClick={() => onAdd(product)}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
