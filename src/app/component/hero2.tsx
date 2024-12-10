

import Image from "next/image"
import hero2 from "/images/hero2.jpg"
export default function Hero2() {
    return (

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto flex flex-wrap">
                <div className="flex flex-wrap w-full px-52">
                    <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                        <div className="flex flex-col mb-10 lg:items-start items-center">

                            <div className="flex-grow">
                                <h1 className="text-black text-5xl title-font font-bold mb-3">
                                    Main Course
                                </h1>

                                <div>
                                    <h3 className="leading-relaxed text-black">
                                        optic Big Breakfast Combo Menue
                                    </h3>
                                    <p className="mt-3 text- inline-flex items-center">
                                        Toasted Fresch  Bread topped  with roman, cheddar
                                        <br />
                                        560 CAL
                                    </p>
                                </div>
                                <hr />
                            </div>

                            <div className="flex-grow mt-8">
                     

                                <div>
                                    <h3 className="leading-relaxed text-black">
                                        optic Big Breakfast Combo Menue
                                    </h3>
                                    <p className="mt-3 text- inline-flex items-center">
                                        Toasted Fresch  Bread topped  with roman, cheddar
                                        <br />
                                        560 CAL
                                    </p>
                                </div>
                                <hr />
                            </div>

                            <div className="flex-grow mt-8">
                   

                                <div>
                                    <h3 className="leading-relaxed text-black">
                                        optic Big Breakfast Combo Menue
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

                    </div>
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <Image
                            alt="hero"
                            className="object-cover object-center h-3/4 w-auto ml-28 mt-6"
                            src={hero2}
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}
