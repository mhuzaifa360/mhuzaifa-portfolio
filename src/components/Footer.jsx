// src/components/Footer.jsx
import { useState, useEffect } from "react";
import { quickLinks, services, socialLinks } from "./constant/footer";
import {navLinks} from "./constant/navLinks";
import {huzaifaInfo} from "./constant/huzaifaInfo";

import addressIcon from "../assets/icons/icons8-address-100.png";
import emailIcon from "../assets/icons/icons8-mail-100.png";
import phoneIcon from "../assets/icons/icons8-phone-100.png";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

 
  return (
    <footer className="bg-gradient-to-b from-[#0a0c12] to-[#05060a] pt-16 pb-8 px-6 md:px-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#3b4eff]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 - Brand */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-extrabold bg-gradient-to-r from-white to-[#8b9dff] bg-clip-text text-transparent mb-4">
              M Huzaifa
            </h3>
            <p className="text-[#b9c3e6] text-sm mb-4">
              MERN Stack Developer passionate about building modern, scalable
              web applications that deliver exceptional user experiences.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[#7e8eff] text-xs">
                Available for freelance work
              </span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#b9c3e6] hover:text-[#5f7cff] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="text-[#5f7cff]">▹</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div
            className={`transition-all duration-1000 delay-400 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h4 className="text-white font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-[#b9c3e6] text-sm flex items-center gap-2">
                    <span className="text-[#5f7cff]">•</span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div
            className={`transition-all duration-1000 delay-600 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h4 className="text-white font-bold text-lg mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <img src={emailIcon} alt="Email Icon" className="w-5 h-5" />
                <a
                  href="mailto:huzaifa@example.com"
                  className="text-[#b9c3e6] hover:text-[#5f7cff] transition-colors text-sm"
                >
                  {huzaifaInfo.personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <img src={phoneIcon} alt="Phone Icon" className="w-5 h-5" />
                <a
                  href="tel:+923001234567"
                  className="text-[#b9c3e6] hover:text-[#5f7cff] transition-colors text-sm"
                >
                  {huzaifaInfo.personalInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <img src={addressIcon} alt="Address Icon" className="w-5 h-5" />
                <span className="text-[#b9c3e6] text-sm">{huzaifaInfo.personalInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div
          className={`border-t border-b border-[#1e243e] py-8 mb-8 transition-all duration-1000 delay-800 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-[#1a1f36] flex items-center justify-center text-xl ${social.color} hover:scale-110 transition-all duration-300 border border-[#2a3150] hover:border-[#5f7cff]`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-[#0f1222] border border-[#2a3150] rounded-lg text-[#cdd9ff] text-sm focus:outline-none focus:border-[#5f7cff] transition-colors"
              />
              <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#3b4eff] to-[#5f72ee] text-white text-sm font-semibold hover:scale-105 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[#7e8eff] text-md">
            © {year} Muhammad Huzaifa. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
