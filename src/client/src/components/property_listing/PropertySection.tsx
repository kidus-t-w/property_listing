import * as React from "react";
import { cn } from "@/lib/utils";

// components
import { Link } from "react-router-dom";
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

    searchParams.append("limit", "4");

    axios
      .get<Property[]>(
        `http://localhost:1337/api/property?${searchParams.toString()}`,
      )
      .then((data) => {
        const properties = data.data;
        setProperties(properties);
        setLoading(false)
      })
      .catch((e: any) => {
        setError(e.message);
        setLoading(false)
      });

  }, [setLoading]);

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-10 w-28" />
        </div>

        <div className="grid grid-cols-1 place-items-center gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 4 }, (_, i) => (
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
        <Link to={"/"}>
          <Button variant={"outline"} className="border-gray-500 shadow-md">
            See more
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 place-items-center gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {properties.map((property) => (
          <Card property={property} />
        ))}
      </div>
    </div>
  );
}
