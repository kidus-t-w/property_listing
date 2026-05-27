import ContactUsForm from "@/components/common/ContactUsForm";
import { Link } from "react-router-dom";

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 lg:py-32">
        {/* Hero header */}
        <div className="mb-12 text-center md:mb-16">
          <h1 className="text-5xl font-light tracking-[-1.4px] text-[#0d253d] md:text-7xl lg:text-8xl">
            Our Services
          </h1>
          <p className="mt-4 text-xl font-light tracking-[-0.2px] text-[#273951] max-w-3xl mx-auto">
            Real estate agent and property management services in Addis Ababa and all around Ethiopia
          </p>
        </div>

        {/* Two-column layout with card styling */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Left: service descriptions */}
          <div className="flex-1 space-y-6 rounded-xl border border-[#e3e8ee] bg-white p-6 shadow-[0_1px_3px_rgba(0,55,112,0.08)] md:p-8">
            {/* For Sellers or Landlords */}
            <div>
              <h2 className="text-3xl font-light tracking-[-0.64px] text-[#0d253d] md:text-4xl">
                For Sellers or Landlords
              </h2>
              <p className="mt-3 text-[15px] font-light leading-relaxed text-[#64748d]">
                Our company is dedicated to helping landlords and property developers sell out their properties. If you want to save time and money, while expanding, you might want to be interested in our professional services.
              </p>
              <p className="mt-3 text-[15px] font-light leading-relaxed text-[#64748d]">
                Our company could be your ideal partner for renting or selling your property. We are committed to our customers and promoters and our main objective is to be transparent while achieving results.
              </p>
            </div>

            <hr className="border-[#e3e8ee]" />

            {/* For Tenants or Buyers */}
            <div>
              <h2 className="text-3xl font-light tracking-[-0.64px] text-[#0d253d] md:text-4xl">
                For Tenants or Buyers
              </h2>
              <p className="mt-3 text-[15px] font-light leading-relaxed text-[#64748d]">
                Whether you are looking for houses, flats, offices or buildings for sale or for rent, we offer you free‑of‑charge accompanied viewing of properties you choose through our state‑of‑the‑art website. With our team of experienced and dedicated real estate agents, we at Ethio Property offer highly professional and personalized assistance in finding you the right home in Ethiopia.
              </p>
            </div>

            {/* Agent services list */}
            <div>
              <h3 className="text-xl font-light tracking-[-0.26px] text-[#0d253d]">
                Our agent services include:
              </h3>
              <ul className="mt-3 space-y-2">
                {[
                  "Preparing recommendations based on the clients’ desired specifications and budget, and sharing photos and details of the properties through the Ethio Property website.",
                  "Getting in touch with property owners to set up viewing times.",
                  "Accompanying the client to view the selected potential houses/flats, including picking up and dropping off the client in our agency cars, completely free‑of‑charge.",
                  "Negotiating the sale price or rent, on behalf of the client.",
                  "Supporting with the preparation of the sales contract or lease agreement.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[15px] font-light leading-relaxed text-[#64748d]">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#533afd] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[13px] font-light text-[#64748d] italic">
              * We only charge our clients once the sales contract or lease agreement has been signed.
            </p>
            <p className="text-[13px] font-light text-[#64748d]">
              Contact us for service charge policy and procedures.
            </p>
          </div>

          {/* Right: contact form card */}
          <div className="lg:w-96 flex-shrink-0">
            <div className="sticky top-24 rounded-xl border border-[#e3e8ee] bg-[#f6f9fc] p-6 shadow-[0_1px_3px_rgba(0,55,112,0.08)] md:p-8">
              <h3 className="text-2xl font-light tracking-[-0.26px] text-[#0d253d]">
                Get in touch
              </h3>
              <p className="mt-1 text-[13px] font-light text-[#64748d]">
                Fill out the form and we’ll reply within 24 hours.
              </p>
              <div className="mt-6">
                <ContactUsForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;