import HeroSection from "@/components/common/HeroSection";
import PropertySection from "@/components/property_listing/PropertySection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Gradient mesh hero */}
      <HeroSection />

      {/* Main content container – increased spacing between sections */}
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 lg:py-24 space-y-24 md:space-y-32">
        
        {/* Property sections – each section has proper gap between cards (handled inside PropertySection) */}
        <PropertySection title="Recent Offers" recent={true} />
        <PropertySection title="Houses" type="House" />
        <PropertySection title="Apartments" type="Apartment" />
        <PropertySection title="Land" type="Land" />

        {/* === NEW: Cream‑band feature section === */}
        <div className="rounded-xl bg-[#f5e9d4] p-8 md:p-12 lg:p-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block rounded-full bg-[#b9b9f9] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.1px] text-[#4434d4]">
              Why choose us
            </span>
            <h2 className="mt-4 text-4xl font-light tracking-[-0.96px] text-[#0d253d] md:text-5xl lg:text-6xl">
              A smarter way to own property
            </h2>
            <p className="mt-4 text-[15px] font-light text-[#64748d] max-w-2xl mx-auto">
              We combine deep market expertise with cutting‑edge technology to help you find, finance, and close on your dream home.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "Verified Listings",
                description: "Every property is manually reviewed and authenticated by our local experts.",
              },
              {
                icon: Clock,
                title: "Fast Transactions",
                description: "Digital paperwork, e‑signatures, and secure payments – all in one place.",
              },
              {
                icon: Users,
                title: "Trusted Advisors",
                description: "Get matched with a dedicated agent who knows your neighbourhood.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/60 rounded-lg p-6 border border-[#e3e8ee]/50 shadow-[0_1px_3px_rgba(0,55,112,0.08)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#533afd]/10 text-[#533afd]">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-light tracking-[-0.26px] text-[#0d253d]">{feature.title}</h3>
                <p className="mt-2 text-[15px] font-light text-[#64748d]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* === NEW: Dashboard mockup section (product UI composite) === */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <span className="inline-block rounded-full bg-[#b9b9f9] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.1px] text-[#4434d4]">
              Take control
            </span>
            <h2 className="mt-4 text-4xl font-light tracking-[-0.96px] text-[#0d253d] md:text-5xl">
              Dashboard for investors
            </h2>
            <p className="mt-4 text-[15px] font-light text-[#64748d]">
              Monitor your portfolio, track rental income, and analyse market trends – all from a single, beautiful interface.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Real‑time property valuations",
                "Tenant payment reminders",
                "Maintenance request tracking",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[15px] font-light text-[#0d253d]">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#533afd]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild className="rounded-full bg-[#533afd] px-4 py-2 text-[16px] font-normal text-white hover:bg-[#4434d4]">
                <Link to="/profile">Explore dashboard →</Link>
              </Button>
            </div>
          </div>

          {/* Faux IDE / dashboard composite */}
          <div className="rounded-xl bg-[#0d253d] shadow-[0_8px_24px_rgba(0,55,112,0.08),0_2px_6px_rgba(0,55,112,0.04)] overflow-hidden border border-[#e3e8ee]/10">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#ea2261]" />
                <div className="h-3 w-3 rounded-full bg-[#f96bee]" />
                <div className="h-3 w-3 rounded-full bg-[#533afd]" />
              </div>
              <div className="rounded-full bg-white/10 px-3 py-0.5 text-[10px] font-medium uppercase tracking-[0.1px] text-white/70">
                Portfolio
              </div>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex justify-between text-[13px] font-light text-white/60 [font-feature-settings:'tnum']">
                <span>Property</span>
                <span>Value (ETB)</span>
                <span>ROI</span>
              </div>
              {[
                { name: "Bole Villa", value: "8,450,000", roi: "+12.4%" },
                { name: "Summit Condo", value: "3,220,000", roi: "+8.2%" },
                { name: "Megenagna Land", value: "2,100,000", roi: "+5.9%" },
              ].map((item) => (
                <div key={item.name} className="flex justify-between border-t border-white/5 pt-2 text-[13px] font-light text-white/80 [font-feature-settings:'tnum']">
                  <span>{item.name}</span>
                  <span>{item.value}</span>
                  <span className="text-[#b9b9f9]">{item.roi}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === NEW: Testimonial / trust band (canvas-soft) === */}
        <div className="rounded-xl bg-[#f6f9fc] p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-light tracking-[-0.64px] text-[#0d253d] md:text-4xl">
              Trusted by thousands of Ethiopians
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="text-center">
                <p className="text-4xl font-light tracking-[-0.96px] text-[#533afd] [font-feature-settings:'tnum']">1,200+</p>
                <p className="text-[13px] font-light text-[#64748d]">Properties sold</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-light tracking-[-0.96px] text-[#533afd] [font-feature-settings:'tnum']">98%</p>
                <p className="text-[13px] font-light text-[#64748d]">Happy clients</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-light tracking-[-0.96px] text-[#533afd] [font-feature-settings:'tnum']">12</p>
                <p className="text-[13px] font-light text-[#64748d]">Cities covered</p>
              </div>
            </div>
            <div className="mt-8 italic text-[15px] font-light text-[#273951] border-l-2 border-[#533afd] pl-4 text-left">
              “Ethio Property made finding our first home effortless. The dashboard gave us real‑time updates and the agent was incredibly responsive.”
              <div className="mt-2 text-[13px] font-normal text-[#64748d]">— Meron T., Addis Ababa</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}