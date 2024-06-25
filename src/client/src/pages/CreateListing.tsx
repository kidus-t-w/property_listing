import Sidebar from '@/components/common/SideBar';
import PropertyForm from '@/components/common/PropertyForm';

const PropertyListing: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <PropertyForm />
    </div>
  );
};

export default PropertyListing;