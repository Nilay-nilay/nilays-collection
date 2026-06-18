function Card({ product }) {
  return (
    <div className="bg-white shadow rounded-lg p-4">

      <img
        src={product.image}
        alt={product.title}
        className="h-52 w-full object-cover"
      />

      <h3 className="font-bold mt-3">
        {product.title}
      </h3>

      <p className="text-green-600 font-bold">
        ₹{product.price}
      </p>

      <button className="w-full mt-3 bg-yellow-400 py-2 rounded">
        Add To Cart
      </button>

    </div>
  );
}

export default Card;