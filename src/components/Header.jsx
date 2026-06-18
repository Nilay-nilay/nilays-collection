// import { Link } from "react-router-dom";

// function Header() {
//   return (
//     <header className="bg-black text-white px-6 py-4 flex justify-between items-center">
//       <h1 class="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-600 drop-shadow-lg animate-pulse">
//     Nilay's Collection
//   </h1>

//       <nav className="flex gap-6">
//         <Link to="/">Home</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/cart">Cart</Link>
//         <Link to="/login">Login</Link>
//       </nav>
//     </header>
//   );
// }

// export default Header;
import { Link } from "react-router-dom";

function Header() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/login";
  };

  return (
    <header className="bg-yellow-400 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">

        <div className="flex flex-col md:flex-row items-center gap-4">

          {/* Logo */}
          <div className="flex-shrink-0">
           <Link
  to="/"
  className="
    text-3xl
    md:text-4xl
    font-black
    tracking-wide
    bg-gradient-to-r
    from-blue-700
    to-blue-900
    bg-clip-text
    text-transparent
    hover:scale-105
    transition-all
    duration-300
  "
>
  Nilay's Collection
</Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 w-full">
            <input
              type="text"
              placeholder="Search for products, brands and more..."
              className="
                w-full
                px-4
                py-2
                rounded-lg
                border
                border-gray-300
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 font-medium">

            <Link
              to="/"
              className="hover:text-blue-700"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="hover:text-blue-700"
            >
              Products
            </Link>

            <Link
              to="/about"
              className="hover:text-blue-700"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="hover:text-blue-700"
            >
              Contact
            </Link>

          </nav>

          {/* Login / Logout */}
          <div>
            {isLoggedIn ? (
              <button
                onClick={logout}
                className="
                  bg-red-500
                  text-white
                  px-4
                  py-2
                  rounded-lg
                  hover:bg-red-600
                "
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="
                  bg-blue-600
                  text-white
                  px-4
                  py-2
                  rounded-lg
                  hover:bg-blue-700
                "
              >
                Login
              </Link>
            )}
          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;