import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Logo and Description */}
          <div className="max-w-md">
            <h2 className="text-white text-2xl font-semibold mb-4">Trump Big Day</h2>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <SocialLink Icon={Facebook} href="#" />
            <SocialLink Icon={Twitter} href="#" />
            <SocialLink Icon={Linkedin} href="#" />
            <SocialLink Icon={Instagram} href="#" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            Copyright © 2025 Trumpbd
          </div>
          <div className="text-gray-400 text-sm">
            Design By Styceee
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ Icon, href }) => (
  <a 
    href={href}
    className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-gray-700/50 transition-colors"
  >
    <Icon size={18} className="text-gray-400" />
  </a>
);

export default Footer;