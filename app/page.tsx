'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-screen text-center">
      {isClient ? (
        <video 
          autoPlay 
          loop 
          muted 
          className="fixed top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/boring.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div 
          className="fixed top-0 left-0 w-full h-full object-cover z-0" 
          style={{ backgroundImage: "url('/fallback-image.jpg')" }}
        />
      )}

      {/* Full-Screen Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

      {/* Overlay Content */}
      <div className="relative z-20">
        <h1 className="text-6xl font-extrabold mb-4 text-white">
          Hello, I'm Travis Clarke
        </h1>
        <p className="text-xl mb-6 text-gray-200">
          I'm an ENT resident, hoping to specialize in Facial Plastics.
        </p>
        <a
          href="/cv"
          className="inline-block bg-gradient-to-r from-blue-400 to-indigo-600 text-white px-8 py-3 rounded-full shadow-lg hover:from-indigo-600 hover:to-blue-400 hover:no-underline transition-all duration-300 transform hover:scale-110"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
