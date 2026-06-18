// import { useParams } from "react-router-dom";

// const data = {
//   laptop: ["MacBook Air", "Dell Inspiron", "HP Pavilion"],
//   mobile: ["iPhone", "Samsung Galaxy", "OnePlus"],
//   headphone: ["Sony WH-1000XM5", "Boat Rockerz", "JBL Tune"],
//   smartwatch: ["Apple Watch", "Noise Watch", "Fire Boltt"],
// };

// function Products() {
//   const { category } = useParams();

//   return (
//     <div className="max-w-6xl mx-auto py-10 px-6">
//       <h1 className="text-3xl font-bold capitalize mb-6">
//         {category} Products
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {(data[category] || []).map((item, i) => (
//           <div key={i} className="p-4 border rounded-lg shadow">
//             <h2 className="font-semibold">{item}</h2>
//             <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
//               Buy Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;


// import Card from "../components/Card";

// const products = [
//   {
//     id: 1,
//     title: "Headphones",
//     price: 1999,
//     image:
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
//   },

//   {
//     id: 2,
//     title: "Shoes",
//     price: 899,
//     image:
//       "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//   },

//   {
//     id: 3,
//     title: "Watch",
//     price: 2999,
//     image:
//       "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
//   },

//   {
//     id: 4,
//     title: "Laptop",
//     price: 45999,
//     image:
//       "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
//   },
// ];

// function Product() {
//   return (
//     <div className="max-w-7xl mx-auto py-10">

//       <h2 className="text-4xl font-bold mb-8">
//         Best Of Nilay's Collection
//       </h2>

//       <div className="grid md:grid-cols-4 gap-6">

//         {products.map((product) => (
//           <Card
//             key={product.id}
//             product={product}
//           />
//         ))}

//       </div>

//     </div>
//   );
// }

// export default Product;



import { useState } from "react";
import products from "../data/products";

function Product() {
  const categories = [
    "All",
    "Mobiles",
    "Electronics",
    "Fashion",
    "Home",
    "Beauty",
    "Toys",
    "Grocery",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Nilay's Collection
      </h1>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full transition ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="font-bold text-lg">
                {product.name}
              </h2>

              <p className="text-gray-600">
                {product.category}
              </p>

              <p className="text-green-600 font-bold text-xl mt-2">
                ₹{product.price}
              </p>

              <button className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;