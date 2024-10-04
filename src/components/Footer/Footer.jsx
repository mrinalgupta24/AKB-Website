import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-12 text-left">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <img
              src="../../images/logo2.png"
              className="h-14"
              alt="Logo"
            />
            <p className="text-base leading-relaxed text-gray-600 mt-7">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              <li>
                <a
                  href="#"
                  title="Twitter"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Facebook"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Instagram"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="GitHub"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-black uppercase">
              Company
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title="About"
                  className="text-base text-black transition-all duration-200 hover:text-blue-700"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Features"
                  className="text-base text-black transition-all duration-200 hover:text-blue-700"
                >
                  Initiatives
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Works"
                  className="text-base text-black transition-all duration-200 hover:text-blue-700"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Career"
                  className="text-base text-black transition-all duration-200 hover:text-blue-700"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-black uppercase">
              Help
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title="Customer Support"
                  className="text-base text-black transition-all duration-200 hover:text-blue-700"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Terms & Conditions"
                  className="text-base text-black transition-all duration-200 hover:text-blue-700"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Privacy Policy"
                  className="text-base text-black transition-all duration-200 hover:text-blue-700"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-black uppercase">
              Subscribe to newsletter
            </p>

            <form action="#" method="POST" className="mt-6">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-700 caret-blue-700"
                />
              </div>

              <button className="bg-black text-white font-medium py-3 px-4 rounded transition-all hover:bg-black active:scale-95 mt-6">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">
          © Copyright 2024, All Rights Reserved by AKB
        </p>
      </div>
    </section>
  );
};

export default Footer;
