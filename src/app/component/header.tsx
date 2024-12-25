import Image from "next/image";
import home1 from "/images/home1.jpg";

export default function Header() {
  return (
    <div>
      {/* Header Section */}
      <header className="text-white bg-black body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Logo Section */}
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
  <span className="ml-3 text-xl">
    <span className="text-yellow-300">Food</span><span className="text-white">tuck</span>
  </span>
</a>

          {/* Navigation */}
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-yellow-300 transition">Home</a>
            <a className="mr-5 hover:text-yellow-300 transition">Menu</a>
            <a className="mr-5 hover:text-yellow-300 transition">Block</a>
            <a className="mr-5 hover:text-yellow-300 transition">Pages</a>
            <a className="mr-5 hover:text-yellow-300 transition">About</a>
            <a className="mr-5 hover:text-yellow-300 transition">Shop</a>
            <a className="mr-5 hover:text-yellow-300 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Responsive Background Image Section */}
      <div className="relative w-full h-[150px] sm:h-[250px] md:h-[350px] lg:h-[450px]">
        <Image
          src={home1}
          alt="home"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority={true}
          className="absolute top-0 left-0"
        />
      </div>
    </div>
  );
}
