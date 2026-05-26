import { MdLocationOn } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { BiArea } from "react-icons/bi";
import { Property } from "@/types/property.types";

interface CardProps {
  property: Property;
}

export default function Card({
  property: { title, address, description, price, bedrooms, areaSize, image },
}: CardProps) {
  return (
    <div className="group w-full overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 sm:w-[330px]">
      <div className="relative h-72 overflow-hidden">
        <img
          src={image[0]}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 backdrop-blur-sm">
          <span className="text-sm font-bold text-gray-900">
            {price.toLocaleString()} Birr
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-5 text-left">
        <h3 className="truncate text-base font-bold text-gray-900 leading-snug">
          {title}
        </h3>

        <div className="flex items-center gap-1.5 text-gray-500">
          <MdLocationOn className="h-4 w-4 shrink-0 text-green-600" />
          <p className="truncate text-sm">{address}</p>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-gray-500">
          {description}
        </p>

        <hr className="border-gray-100" />

        <div className="flex items-center justify-between text-gray-700">
          <div className="flex items-center gap-1.5">
            <IoBedOutline className="h-4 w-4 text-gray-400" />
            <span className="text-sm font-medium">
              {bedrooms ?? "—"}{" "}
              <span className="font-normal text-gray-400">bed</span>
            </span>
          </div>
          <div className="h-3 w-px bg-gray-200" />
          <div className="flex items-center gap-1.5">
            <BiArea className="h-4 w-4 text-gray-400" />
            <span className="text-sm font-medium">
              {areaSize}{" "}
              <span className="font-normal text-gray-400">m²</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}