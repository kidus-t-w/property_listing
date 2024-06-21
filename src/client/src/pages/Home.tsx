// Components
import Filters from "@/components/common/Filters";
import PageTitle from "@/components/common/PageTitle";
import Card from "@/components/common/Card";
import PropertyListing from "@/assets/img/propertyImage.jpeg";

// Assets
// import Logo from "../assets/img/H logo_Name.png";

const Home = () => {
  return (
    <div>
      <div className="h-96 w-full overflow-hidden mb-8">
        <img src={PropertyListing} alt="" className="w-full h-full object-cover"/>
      </div>
      <div className="title flex items-center justify-between px-4 mb-8 ">
        <PageTitle title="Properties" />
        <Filters />
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-8 mt-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => {
          return < Card/>
        })}
      </div>
    </div>
  );
};

export default Home;

