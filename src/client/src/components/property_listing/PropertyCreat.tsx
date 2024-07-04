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

const formSchema = z.object({
  title: z.string().min(4, "Property title is required"),
  description: z
    .string().min(4, "Property title is required"),
  type: z.string(),
  price: z.string().min(1, "Property title is required"),
  furnished: z.boolean().optional(),
  bedrooms: z.string().min(1, "Property title is required"),
  bathrooms: z.string().min(1, "Property title is required"),
  areaSize: z.string().min(1, "Property title is required"),
  garages: z.string(),
  yearBuild: z.string().min(4, "Property title is required"),
  floors: z.string(),
  address: z.string().min(4, "Property title is required"),
  country: z.string(),
  subCity: z.string(),
  // status: z.string().min(1, { message: "Property status is required." }),
  city: z.string(),
  // image: z
  //   .array(z.string({ required_error: "Image should be a string." }))
  //   .min(3, { message: "At least 3 images are required." }),
});

export default function CreateListing() {
  
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      // status: "",
      type: "",
      price: "",
      // furnished: "",
      bedrooms: "",
      bathrooms: "",
      areaSize: "",
      garages: "",
      yearBuild: "",
      floors: "",
      address: "",
      country: "",
      subCity: "",
      city: "",
    },
  });
  
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form values:", values); // Log form values


    try {
      const res = await fetch("http://localhost:1337/api/property", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      navigate("/"); // Redirect to login page
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
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">Property Title</FormLabel>
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
              <FormLabel className="text-md">Description</FormLabel>
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

        {/* Type */}
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">Type</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full border p-2 focus:ring-blue-700">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent className="font-poppins">
                    <SelectItem value="apartament">Apartament</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="land">Land</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Price */}
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-md">Price</FormLabel>
                <FormControl>
                  <Input
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
                <FormLabel className="text-md">Bedrooms</FormLabel>
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
                <FormLabel className="text-md">Bathrooms</FormLabel>
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
                <FormLabel className="text-md">Area Size</FormLabel>
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
                <FormLabel className="text-md">Garages</FormLabel>
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
                <FormLabel className="text-md">Year Built</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border p-2 focus-visible:ring-blue-700"
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
            name="floors"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Floors</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full border p-2 focus:ring-blue-700">
                      <SelectValue placeholder="Select Floor" />
                    </SelectTrigger>
                    <SelectContent className="font-poppins">
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
        </div>

        {/* Location */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Address</FormLabel>
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
                <FormLabel className="text-md">Country</FormLabel>
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
                <FormLabel className="text-md">Subcity</FormLabel>
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
                <FormLabel className="text-md">City</FormLabel>
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
          className="w-full rounded  px-4 py-2 font-bold text-white bg-blue-800 hover:bg-blue-500"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
