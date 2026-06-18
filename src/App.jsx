// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import Contact from "./pages/Contact";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";

// function App() {
//   return (
//     <BrowserRouter>
//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products/:category" element={<Products />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>

//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Layout>
                <Product />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <Layout>
                <About />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Layout>
                <Contact />
              </Layout>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;