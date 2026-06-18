// import hero from "../assets/hero.png";
// import { Link } from "react-router-dom";

// function Hero() {
//   return (
//     <section className="relative h-screen">
//       <img
//         src={hero}
//         className="absolute w-full h-full object-cover"
//         alt="Nilay's Collection"
//       />

//       <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white">
//        <h1 class="text-4xl md:text-5xl font-bold tracking-wide text-pink-600 text-center mt-4">
//   Premium Electronics Store
// </h1>

          
//         {/* </h1> */}

//         <p className="text-lg mt-3 text-blue-200">
//           Shop the latest gadgets at unbeatable prices
//         </p>
//         {/* <Link
//           to="#categories"
//           className="mt-6 bg-yellow-500 px-6 py-3 rounded-lg font-bold"
//         >
//           Shop Now
//         </Link> */}
//       </div>
//     </section>
//   );
// }

// export default Hero;


import heroImg from "../assets/heroImg.jpg";

function HeroSection() {
  return (
    <section className="relative h-[500px] overflow-hidden">

      <img
        src={heroImg}
        alt="Hero"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30 flex items-center">

        <div className="max-w-7xl mx-auto px-8 text-white">

          <h1 className="text-5xl font-bold">
            Welcome to
          </h1>

          <h2 className="text-6xl font-extrabold text-yellow-300">
            Nilay's Collection
          </h2>

          <p className="mt-4 text-xl">
            Style You Love, Quality You Trust
          </p>

          <button className="mt-6 bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold">
            Shop Now
          </button>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;