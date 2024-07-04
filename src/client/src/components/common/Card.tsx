import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { Property } from "@/types/property.types";

interface CardProps {
  property: Property;
}

export default function Card({
  property: { title, address, description, price, bedrooms, areaSize },
}: CardProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg sm:w-[330px]">
      {/* <Link to={`/listing/${listing._id}`}> */}
      <Link to="/property_detail">
        <img
          src={
            "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg"
          }
          alt="listing cover"
          className="transition-scale h-[320px] w-full object-cover duration-300 hover:scale-105 sm:h-[220px]"
        />
        <div className="flex w-full flex-col gap-2 p-3">
          <p className="truncate text-lg font-semibold text-slate-700">
            {title}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-700" />
            <p className="w-full truncate text-sm text-gray-600">{address}</p>
          </div>
          <p className="line-clamp-2 text-sm text-gray-600">{description}</p>
          <div className="mt-4 flex justify-between">
            <div className="text-gray-900">
              <span className="block text-sm font-semibold">Price</span>
              <span className="text-md">{price} Birr</span>
            </div>
            <div className="text-gray-900">
              <span className="block text-sm font-semibold">Rooms</span>
              <span className="text-md">{bedrooms}</span>
            </div>
            <div className="text-gray-900">
              <span className="block text-sm font-semibold">Area</span>
              <span className="text-md">{areaSize} m²</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
