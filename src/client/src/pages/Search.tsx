import { useState } from 'react';
import PropertySection from "@/components/property_listing/SearchSection";

export default function Search() {
  const [selectedTypes, setSelectedTypes] = useState({
    Apartment: false,
    House: false,
    Land: false,
  });
  const [filteredTypes, setFilteredTypes] = useState([]);

  const handleCheckboxChange = (type: any) => {
    setSelectedTypes({
      ...selectedTypes,
      [type]: !selectedTypes[type],
    });
  };

  const handleSubmit = () => {
    const types = Object.keys(selectedTypes).filter(type => selectedTypes[type]);
    setFilteredTypes(types);
  };

  return (
    <div>
      <div className=''>
        <div className="mx-auto mb-4 w-[50%] bg-gray-100 p-4 rounded-2xl ">
          <h3 className="mb-2 font-semibold flex justify-center text-xl">Filter Properties</h3>
          <div className="flex items-center justify-between space-y-2">
            <div className="flex flex-col">
              <label>
                <input
                  type="checkbox"
                  className="form-checkbox mr-2"
                  checked={selectedTypes.Apartment}
                  onChange={() => handleCheckboxChange('Apartment')}
                />
                <span>Apartment</span>
              </label>
            </div>
            <div className="flex flex-col">
              <label>
                <input
                  type="checkbox"
                  className="form-checkbox mr-2"
                  checked={selectedTypes.House}
                  onChange={() => handleCheckboxChange('House')}
                />
                <span>House</span>
              </label>
            </div>
            <div className="flex flex-col">
              <label>
                <input
                  type="checkbox"
                  className="form-checkbox mr-2"
                  checked={selectedTypes.Land}
                  onChange={() => handleCheckboxChange('Land')}
                />
                <span>Land</span>
              </label>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="mt-4 w-full rounded-lg bg-blue-500 py-2 text-white hover:bg-blue-600"
          >
            Filter
          </button>
        </div>
      </div>
      <div className="space-y-12">
        {filteredTypes.map((type) => (
          <PropertySection key={type} title={type} type={type} />
        ))}
      </div>
    </div>
  );
}
