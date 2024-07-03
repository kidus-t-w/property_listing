import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

export default function ListingItem({ listing }) {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg sm:w-[330px]">
      {/* <Link to={`/listing/${listing._id}`}> */}
      <Link to="/property_detail">
        <img
          src={
            listing.imageUrls[0] ||
            "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg"
          }
          alt="listing cover"
          className="transition-scale h-[320px] w-full object-cover duration-300 hover:scale-105 sm:h-[220px]"
        />
        <div className="flex w-full flex-col gap-2 p-3">
          <p className="truncate text-lg font-semibold text-slate-700">
            {listing.name}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-700" />
            <p className="w-full truncate text-sm text-gray-600">
              {listing.address}
            </p>
          </div>
          <p className="line-clamp-2 text-sm text-gray-600">
            {listing.description}
          </p>
          <div className="flex justify-between mt-4">
          <div className="text-gray-900">
            <span className="font-semibold block text-sm">Price</span>
            <span className="text-md">{listing.price} €</span>
          </div>
          <div className="text-gray-900">
            <span className="font-semibold block text-sm">Rooms</span>
            <span className="text-md">{listing.bedrooms}</span>
          </div>
          <div className="text-gray-900">
            <span className="font-semibold block text-sm">Area</span>
            <span className="text-md">{listing.area} m²</span>
          </div>
        </div>
        </div>
      </Link>
    </div>
  );
}
