import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Property } from "@/types/property.types";
import Card from "../common/Card";
import PropertySkeleton from "./SkeletonCard";
import { Skeleton } from "../ui/skeleton";
import axios from "axios";

interface PropertySectionProps {
  title: string;
  type?: string;
  recent?: boolean;
}

export default function PropertySection({
  title,
  type,
  recent,
}: PropertySectionProps) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [properties, setProperties] = React.useState<Property[]>([]);
  const [error, setError] = React.useState<string | null>(null);
  const navigate = useNavigate();

  const handleClick = (property: Property) => {
    navigate("/property_detail", { state: { property } });
  };

  React.useEffect(() => {
    setLoading(true);
    setError(null);
    const searchParams = new URLSearchParams();

    if (type) {
      searchParams.append("type", type);
    }

    if (recent) {
      searchParams.append("recent", "true");
    }

    searchParams.append("limit", "4");

    axios
      .get<Property[]>(
        `${import.meta.env.VITE_BACKEND_URL}/api/property?${searchParams.toString()}`
      )
      .then((data) => {
        // Ensure data is an array and filter out any invalid entries
        const validProperties = Array.isArray(data.data)
          ? data.data.filter((p) => p && typeof p === "object")
          : [];
        setProperties(validProperties);
        setLoading(false);
      })
      .catch((e: any) => {
        setError(e.message);
        setLoading(false);
      });
  }, [type, recent]);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-10 w-28 rounded-full" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 4 }, (_, i) => (
            <PropertySkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-light tracking-[-0.64px] text-[#0d253d] md:text-5xl lg:text-6xl">
            {title}
          </h2>
        </div>
        <div className="rounded-lg border border-[#e3e8ee] bg-[#f6f9fc] p-8 text-center text-[#64748d]">
          Failed to load properties. Please try again later.
        </div>
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-light tracking-[-0.64px] text-[#0d253d] md:text-5xl lg:text-6xl">
            {title}
          </h2>
        </div>
        <div className="rounded-lg border border-[#e3e8ee] bg-[#f6f9fc] p-8 text-center text-[#64748d]">
          No properties found in this category.
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-light tracking-[-0.64px] text-[#0d253d] md:text-5xl lg:text-6xl">
          {title}
        </h2>
        <Link to="/search">
          <Button
            variant="outline"
            className="h-auto rounded-full border-[#533afd] px-4 py-2 text-[16px] font-normal text-[#533afd] transition-all hover:bg-[#f6f9fc] hover:text-[#4434d4]"
          >
            See more
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {properties.map((property) => (
          <button
            key={property._id}
            onClick={() => handleClick(property)}
            className="w-full rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-[#533afd] focus:ring-offset-2"
          >
            <Card property={property} />
          </button>
        ))}
      </div>
    </div>
  );
}