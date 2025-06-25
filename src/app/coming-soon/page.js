"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 flex flex-col items-center justify-center p-6 text-center">
      
      {/* Small Bageechi Text */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl text-green-600 font-bold tracking-widest uppercase mb-2"
      >
        bageechi
      </motion.p>

      {/* Big Coming Soon Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-green-800 mb-8 drop-shadow-lg"
      >
        Coming Soon
      </motion.h1>

      {/* Instagram Card */}
      <motion.a
        href="https://www.instagram.com/bageechi.in"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white p-4 rounded-xl shadow-md mb-6 cursor-pointer hover:shadow-lg transition-transform hover:scale-105"
      >
        <Image
          src="/qr.jpeg"
          alt="Instagram QR"
          width={200}
          height={200}
          className="rounded"
        />
        <p className="mt-2 text-sm font-medium text-gray-600">@bageechi.in</p>
      </motion.a>

      {/* Phone Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="text-lg text-green-800 mb-8"
      >
        📞 For inquiries:{" "}
        <a href="tel:9928114425" className="underline">
          9928114425
        </a>
      </motion.div>

      {/* Map Card with Link */}
     {/* Map Card - Non-clickable drag but zoom works */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2 }}
  className="w-full max-w-md md:max-w-xl lg:max-w-2xl h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-xl border border-gray-200 bg-white hover:shadow-lg transition-transform hover:scale-105"
>
  <iframe
    src="https://maps.google.com/maps?q=27.654611,75.178111&z=15&output=embed&scrollwheel=false&draggable=false"
    width="100%"
    height="100%"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full h-full rounded-xl"
  ></iframe>
</motion.div>

      {/* Footer */}
      <p className="mt-10 text-gray-500 text-sm">
        &copy; 2025 <span className="italic lowercase">bageechi</span>. All rights reserved.
      </p>
    </div>
  );
}
