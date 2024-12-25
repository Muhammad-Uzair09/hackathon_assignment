import Image from "next/image";
import hero4 from "/images/hero4.jpg";

export default function Hero4() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto flex flex-wrap items-center">
          
          {/* Image Section */}
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <Image
              alt="hero4"
              className="object-cover object-center w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] h-[550px] sm:h-[600px] md:h-[600px] lg:h-[700px] mx-auto"
              src={hero4}
              width={500}
              height={500}
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/3 lg:pl-10 lg:text-left text-center w-full">
            {/* Dessert Item 1 */}
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
                  Dessert
                </h1>

                <div className="border border-transparent hover:border-4 hover:border-purple-600 p-4 transition duration-300">
                  <h3 className="leading-relaxed text-black text-lg sm:text-xl font-semibold mb-3">
                    Fig and Lemon Cake
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

            {/* Dessert Item 2 */}
            <div className="flex flex-col mb-10 lg:items-start items-center border border-transparent hover:border-4 hover:border-purple-600 hover:shadow-lg transition duration-300 p-4">
              <div className="flex-grow">
                <h2 className="text-yellow-500 text-lg sm:text-xl title-font font-medium mb-3">
                  Creasy Mascarpone Cake
                </h2>
                <p className="leading-relaxed text-base text-gray-600 mb-3">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indigo juice poutine.
                </p>
                <hr />
              </div>
            </div>

            {/* Dessert Item 3 */}
            <div className="flex flex-col mb-10 lg:items-start items-center border border-transparent hover:border-4 hover:border-purple-600 hover:shadow-lg transition duration-300 p-4">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg sm:text-xl title-font font-medium mb-3">
                  Pastry, Blueberries, Lemon Juice
                </h2>
                <p className="leading-relaxed text-base text-gray-600">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indigo juice poutine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
