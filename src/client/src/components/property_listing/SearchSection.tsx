import * as React from "react";
import { cn } from "@/lib/utils";
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
    // make the api call
    const searchParams = new URLSearchParams();

    if (type) {
      searchParams.append("type", type);
    }

    if (recent) {
      searchParams.append("recent", "true");
    }

    searchParams.append("limit", "20");

    axios
      .get<Property[]>(
        `http://localhost:1337/api/property?${searchParams.toString()}`
      )
      .then((data) => {
        const properties = data.data;
        setProperties(properties);
        setLoading(false);
      })
      .catch((e: any) => {
        setError(e.message);
        setLoading(false);
      });
  }, [setLoading]);

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-10 w-28" />
        </div>

        <div className="grid grid-cols-1 place-items-center gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 20 }, (_, i) => (
            <PropertySkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className={cn("text-2xl font-semibold")}>{title}</h2>
        
      </div>

      <div className="grid grid-cols-1 place-items-center gap-y-8 gap-x-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {properties.map((property) => (
          <button onClick={() => handleClick(property)} >
            <Card property={property} />
          </button>
        ))}
      </div>
    </div>
  );
}
