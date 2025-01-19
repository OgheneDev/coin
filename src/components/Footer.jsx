import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react'; // Keep the existing imports

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
            <SocialLink Icon={Twitter} href="http://x.com/ThatHonestDev" />
            <SocialLink Icon={Instagram} href="#" />
            <SocialLinkTelegram href="https://t.me/trumpbigday" /> {/* Correct Telegram Icon */}
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

// SocialLink for SVG Icons
const SocialLink = ({ Icon, href }) => (
  <a 
    href={href}
    className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-gray-700/50 transition-colors"
  >
    <Icon size={18} className="text-gray-400" />
  </a>
);

// SocialLink for Correct Telegram Icon
const SocialLinkTelegram = ({ href }) => (
  <a 
    href={href}
    className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-gray-700/50 transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 text-gray-400" /* Ensures consistent style */
    >
      {/* Actual Telegram Icon Shape */}
      <path d="M9.943 13.338l-.428 3.772c.615 0 .876-.26 1.193-.568l2.865-2.65 5.943 4.318c1.088.6 1.87.285 2.152-.997l3.906-18.225c.348-1.586-.566-2.22-1.56-1.825L2.146 9.795c-1.516.615-1.497 1.5-.258 1.872l4.26 1.315 9.75-6.15c.462-.3.882-.135.536.164L9.943 13.338z" />
    </svg>
  </a>
);

export default Footer;
