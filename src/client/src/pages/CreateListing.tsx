import Sidebar from '@/components/property_listing/SideBar';
import NewProperty from '@/components/property_listing/PropertyCreat'

const PropertyListing: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <NewProperty/>
    </div>
  );
};

export default PropertyListing;