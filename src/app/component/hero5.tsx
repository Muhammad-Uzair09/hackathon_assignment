
import Image from "next/image"
import logo1 from "/images/logo1.png"
import logo2 from "/images/logo2.png"
import logo3 from "/images/logo3.png"
import logo4 from "/images/logo4.png"
import logo5 from "/images/logo5.png"
import logo6 from "/images/logo6.png"

export default function Hero5() {
    return (
        <div className="mb-8 border hover:outline hover:border-purple-600">

            <div className="text-center">
                <h5>Pattern & Clients</h5>
                <h1 className="text-5xl font-bold">We Work With the best people</h1>
                <div className="flex flex-row w-40 items-center ">
                    <Image src={logo1} alt="logo1" />
                    <Image src={logo2} alt="logo2" />
                    <Image src={logo3} alt="logo3" />
                    <Image src={logo4} alt="logo4" />
                    <Image src={logo5} alt="logo5" />
                    <Image src={logo6} alt="logo6" />
                </div>
            </div>

        </div>
    )
}