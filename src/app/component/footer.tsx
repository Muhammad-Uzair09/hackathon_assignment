import React from "react";
import Image from "next/image";
import footer1 from "/images/footer1.jpg";
import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-semibold">
            <span className="text-orange-500">St</span>ill Need Our Support
          </h2>
          <p className="mt-4 text-sm md:text-base">
            Don't wait, make a smart & logical quote here. It's pretty easy.
          </p>
        </div>
        <div className="flex mt-4 md:mt-0 w-full md:w-auto">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="flex-grow md:flex-grow-0 bg-orange-500 text-white py-2 px-4 mr-2"
          />
          <button className="bg-white text-orange-500 py-2 px-4">Subscribe Now</button>
        </div>
      </div>

      <hr className="border-orange-500 my-4 mx-4 md:mx-16" />

      {/* Middle Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-16 py-6">
        <div>
          <h3 className="text-xl font-semibold uppercase mb-4">About Us</h3>
          <p className="text-sm mb-6">
            Corporate clients and leisure travelers rely on us for dependable, safe, and professional chauffeured car service in major cities worldwide.
          </p>
          <div className="flex items-start gap-4">
            <div className="bg-orange-500 p-4 rounded">
              <PiClockClockwiseBold className="text-2xl text-white" />
            </div>
            <div>
              <h4 className="font-semibold">Opening Hours</h4>
              <p>Mon - Sat: 8.00 - 6.00</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold uppercase mb-4">Useful Links</h3>
          <ul className="space-y-2">
            {["About", "News", "Partner", "Team", "Menu", "Contact"].map((link) => (
              <li key={link} className="hover:underline cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold uppercase mb-4">Help?</h3>
          <ul className="space-y-2">
            {["FAQ", "Terms & Conditions", "Reporting", "Documentation", "Support Policy", "Privacy"].map((link) => (
              <li key={link} className="hover:underline cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold uppercase mb-4">Recent Posts</h3>
          {[1, 2, 3].map((post) => (
            <div key={post} className="flex items-center gap-4 mb-4">
              <Image src={footer1} alt="Post Image" width={80} height={80} className="rounded" />
              <div>
                <p className="text-sm">20 Feb 2022</p>
                <h4 className="text-base">Keep Your Business</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 py-4 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between text-gray-400">
        <span className="text-sm">© 2023 Flowbite™. All Rights Reserved.</span>
        <div className="flex gap-4 mt-4 md:mt-0">
          {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map((Icon, idx) => (
            <div key={idx} className="bg-white p-2 rounded-full">
              <Icon className="text-black text-lg" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
