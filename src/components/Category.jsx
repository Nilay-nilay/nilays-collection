import { Link } from "react-router-dom";

import laptop from "../assets/products/laptop.jpg";
import mobile from "../assets/products/smartmobile.jpg";
import headphone from "../assets/products/headspeaker.jpg";
import watch from "../assets/products/smartwatch.jpg";

const categories = [
  { name: "laptop", img: laptop },
  { name: "mobile", img: mobile },
  { name: "headphone", img: headphone },
  { name: "smartwatch", img: watch },
];

function Category() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {categories.map((item) => (
        <Link to={`/products/${item.name}`} key={item.name}>
          <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
            <img src={item.img} className="h-56 w-full object-cover" />
            <div className="p-4 text-center font-bold capitalize">
              {item.name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Category;