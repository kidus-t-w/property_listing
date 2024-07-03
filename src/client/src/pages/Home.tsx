import { useEffect, useState } from "react";

// Componets
import Card from "@/components/common/Card";
import HeroSection from "@/components/common/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  const { offerListing, setOfferListings } = useState([]);
  const { houseListing, setHouseListing } = useState([]);
  const { apartmentListing, setApartmentListing } = useState([]);
  const { landListing, setLandListing } = useState([]);

  useEffect(() => {
    const fetchOfferListing = async () => {
      try {
        const res = await fetch("/api/property/get?offer=true&limit=4");
        const data = await res.json;
        setOfferListings(data);
        fetchHouseListing();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchHouseListing = async () => {
      try {
        const res = await fetch("/api/property/get?house=true&limit=4");
        const data = await res.json;
        setHouseListing(data);
        fetchApartmentListing();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchApartmentListing = async () => {
      try {
        const res = await fetch("/api/property/get?apartment=true&limit=4");
        const data = await res.json;
        setApartmentListing(data);
        fetchLandListing();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchLandListing = async () => {
      try {
        const res = await fetch("/api/property/get?land=true&limit=4");
        const data = await res.json;
        setLandListing(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListing();
  }, []);

  const listing = {
    _id: "1",
    name: "Beautiful Family Home",
    area: "500 msq",
    imageUrls: [""],
    address: "123 Main St, Springfield, IL",
    description:
      "A beautiful family home with a large backyard, perfect for children and pets. Recently renovated with modern amenities.",
    offer: true,
    price: 250000,
    regularPrice: 300000,
    type: "sale",
    bedrooms: 3,
    bathrooms: 2,
  };
  const components = [];
  for (let i = 0; i < 4; i++) {
    components.push(
      <div key={i}>
        <Card listing={listing} />
      </div>,
    );
  }
  return (
    <main>
      <HeroSection />
      <div className="flex flex-col gap-8">
        {/* Recent offers */}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Recent Offers</h2>
            <Link to={"/search?offer=true"}>
            <Button className="bg-blue-700 hover:bg-blue-500">
                See more
              </Button>
            </Link>
          </div>

          <div className="my-8 grid grid-cols-4">{components}</div>
        </div>
        {/* Recent Homes for sell*/}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">House for sell</h2>
            <Link to={"/search?offer=true"}>
              <Button className="bg-blue-700 hover:bg-blue-500">
                See more
              </Button>
            </Link>
          </div>

          <div className="my-8 grid grid-cols-4 items-center">{components}</div>
        </div>
        {/* Recent Apartment for sell*/}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Apartment for sell</h2>
            <Link to={"/search?offer=true"}>
              <Button className="bg-blue-700 hover:bg-blue-500">
                See more
              </Button>
            </Link>
          </div>
          <div className="my-8 grid grid-cols-4 items-center">{components}</div>
        </div>
        {/* Recent  Land for sell*/}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Land for sell </h2>
            <Link to={"/search?offer=true"}>
              <Button className="bg-blue-700 hover:bg-blue-500">See more</Button>
            </Link>
          </div>
          <div className="my-8 grid grid-cols-4 items-center">{components}</div>
        </div>
      </div>
    </main>
  );
}
