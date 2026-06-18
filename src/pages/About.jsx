import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function About() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">

      <div className="bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">
          About Nilay's Collection
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          Welcome to <span className="font-bold">Nilay's Collection</span>.
          We provide quality products at affordable prices with a focus on
          customer satisfaction and a seamless shopping experience.
        </p>

        <div className="border-t pt-6">

          <h2 className="text-2xl font-bold mb-6 text-center">
            Contact Information
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">

            {/* Phone */}
            <a
              href="tel:9903762127"
              className="flex items-center gap-3 bg-blue-100 px-6 py-4 rounded-xl shadow hover:scale-105 transition"
            >
              <FaPhoneAlt className="text-blue-600 text-2xl" />
              <span className="font-semibold text-lg">
                9903762127
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919903762127"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-green-100 px-6 py-4 rounded-xl shadow hover:scale-105 transition"
            >
              <FaWhatsapp className="text-green-600 text-3xl" />
              <span className="font-semibold text-lg">
                WhatsApp: 9903762127
              </span>
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;