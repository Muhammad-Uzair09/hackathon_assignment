import Image from "next/image"
import logo1 from "/images/logo1.png"
import logo2 from "/images/logo2.png"
import logo3 from "/images/logo3.png"
import logo4 from "/images/logo4.png"
import logo5 from "/images/logo5.png"
import logo6 from "/images/logo6.png"

export default function Footerlogos() {
    return (
        <div className="mb-8 border hover:outline hover:border-purple-600">
            <div className="text-center">
                <h5>Pattern & Clients</h5>
                <h1 className="text-5xl font-bold">We Work With the Best People</h1>
                <div className="flex justify-center space-x-8 mt-6">
                    {/* Logos */}
                    <Image src={logo1} alt="logo1" width={100} height={100} />
                    <Image src={logo2} alt="logo2" width={100} height={100} />
                    <Image src={logo3} alt="logo3" width={100} height={100} />
                    <Image src={logo4} alt="logo4" width={100} height={100} />
                    <Image src={logo5} alt="logo5" width={100} height={100} />
                    <Image src={logo6} alt="logo6" width={100} height={100} />
                </div>
            </div>
        </div>
    )
}
