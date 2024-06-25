const PropertyCard: React.FC = () => {
  return (
    <div className="mx-auto p-4 bg-white shadow-md rounded-md flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          Summit CMC, 48 Bed Room Ground Plus Five Furnished Apartment Building For Rent, Addis Ababa
        </h2>
        <div className="flex space-x-2 mt-2">
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">FEATURED</span>
          <span className="bg-gray-700 text-white text-xs font-bold px-2 py-1 rounded">FOR RENT</span>
        </div>
        <div className="text-gray-500 text-sm mt-2">
          <span>📍 Goro, Summit - Goro road, Yeka Bole Bota, Addis Ababa, 14920, Ethiopia</span>
        </div>
      </div>
      <div className="text-red-500 text-xl font-semibold">
        1,600,000 ETB /mo
      </div>
    </div>
  );
};

export default PropertyCard;
