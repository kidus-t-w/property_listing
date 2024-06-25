import AddisGlobal from "@/assets/img/propertyImage.jpeg";
import  ContactForm  from "@/components/common/Form";
import PropertyCard from "@/components/common/PropertyTitle"
function PropertyDetail() {
  return (
    <div>
        < PropertyCard />
    <main className="box-border flex flex-wrap justify-center">
      <div className="w-[66.6%]">
        <div className="border- m-4 border-2 border-red-500 bg-white p-8 drop-shadow-lg">
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
        <div className="border- m-4 border-2 border-red-500 bg-white p-8 drop-shadow-lg">
          <h2 className="mb-4 text-2xl font-bold">Description</h2>
          <hr />
          <p className="mt-4 p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem consectetur accusamus quisquam sed sint sequi,
            voluptates neque impedit officiis alias corrupti voluptatum magnam
            numquam maxime natus delectus! Odio, provident hic! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Exercitationem
            consectetur accusamus quisquam sed sint sequi, voluptates neque
            impedit officiis alias corrupti voluptatum magnam numquam maxime
            natus delectus! Odio, provident hic!
          </p>
        </div>
        <div className="border- m-4 border-2 border-red-500 bg-white p-8 drop-shadow-lg">
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
        <div className="border- m-4 border-2 border-red-500 bg-white p-8 drop-shadow-lg">
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
      <div className="border- mt-4 w-[33.3%] min-w-[300px] border-2 border-red-500 bg-white p-4 drop-shadow-lg h-full">
        <h2 className="text-2xl font-bold">Reach Out</h2>
        <div className="grid grid-cols-2 mt-4 px-16">
          <div className="w-[100px]">
            <img className="w-full" src={AddisGlobal} alt="" />

          </div>
            <div>
              <h3>Kidus Tilahun</h3>
              <a href="#">view listing</a>
            </div>
        </div>
        < ContactForm/>
      </div>
    </main>
    </div>
  );
}

export default PropertyDetail;
