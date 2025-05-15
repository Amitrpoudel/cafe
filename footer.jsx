import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaFacebook, FaTiktok, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/flogo.png";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[black] text-white py-10 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center lg:items-start">
          <img
            src={logo}
            alt="logo"
            className="w-32 md:w-40 lg:w-44 object-contain"
          />
        </div>

        {/* Company Description */}
        <div className="text-center sm:text-left ">
          <p className="md:mt-8 text-white md:-ml-32 text-xl">
          Enjoy our artisanal coffee and<br/>
           let the cozy moments unfold!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-white">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about-us" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center sm:justify-start gap-5 text-2xl">
            <a href="https://www.facebook.com/profile.php?id=100090825697427" className="hover:text-blue-500 transition text-3xl">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/cafecentralnepal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-pink-500 transition text-3xl">
              <FaInstagram />
            </a>
          </div>
          <div className="mt-5">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28255.851845446585!2d85.3070145990235!3d27.717858064675166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190262f6dc9b%3A0xd561d1bf9c4bfc97!2sCafe%20Central!5e0!3m2!1sen!2snp!4v1746936663147!5m2!1sen!2snp"
  width="100%"
  height="250"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
          </div>

          <div className="mt-4">
            <h1 className="text-lg">Contact Information:</h1>
            <a href="tel:980-2661498">980-2661498</a>
          </div>
   

        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-white mt-10 border-t border-gray-700 pt-4 text-sm">
        &copy; {new Date().getFullYear()} Cafecentral. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;