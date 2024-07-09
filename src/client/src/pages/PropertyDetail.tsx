import AddisGlobal from "@/assets/img/propertyImage.jpeg";
import ContactForm from "@/components/common/Form";
import { useLocation, useNavigate } from "react-router";

function PropertyDetail({}) {
  // const navigate = useNavigate();
  const location = useLocation();

  const property = location.state.property;
  // console.log("Property:", property);

  // const property = {
  //   _id: "1",
  //   title: property.title,
  //   imageUrls: [""],
  //   address: "123 Main St, Springfield, IL",
  //   description:
  //     property.description,
  //   offer: true,
  //   discountPrice: 250000,
  //   regularPrice: 300000,
  //   type: "sale",
  //   bedrooms: 3,
  //   bathrooms: 2,
  // };

  console.log(property);

  return (
    <div>
      <div className="mx-auto mb-6 flex items-center justify-between rounded-md bg-white p-4 shadow-md">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {property.title}
          </h2>
        </div>
        <div className="text-xl font-semibold text-blue-500">
          {property.price} ETB /mo
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
            <p className="mt-4 p-4">{property.description}</p>
          </div>
          <div className="border- m-4 bg-white p-8 drop-shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Detail</h2>
            <hr />
            <div className="grid grid-cols-2 p-4 md:grid-cols-4">
              <ul>
                <li>Price:</li>
                <li>Property Size:</li>
                <li>Bedrooms:</li>
                <li>Bathrooms:</li>
                <li>Garage:</li>
              </ul>
              <ul>
                <li>{property.price} ETB</li>
                <li>{property.areaSize} m2</li>
                <li>{property.bedrooms}</li>
                <li>{property.bathrooms}</li>
                <li>{property.garages}</li>
              </ul>
              <ul>
                <li>Year Built:</li>
                <li>Property Type:</li>
                <li>Property Status:</li>
                <li>Floor:</li>
                <li>Furnished:</li>
              </ul>
              <ul>
                <li>{property.yearBuild}EC</li>
                <li>{property.type} for sell</li>
                <li>{property.status}</li>
                <li>{property.floors}</li>
                <li>{property.furnished ? <div>Yes</div> : <div>No</div>}</li>
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
                <li>{property.address}</li>
                <li>{property.city}</li>
              </ul>
              <ul>
                <li>Sub City:</li>
                <li>Country:</li>
              </ul>
              <ul>
                <li>{property.subCity}</li>
                <li>{property.country}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border- mt-4 h-full w-[33.3%] min-w-[300px] bg-white p-4">
          <ContactForm />
        </div>
      </main>
    </div>
  );
}

export default PropertyDetail;
