import Image from "next/image"
import hero from "/images/hero.jpg";

export default function Hero() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <Image
              alt="hero"
              className="object-cover object-center h-96 w-auto ml-52 mt-6"
              src={hero}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/3 lg:pl-10 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">

              <div className="flex-grow">
                <h1 className="text-black text-5xl title-font font-bold mb-3">
                  Starter Menu
                </h1>

                <div bg-blue>
                  <h3 className="leading-relaxed text-black">
                    Alder Grilled Chinook Saloom .
                  </h3>
                  <p className="mt-3 text- inline-flex items-center">
                    Toasted Fresch  Bread topped  with roman, cheddar
                    <br />
                    560 CAL
                  </p>
                </div>
                <hr />
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">

              <div className="flex-grow">
                <h2 className="text-yellow-500 text-lg title-font font-medium mb-3">
                  The Catalyzer
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <hr />
              </div>

            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">

              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Neptune
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}