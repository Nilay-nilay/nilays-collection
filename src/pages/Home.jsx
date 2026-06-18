// import Hero from "../components/Hero";
// import Category from "../components/Category";

// function Home() {
//   return (
//     <>
//       <Hero />

//       <section id="categories" className="max-w-7xl mx-auto py-16 px-6">
//         <h2 className="text-4xl font-bold text-center mb-10">
//           Shop By Category
//         </h2>

//         <Category />
//       </section>
//     </>
//   );
// }

// export default Home;



import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import Product from "./Product";

function Home() {
  return (
    <>
      <HeroSection />
      <Categories />
      <Product />
    </>
  );
}

export default Home;