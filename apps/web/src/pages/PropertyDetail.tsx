import ContactUsForm from "@/components/common/ContactUsForm";
import { useLocation } from "react-router";
import { MapPin, Bed, Bath, Ruler, Car, Calendar, Building, Home, Check } from "lucide-react";
import { useState } from "react";

function PropertyDetail() {
  const location = useLocation();
  const property = location.state?.property;

  const [selectedImage, setSelectedImage] = useState<string>(property?.image?.[0] || "");

  if (!property) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-light text-[#0d253d]">Property not found</h1>
          <p className="mt-2 text-[15px] font-light text-[#64748d]">Please go back and try again.</p>
        </div>
      </div>
    );
  }

  // Ensure we have an array of images
  const images = Array.isArray(property.image) && property.image.length > 0
    ? property.image
    : [property.image].filter(Boolean);

  // Main image and thumbnails
  const mainImage = selectedImage || images[0] || "";
  const thumbnails = images.slice(0, 4); // Show up to 4 thumbnails

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12 lg:py-16">
        {/* Header with title and price */}
        <div className="mb-8 flex flex-col justify-between gap-4 rounded-xl border border-[#e3e8ee] bg-white p-6 shadow-[0_1px_3px_rgba(0,55,112,0.08)] md:flex-row md:items-center md:p-8">
          <h1 className="text-2xl font-light tracking-[-0.26px] text-[#0d253d] md:text-3xl lg:text-4xl">
            {property.title}
          </h1>
          <div className="text-2xl font-light tracking-[-0.26px] text-[#533afd] [font-feature-settings:'tnum'] md:text-3xl">
            {property.price.toLocaleString()} ETB
            {property.type?.toLowerCase() !== "land" && <span className="text-base text-[#64748d]"> /mo</span>}
          </div>
        </div>

        {/* Main content area: image gallery + details | contact form */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left column: gallery, description, specs, address */}
          <div className="flex-1 space-y-8">
            {/* Image gallery */}
            <div className="rounded-xl border border-[#e3e8ee] bg-white p-4 shadow-[0_1px_3px_rgba(0,55,112,0.08)] md:p-6">
              {/* Main image */}
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-[#f6f9fc]">
                {mainImage ? (
                  <img
                    src={mainImage}
                    alt={property.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-[#64748d]">No image</div>
                )}
              </div>

              {/* Thumbnail strip */}
              {thumbnails.length > 1 && (
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                  {thumbnails.map((img: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`overflow-hidden rounded-md border-2 transition-all ${
                        selectedImage === img ? "border-[#533afd]" : "border-transparent"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="aspect-square w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Description */}
            <div className="rounded-xl border border-[#e3e8ee] bg-white p-6 shadow-[0_1px_3px_rgba(0,55,112,0.08)] md:p-8">
              <h2 className="text-2xl font-light tracking-[-0.26px] text-[#0d253d]">Description</h2>
              <hr className="my-4 border-[#e3e8ee]" />
              <p className="text-[15px] font-light leading-relaxed text-[#64748d]">
                {property.description || "No description provided."}
              </p>
            </div>

            {/* Property Details */}
            <div className="rounded-xl border border-[#e3e8ee] bg-white p-6 shadow-[0_1px_3px_rgba(0,55,112,0.08)] md:p-8">
              <h2 className="text-2xl font-light tracking-[-0.26px] text-[#0d253d]">Property Details</h2>
              <hr className="my-4 border-[#e3e8ee]" />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Left column */}
                <div className="space-y-3">
                  <DetailItem icon={Ruler} label="Property Size" value={`${property.areaSize || 0} m²`} />
                  <DetailItem icon={Bed} label="Bedrooms" value={property.bedrooms || "—"} />
                  <DetailItem icon={Bath} label="Bathrooms" value={property.bathrooms || "—"} />
                  <DetailItem icon={Car} label="Garage" value={property.garages || "—"} />
                </div>
                {/* Right column */}
                <div className="space-y-3">
                  <DetailItem icon={Calendar} label="Year Built" value={property.yearBuild || "—"} />
                  <DetailItem icon={Building} label="Property Type" value={property.type || "—"} />
                  <DetailItem icon={Home} label="Property Status" value={property.status || "—"} />
                  <DetailItem
                    icon={Check}
                    label="Furnished"
                    value={property.furnished ? <span className="flex items-center gap-1 text-[#0d253d]"><Check className="h-3.5 w-3.5 text-[#533afd]" /> Yes</span> : "No"}
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="rounded-xl border border-[#e3e8ee] bg-white p-6 shadow-[0_1px_3px_rgba(0,55,112,0.08)] md:p-8">
              <h2 className="text-2xl font-light tracking-[-0.26px] text-[#0d253d]">Address</h2>
              <hr className="my-4 border-[#e3e8ee]" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <AddressItem label="Address" value={property.address} />
                  <AddressItem label="City" value={property.city} />
                </div>
                <div className="space-y-2">
                  <AddressItem label="Sub City" value={property.subCity} />
                  <AddressItem label="Country" value={property.country || "Ethiopia"} />
                </div>
              </div>
            </div>
          </div>

          {/* Right column: contact form (sticky) */}
          <div className="lg:w-96 lg:flex-shrink-0">
            <div className="sticky top-24 rounded-xl border border-[#e3e8ee] bg-[#f6f9fc] p-6 shadow-[0_1px_3px_rgba(0,55,112,0.08)] md:p-8">
              <h3 className="text-xl font-light tracking-[-0.26px] text-[#0d253d]">Interested?</h3>
              <p className="mt-1 text-[13px] font-light text-[#64748d]">
                Fill out the form and our agent will contact you.
              </p>
              <div className="mt-6">
                <ContactUsForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for detail items
const DetailItem = ({ icon: Icon, label, value }: { icon: any; label: string; value: React.ReactNode }) => (
  <div className="flex items-center gap-3 text-[15px] font-light">
    <Icon className="h-4 w-4 text-[#533afd]/70" />
    <span className="w-28 text-[#64748d]">{label}:</span>
    <span className="text-[#0d253d] [font-feature-settings:'tnum']">{value}</span>
  </div>
);

// Helper component for address items
const AddressItem = ({ label, value }: { label: string; value?: string }) => (
  <div className="flex items-start gap-3 text-[15px] font-light">
    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#533afd]/70" />
    <span className="w-20 text-[#64748d]">{label}:</span>
    <span className="text-[#0d253d]">{value || "—"}</span>
  </div>
);

export default PropertyDetail;