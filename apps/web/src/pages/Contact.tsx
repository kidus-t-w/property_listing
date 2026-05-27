import ContactUsForm from '@/components/common/ContactUsForm';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactUs: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 lg:py-32">
        {/* Page header */}
        <div className="mb-12 text-center md:mb-16">
          <h1 className="text-5xl font-light tracking-[-1.4px] text-[#0d253d] md:text-7xl lg:text-8xl">
            Contact Us
          </h1>
          <p className="mt-4 text-xl font-light tracking-[-0.2px] text-[#273951] max-w-3xl mx-auto">
            Have a question, suggestion, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Left: contact info card */}
          <div className="flex-1 rounded-xl border border-[#e3e8ee] bg-white p-6 shadow-[0_1px_3px_rgba(0,55,112,0.08)] md:p-8">
            <h2 className="text-3xl font-light tracking-[-0.64px] text-[#0d253d] md:text-4xl">
              Find Your Dream Home: Explore, Compare, and Secure Properties with Ease!
            </h2>
            <p className="mt-4 text-[15px] font-light leading-relaxed text-[#64748d]">
              Have a question, suggestion, or just want to say hello? We'd love to hear from you. Feel free to reach out to us!
            </p>

            <div className="mt-8 space-y-6">
              {/* Reception Contact */}
              <div>
                <h3 className="text-xl font-light tracking-[-0.26px] text-[#0d253d]">
                  Reception Contact
                </h3>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-3 text-[15px] font-light text-[#64748d]">
                    <Phone className="h-4 w-4 text-[#533afd]/70" />
                    <span>+251 915 579 335</span>
                  </div>
                  <div className="flex items-center gap-3 text-[15px] font-light text-[#64748d]">
                    <Mail className="h-4 w-4 text-[#533afd]/70" />
                    <span>kidustilahunet@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* HR Contact */}
              <div>
                <h3 className="text-xl font-light tracking-[-0.26px] text-[#0d253d]">
                  HR Contact
                </h3>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-3 text-[15px] font-light text-[#64748d]">
                    <Phone className="h-4 w-4 text-[#533afd]/70" />
                    <span>+251 915 579 335</span>
                  </div>
                  <div className="flex items-center gap-3 text-[15px] font-light text-[#64748d]">
                    <Mail className="h-4 w-4 text-[#533afd]/70" />
                    <span>kidustilahunet@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-xl font-light tracking-[-0.26px] text-[#0d253d]">
                  Address
                </h3>
                <div className="mt-3 flex items-start gap-3 text-[15px] font-light text-[#64748d]">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#533afd]/70" />
                  <span>
                    Bole, Namibia Street, Sheger building, Office 701, Addis Ababa, Ethiopia
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: contact form card */}
          <div className="lg:w-[480px] flex-shrink-0">
            <div className="rounded-xl border border-[#e3e8ee] bg-[#f6f9fc] p-6 shadow-[0_1px_3px_rgba(0,55,112,0.08)] md:p-8">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;