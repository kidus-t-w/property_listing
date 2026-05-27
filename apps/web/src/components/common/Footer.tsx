import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white px-6 py-16 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-3">
            <h2 className="text-xl font-light tracking-[-0.26px] text-[#0d253d]">
              Ethio Property
            </h2>
            <p className="text-[13px] font-light text-[#64748d] leading-relaxed">
              Ethiopia&apos;s premier real estate marketplace — connecting people with
              property since 2020.
            </p>
          </div>

          {/* Address column */}
          <div className="space-y-3">
            <h3 className="text-[13px] font-normal uppercase tracking-[0.1px] text-[#0d253d]">
              Visit Us
            </h3>
            <address className="not-italic space-y-2">
              <div className="flex gap-2 text-[13px] font-light text-[#64748d]">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#533afd]/70" />
                <span>
                  Bole, Namibia Street, Sheger building,<br />
                  Office 701, Addis Ababa, Ethiopia
                </span>
              </div>
              <div className="flex gap-2 text-[13px] font-light text-[#64748d]">
                <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#533afd]/70" />
                <span>+251 915579335</span>
              </div>
              <div className="flex gap-2 text-[13px] font-light text-[#64748d]">
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#533afd]/70" />
                <span>info@realethio.com</span>
              </div>
            </address>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h3 className="text-[13px] font-normal uppercase tracking-[0.1px] text-[#0d253d]">
              Explore
            </h3>
            <ul className="space-y-2">
              {["Home", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="text-[13px] font-light text-[#64748d] transition-colors hover:text-[#533afd]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & legal */}
          <div className="space-y-3">
            <h3 className="text-[13px] font-normal uppercase tracking-[0.1px] text-[#0d253d]">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64748d] transition-colors hover:text-[#533afd]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64748d] transition-colors hover:text-[#533afd]"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64748d] transition-colors hover:text-[#533afd]"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <div className="pt-4">
              <p className="text-[11px] font-light text-[#64748d]">
                &copy; {new Date().getFullYear()} Ethio Property. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </footer>
  );
}