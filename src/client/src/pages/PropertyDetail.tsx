import AddisGlobal from "@/assets/img/propertyImage.jpeg";
import ContactForm from "@/components/common/Form";

function PropertyDetail({}) {
  const listing = {
    _id: "1",
    name: "Beautiful Family Home",
    imageUrls: [""],
    address: "123 Main St, Springfield, IL",
    description:
      "A beautiful family home with a large backyard, perfect for children and pets. Recently renovated with modern amenities.",
    offer: true,
    discountPrice: 250000,
    regularPrice: 300000,
    type: "sale",
    bedrooms: 3,
    bathrooms: 2,
  };

  console.log(listing);

  return (
    <div>
      <div className="mx-auto flex items-center justify-between rounded-md bg-white p-4 shadow-md mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Summit CMC, 48 Bed Room Ground Plus Five Furnished Apartment
            Building For Rent, Addis Ababa
          </h2>
          <div className="mt-2 text-sm text-gray-500">
            <span>
              📍 Goro, Summit - Goro road, Yeka Bole Bota, Addis Ababa, 14920,
              Ethiopia
            </span>
          </div>
        </div>
        <div className="text-xl font-semibold text-blue-500">
          1,600,000 ETB /mo
        </div>
      </div>

      <main className="box-border flex flex-wrap justify-center">
        <div className="w-[66.6%]">
          <div className="border- m-4 bg-white p-8 drop-shadow-lg">
            <div className="h-[500px]">
              <img className="mx-auto h-full" src={AddisGlobal} alt="" />
            </div>
            <div className="m-4 box-border grid grid-cols-3">
              <div className="m-2">
                <img src={AddisGlobal} alt="" />
              </div>
              <div className="m-2">
                <img src={AddisGlobal} alt="" />
              </div>
              <div className="m-2">
                <img src={AddisGlobal} alt="" />
              </div>
            </div>
          </div>
          <div className="border- m-4 bg-white p-8 drop-shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Description</h2>
            <hr />
            <p className="mt-4 p-4">{listing.description}</p>
          </div>
          <div className="border- m-4 bg-white p-8 drop-shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Detail</h2>
            <hr />
            <div className="grid grid-cols-2 p-4 md:grid-cols-4">
              <ul>
                <li>Property ID:</li>
                <li>Price:</li>
                <li>Property Size:</li>
                <li>Bedrooms:</li>
                <li>Bathrooms:</li>
                <li>Garage:</li>
              </ul>
              <ul>
                <li>RE4904</li>
                <li>114,000 ETB</li>
                <li>140 m2</li>
                <li>3</li>
                <li>3</li>
                <li>1</li>
              </ul>
              <ul>
                <li>Year Built:</li>
                <li>Property Type:</li>
                <li>Property Size:</li>
                <li>Property Status:</li>
                <li>Floor:</li>
                <li>Furnished:</li>
              </ul>
              <ul>
                <li>2016</li>
                <li>Apartment for rent</li>
                <li>140 m2</li>
                <li>For sell</li>
                <li>4</li>
                <li>no</li>
              </ul>
            </div>
          </div>
          <div className="border- m-4 bg-white p-8 drop-shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Address</h2>
            <hr />
            <div className="grid grid-cols-2 p-4 md:grid-cols-4">
              <ul>
                <li>Address:</li>
                <li>City:</li>
              </ul>
              <ul>
                <li>Bole</li>
                <li>Addis Ababa</li>
              </ul>
              <ul>
                <li>Area:</li>
                <li>Country:</li>
              </ul>
              <ul>
                <li>Wollo Sefer</li>
                <li>Ethiopia</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border- mt-4 h-full w-[33.3%] min-w-[300px] bg-white p-4 ">
          
          <ContactForm />
        </div>
      </main>
    </div>
  );
}

export default PropertyDetail;
