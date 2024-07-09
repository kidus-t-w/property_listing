import { z } from "zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "../ui/textarea";
import Cookies from "js-cookie";

const formSchema = z.object({
  title: z.string().min(4, "Property title is required"),
  description: z.string().min(4, "Property title is required"),
  type: z.string(),
  price: z.string().min(1, "Property title is required").transform(Number),
  furnished: z.boolean().optional(),
  bedrooms: z.string().min(1, "Property title is required").transform(Number),
  bathrooms: z.string().min(1, "Property title is required").transform(Number),
  areaSize: z.string().min(1, "Property title is required").transform(Number),
  garages: z.string().transform(Number),
  yearBuild: z.string().min(4, "Property title is required").transform(Number),
  floors: z.string().transform(Number),
  address: z.string().min(4, "Property title is required"),
  country: z.string(),
  subCity: z.string(),
  status: z.string().min(1, { message: "Property status is required." }),
  city: z.string(),
  image: z
    .array(z.string({ required_error: "Image should be a string." }))
    .min(3, { message: "At least 3 images are required." })
    .default(["image1.jpg", "image2.jpg", "image3.jpg"]),
});

export default function CreateListing() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      status: "",
      type: "",
      // price: 0,
      // furnished: "",
      // bedrooms: 0,
      // bathrooms: 0,
      // areaSize: 0,
      // garages: 0,
      // yearBuild: 0,
      // floors: 0,
      address: "",
      country: "",
      subCity: "",
      city: "",
      image: ["https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form values:", values); // Log form values
    const token = Cookies.get("accessToken");

    if (!token) {
      console.error("Token not found in cookies");
      return;
    }

    try {
      const res = await fetch("http://localhost:1337/api/property", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const errorMessage = await res.text();
        throw new Error(`Request failed: ${res.status} - ${errorMessage}`);
      }

      console.log("Property created successfully");
      navigate("/profile/listings"); // Redirect to login page
    } catch (error: any) {
      console.error("An error occurred:", error);
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
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">Property Title *</FormLabel>
              <FormControl>
                <Input
                  className="w-full border p-2 focus-visible:ring-blue-700"
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">Description *</FormLabel>
              <FormControl>
                <Textarea
                  className="w-full border p-2 focus-visible:ring-blue-700"
                  placeholder="Enter property description"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          {/* Type */}
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Type *</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full border p-2 focus:ring-blue-700">
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent className="font-poppins">
                      <SelectItem value="Apartment">Apartament</SelectItem>
                      <SelectItem value="House">House</SelectItem>
                      <SelectItem value="Land">Land</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* status */}
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Status *</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full border p-2 focus:ring-blue-700">
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent className="font-poppins">
                      <SelectItem value="Sold">Sold</SelectItem>
                      <SelectItem value="Avaliable">Avaliable</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Price */}
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-md">Price *</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="w-full border p-2 focus-visible:ring-blue-700"
                    placeholder="Enter price in Ethiopian Birr"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="furnished"
            render={({ field }) => (
              <FormItem className="flex items-end pb-2">
                <div className="flex flex-row items-center justify-start gap-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-md">Furnished</FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Media */}
        <FormItem>
          <FormLabel className="text-md">Media</FormLabel>
          <FormControl>
            <div className="rounded-md border-2 border-dashed border-gray-300 p-6 text-center">
              <p className="mb-2">Drag and drop the gallery images here</p>
              <p className="mb-4">(Minimum size 1440x900)</p>
              <Button className="rounded-md bg-blue-800 px-4 py-2 text-white hover:bg-blue-500">
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
                <FormLabel className="text-md">Bedrooms *</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border p-2 focus-visible:ring-blue-700"
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
                <FormLabel className="text-md">Bathrooms *</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border p-2 focus-visible:ring-blue-700"
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
                <FormLabel className="text-md">Area Size *</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border p-2 focus-visible:ring-blue-700"
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
            name="garages"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Garages *</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border p-2 focus-visible:ring-blue-700"
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
            name="yearBuild"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Year Built *</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border p-2 focus-visible:ring-blue-700"
                    placeholder="Enter the year it was built"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="floors"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Floor *</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border p-2 focus-visible:ring-blue-700"
                    placeholder="Enter number of floors"
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
                <FormLabel className="text-md">Address *</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border p-2 focus-visible:ring-blue-700"
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
                <FormLabel className="text-md">Country *</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full border p-2 focus:ring-blue-700">
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                    <SelectContent className="font-poppins">
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
            name="subCity"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Subcity *</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full border p-2 focus:ring-blue-700">
                      <SelectValue placeholder="Select Subcity" />
                    </SelectTrigger>
                    <SelectContent className="font-poppins">
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
                <FormLabel className="text-md">City *</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full border p-2 focus:ring-blue-700">
                      <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                    <SelectContent className="font-poppins">
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
          className="w-full rounded bg-blue-800 px-4 py-2 font-bold text-white hover:bg-blue-500"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
