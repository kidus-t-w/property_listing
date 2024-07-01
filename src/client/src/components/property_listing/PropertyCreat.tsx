import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { redirect } from "react-router-dom";

const formSchema = z.object({
  propertyTitle: z.string().min(4, "Property title is required"),
  content: z.string().min(1, "Description is required"),
  type: z.string().min(1, "Type is required"),
  price: z.string().min(1, "Price is required"),
  bedrooms: z.string().min(1, "Number of bedrooms is required"),
  bathrooms: z.string().min(1, "Number of bathrooms is required"),
  areaSize: z.string().min(1, "Area size is required"),
  landArea: z.string().min(1, "Land area is required"),
  garages: z.string().min(1, "Number of garages is required"),
  yearBuilt: z.string().min(1, "Year built is required"),
  floor: z.string().min(1, "Floor number is required"),
  propertyID: z.string().min(1, "Property ID is required"),
  address: z.string().min(1, "Address is required"),
  country: z.string().min(1, "Country is required"),
  stateCounty: z.string().min(1, "State/County is required"),
  city: z.string().min(1, "City is required"),
});

export default function CreateListing() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propertyTitle: "",
      content: "",
      type: "",
      status: "",
      label: "",
      price: "",
      bedrooms: "",
      bathrooms: "",
      areaSize: "",
      landArea: "",
      garages: "",
      yearBuilt: "",
      floor: "",
      propertyID: "",
      address: "",
      country: "",
      stateCounty: "",
      city: "",
      area: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form values:", values); // Log form values


    try {
      const res = await fetch("http://localhost:1337/api/property/id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      return redirect("/"); // Redirect to login page
      console.log("Property created succesfully");
    } catch (error: any) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-8 rounded-md bg-white p-4 px-4 shadow-md md:px-12"
      >
        <h2 className="mb-4 text-3xl font-bold">Create Listing</h2>

        {/* Property Title */}
        <FormField
          control={form.control}
          name="propertyTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Title</FormLabel>
              <FormControl>
                <Input
                  className="w-full border p-2"
                  placeholder="Enter property title"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  className="w-full border p-2"
                  placeholder="Enter property description"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Type */}
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className=" w-full border p-2" >
                      <SelectValue placeholder="Select Floor" />
                    </SelectTrigger>
                    <SelectContent >
                      <SelectItem value="apartament">Apartament for sell</SelectItem>
                      <SelectItem value="house">House for sell</SelectItem>
                      <SelectItem value="land">Land for sell</SelectItem>
                    </SelectContent>
                  </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Price */}
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  className="w-full border p-2"
                  placeholder="Enter price in Ethiopian Birr"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Media */}
        <FormItem>
          <FormLabel>Media</FormLabel>
          <FormControl>
            <div className="rounded-md border-2 border-dashed border-gray-300 p-6 text-center">
              <p className="mb-2">Drag and drop the gallery images here</p>
              <p className="mb-4">(Minimum size 1440x900)</p>
              <Button className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600">
                Select and Upload
              </Button>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>

        {/* Details */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <FormField
            control={form.control}
            name="bedrooms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bedrooms</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border p-2"
                    placeholder="Enter number of bedrooms"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bathrooms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bathrooms</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border p-2"
                    placeholder="Enter number of bathrooms"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="areaSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Area Size</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border p-2"
                    placeholder="Enter property area size"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="landArea"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Land Area</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border p-2"
                    placeholder="Enter property land area"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="garages"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Garages</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border p-2"
                    placeholder="Enter number of garages"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="yearBuilt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year Built</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border p-2"
                    placeholder="Enter year built"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="floor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Floor</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className=" w-full border p-2">
                      <SelectValue placeholder="Select Floor"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="propertyID"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Property ID</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border p-2"
                    placeholder="Enter property ID"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Location */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border p-2"
                    placeholder="Enter property address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className=" w-full border p-2">
                      <SelectValue placeholder="Select Country"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Ethiopia">Ethiopia</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="stateCounty"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subcity</FormLabel>
                <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className=" w-full border p-2">
                      <SelectValue placeholder="Select Subcity"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Addis Ketema">Addis Ketema</SelectItem>
                      <SelectItem value="Akaky Kaliti">Akaky Kaliti</SelectItem>
                      <SelectItem value="Arada">Arada</SelectItem>
                      <SelectItem value="Bole">Bole</SelectItem>
                      <SelectItem value="Gullele">Gullele</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className=" w-full border p-2">
                      <SelectValue placeholder="Select Subcity"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Addis Ababa">Addis Ababa</SelectItem>
                      <SelectItem value="Dire Dawa">Dire Dawa</SelectItem>
                      <SelectItem value="Mekelle">Mekelle</SelectItem>
                      <SelectItem value="Gonder">Gonder</SelectItem>
                      <SelectItem value="Bahir Dar">Bahir Dar</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="w-full rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
