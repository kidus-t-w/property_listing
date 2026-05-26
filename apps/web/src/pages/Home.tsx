import HeroSection from "@/components/common/HeroSection";
import PropertySection from "@/components/property_listing/PropertySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="space-y-16 px-8">
        <PropertySection title="Recent Offers" recent={true} />
        <PropertySection title="House" type="House" />
        <PropertySection title="Apartments" type="Apartment" />
        <PropertySection title="Land" type="Land" />
      </div>
    </main>
  );
}
