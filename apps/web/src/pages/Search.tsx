import { useState } from 'react';
import PropertySection from "@/components/property_listing/PropertySection";

export default function Search() {
  const [selectedTypes, setSelectedTypes] = useState<Record<string, boolean>>({
    Apartment: false,
    House: false,
    Land: false,
  });

  const [filteredTypes, setFilteredTypes] = useState<string[]>([]);

  const handleCheckboxChange = (type: string) => {
    setSelectedTypes({
      ...selectedTypes,
      [type]: !selectedTypes[type],
    });
  };

  const handleSubmit = () => {
    const types = Object.keys(selectedTypes).filter(type => selectedTypes[type]);
    setFilteredTypes(types);
  };

  const handleReset = () => {
    setSelectedTypes({
      Apartment: false,
      House: false,
      Land: false,
    });
    setFilteredTypes([]);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12 lg:py-16">
        {/* Page header */}
        <div className="mb-8 text-center md:mb-12">
          <h1 className="text-4xl font-light tracking-[-0.96px] text-[#0d253d] md:text-5xl lg:text-6xl">
            Find Your Property
          </h1>
          <p className="mt-3 text-[15px] font-light text-[#64748d] max-w-2xl mx-auto">
            Browse through our curated listings and find the perfect home, apartment, or land.
          </p>
        </div>

        {/* Filter panel - improved layout with card design */}
        <div className="mx-auto mb-12 max-w-3xl">
          <div className="rounded-xl border border-[#e3e8ee] bg-white p-6 shadow-[0_1px_3px_rgba(0,55,112,0.08)] md:p-8">
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                <label className="flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 transition-all duration-200 hover:bg-[#f6f9fc] text-[15px] font-light text-[#0d253d]">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-[#a8c3de] text-[#533afd] focus:ring-1 focus:ring-[#533afd] focus:ring-offset-0"
                    checked={selectedTypes.Apartment}
                    onChange={() => handleCheckboxChange('Apartment')}
                  />
                  <span>Apartment</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 transition-all duration-200 hover:bg-[#f6f9fc] text-[15px] font-light text-[#0d253d]">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-[#a8c3de] text-[#533afd] focus:ring-1 focus:ring-[#533afd] focus:ring-offset-0"
                    checked={selectedTypes.House}
                    onChange={() => handleCheckboxChange('House')}
                  />
                  <span>House</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 transition-all duration-200 hover:bg-[#f6f9fc] text-[15px] font-light text-[#0d253d]">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-[#a8c3de] text-[#533afd] focus:ring-1 focus:ring-[#533afd] focus:ring-offset-0"
                    checked={selectedTypes.Land}
                    onChange={() => handleCheckboxChange('Land')}
                  />
                  <span>Land</span>
                </label>
              </div>

              <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
                <button
                  onClick={handleSubmit}
                  className="rounded-full bg-[#533afd] px-6 py-2 text-[16px] font-normal text-white transition-all duration-200 hover:bg-[#4434d4] focus:outline-none focus:ring-2 focus:ring-[#533afd] focus:ring-offset-2"
                >
                  Apply Filter
                </button>
                <button
                  onClick={handleReset}
                  className="rounded-full border border-[#533afd] bg-white px-6 py-2 text-[16px] font-normal text-[#533afd] transition-all duration-200 hover:bg-[#f6f9fc] focus:outline-none focus:ring-2 focus:ring-[#533afd] focus:ring-offset-2"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Active filters display */}
            {filteredTypes.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 border-t border-[#e3e8ee] pt-5">
                <span className="text-[13px] font-light text-[#64748d]">Active filters:</span>
                {filteredTypes.map((type) => (
                  <span
                    key={type}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#b9b9f9] px-3 py-1 text-[12px] font-normal text-[#4434d4]"
                  >
                    {type}
                    <button
                      onClick={() => {
                        const newSelected = { ...selectedTypes, [type]: false };
                        setSelectedTypes(newSelected);
                        const types = Object.keys(newSelected).filter(t => newSelected[t]);
                        setFilteredTypes(types);
                      }}
                      className="ml-1 text-[#4434d4] hover:text-[#2e2b8c]"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Results section */}
        <div className="space-y-16 md:space-y-24">
          {filteredTypes.length > 0 ? (
            filteredTypes.map((type) => (
              <PropertySection key={type} title={type} type={type} />
            ))
          ) : (
            <div className="rounded-xl border border-[#e3e8ee] bg-[#f6f9fc] p-12 text-center">
              <div className="mx-auto max-w-md">
                <h3 className="text-xl font-light tracking-[-0.26px] text-[#0d253d]">
                  No filters selected
                </h3>
                <p className="mt-2 text-[15px] font-light text-[#64748d]">
                  Choose one or more property types above and click "Apply Filter" to see matching properties.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}