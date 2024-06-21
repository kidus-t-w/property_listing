import { Button } from "@/components/ui/button";
import propertyImage from "@/assets/img/propertyImage.jpeg";

export default function Card() {
  return (
    <div className="w-80 rounded-lg p-3 shadow-lg">
      <div className="mb-5">
        <img src={propertyImage} alt="" className="rounded-lg" />
      </div>
      <div>
        <h2 className="mb-2 text-2xl">Title of the Project</h2>
        <p>House for sell</p>
        <p className="text-4xl">180,000 ETB</p>
        <div className="flex gap-6 text-sm mb-6">
        <p>2 Bedroom</p>
        <p>2 Bathroom</p>
        <p>104 m2</p>
        </div>
      </div>
      <Button className="float-right">Details</Button>
    </div>
  );
}
