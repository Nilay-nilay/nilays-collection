function Categories() {
  const categories = [
    "Mobiles",
    "Electronics",
    "Fashion",
    "Home",
    "Beauty",
    "Toys",
    "Grocery",
  ];

  return (
    <div className="bg-white shadow py-5">

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-7 gap-4 text-center">

        {categories.map((item) => (
          <div
            key={item}
            className="font-semibold hover:text-blue-600 cursor-pointer"
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  );
}

export default Categories;