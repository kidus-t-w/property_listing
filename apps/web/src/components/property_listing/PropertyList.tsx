import React, { useEffect, useState } from "react";
import PlaceHolder from "@/assets/img/propertyImage.jpeg";
import { Link } from "react-router-dom";
import axios from "axios";
import { Skeleton } from "../ui/skeleton";
import PropertySkeleton from "./SkeletonCard";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
interface Property {
  id: number;
  title: string;
  description: string;
  image: string;
}

const PropertyList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [properties, setProperties] = useState<Property[]>([]);
  const [error, setError] = useState<string | null>(null);
  const token = Cookies.get("accessToken");
  const navigate = useNavigate();

  if (!token) {
    console.error("Token not found in cookies");
    return null;
  }

  useEffect(() => {
    setLoading(true);

    axios
      .get<Property[]>(`http://localhost:1337/api/users/properties`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
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

  const handleUpdate = (property: Property) => {
    navigate("/profile/update_listing", { state: { property } });
  };
  const handleClick = (property: Property) => {
    navigate("/property_detail", { state: { property } });
  };

  const handleDelete = (id: number) => {
    console.log("Deleting property with id:", id); // For debugging

    axios
      .delete(`http://localhost:1337/api/property/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        window.location.reload();
        console.log("Deleted successfully");
      })
      .catch((e: any) => {
        console.error("Error deleting property:", e);
        alert("Failed to delete property");
      });
  };

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
    <div className="flex-grow bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Properties</h1>
        <Link to="/profile/create_listing">
          <button className="rounded-md bg-blue-700 px-4 py-2 text-white hover:bg-blue-200">
            Create Listing
          </button>
        </Link>
      </div>

      {/* <div className="mb-6">
        <input
          type="text"
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:outline-none"
          placeholder="Search"
        />
      </div> */}

      {properties.map((property) => (
        <div
          key={property._id}
          className="mb-6 flex flex-col items-center rounded-md bg-white p-4 shadow-md md:flex-row"
        >
          <button onClick={() => handleClick(property)}>
          <img
            src={PlaceHolder}
            alt={property.title}
            className="mb-4 h-40 w-full rounded-lg object-cover md:mb-0 md:mr-4 md:w-40 transition-scale duration-300 hover:scale-105"
          />
          </button>
          <div className="mb-4 flex-grow pl-6 md:mb-0">
            <h2 className="mb-2 text-xl font-semibold">{property.title}</h2>
            <p className="text-gray-700">{property.description}</p>
          </div>
          <div className="flex md:flex-col space-y-2 ">
              <button
                onClick={() => handleUpdate(property)}
                className="rounded-md bg-blue-700 px-4 py-2 text-white hover:bg-blue-600"
              >
                Update
              </button>
            <button
              onClick={() => handleDelete(property._id)}
              className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
