import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Property } from "@/types/property.types";
import { Bed, Bath, Ruler, Trash2, Edit, MapPin } from "lucide-react";

const PropertyList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [properties, setProperties] = useState<Property[]>([]);
  const [error, setError] = useState<string | null>(null);
  const token = Cookies.get("accessToken");
  const navigate = useNavigate();

  // Redirect if not authenticated
  if (!token) {
    navigate("/login");
    return null;
  }

  const fetchProperties = () => {
    setLoading(true);
    axios
      .get<Property[]>(`${import.meta.env.VITE_BACKEND_URL}/api/users/properties`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProperties(response.data);
        setLoading(false);
      })
      .catch((err: any) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleUpdate = (property: Property) => {
    navigate("/profile/update_listing", { state: { property } });
  };

  const handleClick = (property: Property) => {
    navigate("/property_detail", { state: { property } });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this property?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/property/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      // Remove from local state instead of reload
      setProperties(properties.filter(p => p._id !== id));
    } catch (e: any) {
      console.error("Error deleting property:", e);
      alert("Failed to delete property. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="h-8 w-32 animate-pulse rounded bg-[#f6f9fc]" />
          <div className="h-10 w-32 animate-pulse rounded-full bg-[#f6f9fc]" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-[#e3e8ee] bg-white p-4 shadow-sm">
              <div className="h-48 w-full animate-pulse rounded-lg bg-[#f6f9fc]" />
              <div className="mt-4 space-y-2">
                <div className="h-5 w-3/4 animate-pulse rounded bg-[#f6f9fc]" />
                <div className="h-4 w-full animate-pulse rounded bg-[#f6f9fc]" />
                <div className="h-4 w-2/3 animate-pulse rounded bg-[#f6f9fc]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-[#ea2261]/30 bg-[#f6f9fc] p-8 text-center">
        <p className="text-[15px] font-light text-[#ea2261]">Failed to load properties: {error}</p>
        <button
          onClick={fetchProperties}
          className="mt-4 rounded-full bg-[#533afd] px-4 py-2 text-[16px] font-normal text-white hover:bg-[#4434d4]"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with create button */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-light tracking-[-0.64px] text-[#0d253d] md:text-4xl">
          My Properties
        </h1>
        <Link to="/profile/create_listing">
          <button className="rounded-full bg-[#533afd] px-4 py-2 text-[16px] font-normal text-white transition-all hover:bg-[#4434d4] focus:outline-none focus:ring-2 focus:ring-[#533afd] focus:ring-offset-2">
            + Create Listing
          </button>
        </Link>
      </div>

      {/* Properties grid */}
      {properties.length === 0 ? (
        <div className="rounded-xl border border-[#e3e8ee] bg-[#f6f9fc] p-12 text-center">
          <p className="text-[15px] font-light text-[#64748d]">
            You haven't listed any properties yet.
          </p>
          <Link to="/profile/create_listing">
            <button className="mt-4 rounded-full border border-[#533afd] bg-white px-4 py-2 text-[16px] font-normal text-[#533afd] transition-all hover:bg-[#f6f9fc]">
              Create your first listing
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <div
              key={property._id}
              className="group overflow-hidden rounded-xl border border-[#e3e8ee] bg-white shadow-[0_1px_3px_rgba(0,55,112,0.08)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,55,112,0.08),0_2px_6px_rgba(0,55,112,0.04)] hover:-translate-y-1"
            >
              {/* Clickable image */}
              <button onClick={() => handleClick(property)} className="w-full">
                <div className="relative aspect-video overflow-hidden bg-[#f6f9fc]">
                  <img
                    src={property.image?.[0] || "/placeholder.jpg"}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Price pill */}
                  <div className="absolute bottom-3 left-3 rounded-full border border-[#e3e8ee]/50 bg-white/90 px-3 py-1 backdrop-blur-sm">
                    <span className="text-sm font-light text-[#0d253d] [font-feature-settings:'tnum']">
                      {property.price.toLocaleString()} ETB
                      {property.type?.toLowerCase() !== "land" && <span className="text-xs">/mo</span>}
                    </span>
                  </div>
                </div>
              </button>

              {/* Content */}
              <div className="p-5">
                <button onClick={() => handleClick(property)} className="w-full text-left">
                  <h3 className="text-lg font-light tracking-[0] text-[#0d253d] line-clamp-1">
                    {property.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-1 text-[13px] font-light text-[#64748d]">
                    <MapPin className="h-3 w-3" />
                    <span className="line-clamp-1">{property.address}</span>
                  </div>
                </button>

                <p className="mt-2 line-clamp-2 text-[15px] font-light text-[#64748d]">
                  {property.description}
                </p>

                {/* Specs row */}
                <div className="mt-3 flex items-center justify-between border-t border-[#e3e8ee] pt-3 text-[13px] font-light text-[#64748d]">
                  <div className="flex items-center gap-1">
                    <Bed className="h-3.5 w-3.5" />
                    <span>{property.bedrooms || 0} beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-3.5 w-3.5" />
                    <span>{property.bathrooms || 0} baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Ruler className="h-3.5 w-3.5" />
                    <span>{property.areaSize || 0} m²</span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => handleUpdate(property)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#533afd] bg-white px-3 py-1.5 text-[14px] font-normal text-[#533afd] transition-all hover:bg-[#f6f9fc] focus:outline-none focus:ring-2 focus:ring-[#533afd] focus:ring-offset-1"
                  >
                    <Edit className="h-3.5 w-3.5" />
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(property._id)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#ea2261] bg-white px-3 py-1.5 text-[14px] font-normal text-[#ea2261] transition-all hover:bg-[#ea2261]/5 focus:outline-none focus:ring-2 focus:ring-[#ea2261] focus:ring-offset-1"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyList;