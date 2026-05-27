import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

// Replace these with your actual images (import or public URLs)
const heroImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format",
];

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto‑advance
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 2500); // 2.5 seconds
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden">
      {/* Gradient mesh backdrop */}
      <div className="absolute inset-0 h-full w-full">
        <svg
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1440" height="600" fill="#ffffff" />
          <circle cx="200" cy="150" r="280" fill="#f5e9d4" fillOpacity="0.7" />
          <circle cx="500" cy="100" r="300" fill="#f5d5a8" fillOpacity="0.6" />
          <circle cx="900" cy="180" r="320" fill="#b9b9f9" fillOpacity="0.5" />
          <circle cx="1200" cy="80" r="260" fill="#533afd" fillOpacity="0.15" />
          <circle cx="1350" cy="200" r="220" fill="#ea2261" fillOpacity="0.2" />
          <circle cx="100" cy="400" r="180" fill="#f96bee" fillOpacity="0.1" />
          <circle cx="700" cy="350" r="250" fill="#9b6829" fillOpacity="0.08" />
          <filter id="blur">
            <feGaussianBlur stdDeviation="60" />
          </filter>
          <g filter="url(#blur)">
            <circle cx="200" cy="150" r="280" fill="#f5e9d4" fillOpacity="0.7" />
            <circle cx="500" cy="100" r="300" fill="#f5d5a8" fillOpacity="0.6" />
            <circle cx="900" cy="180" r="320" fill="#b9b9f9" fillOpacity="0.5" />
            <circle cx="1200" cy="80" r="260" fill="#533afd" fillOpacity="0.15" />
            <circle cx="1350" cy="200" r="220" fill="#ea2261" fillOpacity="0.2" />
            <circle cx="100" cy="400" r="180" fill="#f96bee" fillOpacity="0.1" />
            <circle cx="700" cy="350" r="250" fill="#9b6829" fillOpacity="0.08" />
          </g>
        </svg>
      </div>

      {/* Main content — full height, flex container to center card */}
      <div className="relative z-10 flex min-h-[calc(100vh-72px)] w-full items-center px-4 py-8 md:px-8 lg:px-12">
        {/* Floating white card */}
        <div className="mx-auto w-full rounded-2xl bg-white shadow-[0_8px_24px_rgba(0,55,112,0.08),0_2px_6px_rgba(0,55,112,0.04)] border border-[#e3e8ee] p-8 md:p-12 lg:p-16">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            {/* Left column: copy & CTAs */}
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#b9b9f9] px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#533afd]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.1px] text-[#4434d4]">
                  Premium Real Estate
                </span>
              </div>
              <h1 className="text-5xl font-light tracking-[-1.4px] text-[#0d253d] md:text-7xl md:tracking-[-1.4px] lg:text-8xl">
                Find Your{" "}
                <span className="bg-gradient-to-r from-[#533afd] to-[#ea2261] bg-clip-text text-transparent">
                  Dream Home
                </span>
              </h1>
              <p className="text-xl font-light tracking-[-0.2px] text-[#273951] md:text-2xl">
                Where Luxury Meets Comfort
              </p>
              <p className="max-w-lg text-[15px] font-light leading-relaxed text-[#64748d]">
                Discover handpicked properties tailored to your lifestyle. From
                serene family villas to sleek city apartments — explore, compare,
                and secure your perfect space with confidence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/search">
                  <button className="rounded-full bg-[#533afd] px-4 py-2 text-[16px] font-normal text-white transition-all duration-200 hover:bg-[#4434d4] focus:outline-none focus:ring-2 focus:ring-[#533afd] focus:ring-offset-2">
                    Browse Listings
                  </button>
                </Link>
                <Link to="/services">
                  <button className="rounded-full border border-[#533afd] bg-white px-4 py-2 text-[16px] font-normal text-[#533afd] transition-all duration-200 hover:bg-[#f6f9fc] focus:outline-none focus:ring-2 focus:ring-[#533afd] focus:ring-offset-2">
                    Learn More
                  </button>
                </Link>
              </div>
              <div className="flex gap-8">
                {[
                  { value: "1,200+", label: "Properties" },
                  { value: "98%", label: "Happy Clients" },
                  { value: "12", label: "Cities" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-2xl font-light tracking-[-0.26px] text-[#0d253d] [font-feature-settings:'tnum']">
                      {value}
                    </p>
                    <p className="text-[13px] font-normal text-[#64748d]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column: image carousel */}
            <div className="flex-1">
              <div className="relative overflow-hidden rounded-xl bg-[#f6f9fc]">
                {/* Carousel container with aspect ratio and vertical centering */}
                <div className="relative aspect-[4/3] w-full">
                  {heroImages.map((img, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        idx === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Property ${idx + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Controls overlay (play/pause + dots) */}
                <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
                  {/* Pause/Play button */}
                  

                  {/* Dot indicators */}
                  <div className="flex gap-2">
                    {heroImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`h-2 rounded-full transition-all ${
                          idx === currentIndex
                            ? "w-6 bg-[#533afd]"
                            : "w-2 bg-white/60 hover:bg-white/90"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-center text-[11px] font-light text-[#64748d]">
                Handpicked properties • curated by Ethio Property
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;