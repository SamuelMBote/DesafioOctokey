import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-2  border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 bg-gray-800 border-gray-600">
      <div className="w-full max-w-screen-xl mx-auto ">
        <span className="block text-sm sm:text-center text-gray-400">
          © 2023{' '}
          <a
            href="https://github.com/SamuelMBote"
            className="text-white hover:underline"
          >
            Samuel MBote
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
