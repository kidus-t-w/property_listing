import HeroSection from "@/components/common/HeroSection";
import PropertySection from "@/components/property_listing/PropertySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="space-y-16">
        <PropertySection title="Recent Offers" recent={true} />
        <PropertySection title="House" type="house" />
        <PropertySection title="Apartments" type="apartment" />
        <PropertySection title="Land" type="land" />
      </div>
    </main>
  );
}
