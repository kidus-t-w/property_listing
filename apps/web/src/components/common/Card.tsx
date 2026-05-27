import { MdLocationOn } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { BiArea } from "react-icons/bi";
import { Property } from "@/types/property.types";

interface CardProps {
  property: Property;
}

export default function Card({ property }: CardProps) {
  // Safeguard: if property is undefined or missing, show placeholder
  if (!property) {
    return (
      <div className="w-full rounded-lg border border-[#e3e8ee] bg-white p-6 text-center text-[#64748d]">
        Property data unavailable
      </div>
    );
  }

  const {
    title = "Untitled",
    address = "Address not specified",
    description = "No description available",
    price = 0,
    bedrooms,
    areaSize = 0,
    image = [],
  } = property;

  const imageUrl = Array.isArray(image) && image.length > 0 ? image[0] : "";

  return (
    <div className="group w-full overflow-hidden rounded-lg border border-[#e3e8ee] bg-white shadow-[0_1px_3px_rgba(0,55,112,0.08)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,55,112,0.08),0_2px_6px_rgba(0,55,112,0.04)] hover:-translate-y-1">
      <div className="relative h-72 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#f6f9fc] text-[#64748d]">
            No image
          </div>
        )}
        <div className="absolute bottom-3 left-3 rounded-full border border-[#e3e8ee]/50 bg-white/90 px-3 py-1 backdrop-blur-sm">
          <span className="text-sm font-light text-[#0d253d] [font-feature-settings:'tnum']">
            {price.toLocaleString()} Birr
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-6 text-left">
        <h3 className="truncate text-lg font-light tracking-[0] text-[#0d253d] leading-snug">
          {title}
        </h3>
        <div className="flex items-center gap-1.5 text-[#64748d]">
          <MdLocationOn className="h-4 w-4 shrink-0 text-[#533afd]/70" />
          <p className="truncate text-sm font-light">{address}</p>
        </div>
        <p className="line-clamp-2 text-[15px] font-light leading-relaxed text-[#64748d]">
          {description}
        </p>
        <hr className="border-[#e3e8ee]" />
        <div className="flex items-center justify-between text-[#273951]">
          <div className="flex items-center gap-1.5">
            <IoBedOutline className="h-4 w-4 text-[#64748d]" />
            <span className="text-sm font-light [font-feature-settings:'tnum']">
              {bedrooms ?? "—"}{" "}
              <span className="font-light text-[#64748d]">bed</span>
            </span>
          </div>
          <div className="h-3 w-px bg-[#e3e8ee]" />
          <div className="flex items-center gap-1.5">
            <BiArea className="h-4 w-4 text-[#64748d]" />
            <span className="text-sm font-light [font-feature-settings:'tnum']">
              {areaSize}{" "}
              <span className="font-light text-[#64748d]">m²</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}