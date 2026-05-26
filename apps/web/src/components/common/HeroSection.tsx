import card from "@/assets/img/front.png";
// import { Button } from "../ui/button"; // FIX THIS
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="relative mb-8 min-h-[600px] overflow-hidden rounded-md">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#112240] to-[#1a3a5c]" />
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-amber-900/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-800/30 blur-[100px]" />
      <div className="absolute top-1/2 left-1/3 h-64 w-64 rounded-full bg-amber-700/10 blur-[80px]" />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative flex min-h-[600px] flex-col items-center justify-between px-6 py-14 lg:flex-row lg:px-20">
        <div className="z-10 flex flex-col gap-8 lg:w-1/2">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">
              Premium Real Estate
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-bold leading-tight text-white lg:text-6xl">
              Find Your{" "}
              <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Dream Home
              </span>
            </h1>
            <p className="text-lg font-light text-blue-200 lg:text-xl">
              Where Luxury Meets Comfort
            </p>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-slate-400 lg:text-base">
            Discover handpicked properties tailored to your lifestyle. From
            serene family villas to sleek city apartments — explore, compare,
            and secure your perfect space with confidence.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/search">
              <button className="group relative overflow-hidden rounded-xl px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105">
                <span className="absolute inset-0 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md" />
                <span className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/10 to-transparent" />
                <span className="absolute inset-[1px] rounded-[11px] bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative flex items-center gap-2">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Browse Listings
                </span>
              </button>
            </Link>

            <Link to="/services">
              <button className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-900/30 transition-all duration-300 hover:scale-105 hover:shadow-amber-800/40">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/10 to-white/10" />
                <span className="relative flex items-center gap-2">
                  Learn More
                  <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
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
                <p className="text-xl font-bold text-white lg:text-2xl">{value}</p>
                <p className="text-xs text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-12 hidden lg:mt-0 lg:flex lg:w-[45%] lg:justify-end">
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
            <img
              src={card}
              alt="Luxury property"
              className="h-[400px] w-full rounded-2xl object-cover"
            />

            <div className="absolute -bottom-5 -left-6 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-md">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400/20">
                <svg className="h-5 w-5 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-white">New Listing</p>
                <p className="text-[10px] text-slate-400">Bole, Addis Ababa</p>
              </div>
            </div>

            <div className="absolute -right-5 top-6 rounded-2xl border border-white/20 bg-white/10 px-4 py-2 shadow-xl backdrop-blur-md">
              <p className="text-xs text-slate-300">Starting from</p>
              <p className="text-sm font-bold text-amber-300">8,500 Birr</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;