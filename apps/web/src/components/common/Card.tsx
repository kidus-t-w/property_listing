import { MdLocationOn } from "react-icons/md";
import { Property } from "@/types/property.types";

interface CardProps {
  property: Property;
}

export default function Card({
  property: { title, address, description, price, bedrooms, areaSize, image },
}: CardProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg sm:w-[330px] ">
      {/* <Link to={`/listing/${listing._id}`}> */}
      <img
        src={image[1]}
        alt="listing cover"
        className="transition-scale h-[320px] w-full object-cover duration-300 hover:scale-105 sm:h-[220px]"
      />
      <div className="flex w-full flex-col items-start gap-2 p-5">
        <p className="truncate text-lg font-semibold text-slate-700">{title}</p>
        <div className="flex items-center gap-1">
          <MdLocationOn className="h-4 w-4 text-green-700" />
          <p className="w-full truncate text-sm text-gray-600">{address}</p>
        </div>
        <p className="line-clamp-2 text-sm text-gray-600">{description}</p>
        <div className="mt-4 flex w-full justify-between">
          <div className="text-gray-900">
            <span className="block text-sm font-semibold">Price</span>
            <span className="text-md">{price} Birr</span>
          </div>
          <div className="text-gray-900">
            <span className="block text-sm font-semibold">Bed Rooms</span>
            <span className="text-md">{bedrooms}</span>
          </div>
          <div className="text-gray-900">
            <span className="block text-sm font-semibold">Area</span>
            <span className="text-md">{areaSize} m²</span>
          </div>
        </div>
      </div>
    </div>
  );
}
