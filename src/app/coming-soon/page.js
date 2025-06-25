"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 flex flex-col items-center justify-center p-6 text-center font-sans">
      
      {/* 🌿 Emoji Logo */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl mb-2"
      >
        🌿
      </motion.div>

      {/* Small Brand Name */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl text-green-700 font-semibold tracking-widest uppercase mb-1"
      >
        bageechi
      </motion.p>

      {/* Big Launching Soon Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-green-900 mb-6 drop-shadow-md"
      >
        Launching Soon
      </motion.h1>

      {/* Instagram QR Card */}
      <motion.a
        href="https://www.instagram.com/bageechi.in"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white p-3 rounded-xl shadow-sm mb-5 cursor-pointer hover:shadow-lg transition-transform hover:scale-105"
      >
        <Image
          src="/qr.jpeg"
          alt="Instagram QR"
          width={290}
          height={100}
          className="rounded"
        />
        <p className="mt-2 text-sm text-gray-600 font-medium">@bageechi.in</p>
      </motion.a>

      {/* Contact and WhatsApp */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="text-base text-green-800 mb-6 flex flex-col items-center gap-2"
      >
        <a href="tel:9928114425" className="underline hover:text-green-900">
          📞 Call us: 9928114425
        </a>
        <a
          href="https://wa.me/919928114425"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
        >
          💬 Chat on WhatsApp
        </a>
      </motion.div>

      {/* Map Card with Clickable Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="relative w-full max-w-md md:max-w-xl lg:max-w-2xl h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-xl border border-gray-200 bg-white"
      >
        <iframe
          src="https://maps.google.com/maps?q=27.654611,75.178111&z=16&output=embed"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full rounded-xl"
        ></iframe>
        {/* Overlay "View Map" button */}
        <a
          href="https://maps.google.com/?q=27.654611,75.178111"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full shadow hover:bg-green-700 transition"
        >
          View Map
        </a>
      </motion.div>

      {/* Footer with Address */}
      <div className="mt-10 text-gray-500 text-sm text-center space-y-1">
        <p>
          &copy; 2025 <span className="italic lowercase">bageechi</span>. All rights reserved.
        </p>
        {/* <p className="text-xs">
          📍 <span className="font-medium">Address:</span> Rohit Nursery, Near Railway Station,
          Makrana, Rajasthan - 341505
        </p> */}
      </div>
    </div>
  );
}
