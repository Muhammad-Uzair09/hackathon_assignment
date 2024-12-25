import Image from "next/image";
import hero6 from "/images/hero6.jpg";

export default function Hero6() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto flex flex-wrap items-center">
        {/* Text Section */}
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pr-10 lg:text-left text-center w-full">
          {/* Menu Item 1 */}
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
              <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
                Drinks
              </h1>

              <div className="border border-transparent hover:border-4 hover:border-purple-600 p-4 transition duration-300 min-h-[150px]">
                <h3 className="leading-relaxed text-black text-lg sm:text-xl font-semibold mb-3">
                  Cafe Macchiato
                </h3>
                <p className="mt-3 text-sm sm:text-base inline-flex items-center">
                  Toasted Fresh Bread topped with romaine, cheddar
                  <br />
                  560 CAL
                </p>
              </div>
              <hr className="my-6" />
            </div>
          </div>

          {/* Menu Item 2 */}
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="border border-transparent hover:border-4 hover:border-purple-600 hover:shadow-lg transition duration-300 p-4 min-h-[150px]">
              <h2 className="text-black text-lg sm:text-xl title-font font-medium mb-3">
                Aperol Spritz Cappuccino
              </h2>
              <p className="leading-relaxed text-base text-gray-600 mb-3">
                Toasted Fresh Bread topped with romaine, cheddar
                <br />
                560 CAL
              </p>
              <hr />
            </div>
          </div>

          {/* Menu Item 3 */}
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="border border-transparent hover:border-4 hover:border-purple-600 hover:shadow-lg transition duration-300 p-4 min-h-[150px]">
              <h2 className="text-gray-900 text-lg sm:text-xl title-font font-medium mb-3">
                Caffe Latte Campuri
              </h2>
              <p className="leading-relaxed text-base text-gray-600">
                Toasted Fresh Bread topped with romaine, cheddar
                <br />
                560 CAL
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <Image
            alt="hero6"
            src={hero6}
            className="object-cover object-center w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] h-[550px] sm:h-[600px] md:h-[600px] lg:h-[700px] mx-auto"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
