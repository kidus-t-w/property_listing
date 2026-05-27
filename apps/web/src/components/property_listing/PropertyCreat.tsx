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
  title: z.string().min(4, "Title must be at least 4 characters"),
  description: z.string().min(4, "Description must be at least 4 characters"),
  type: z.string().min(1, "Property type is required"),
  price: z.string().min(1, "Price is required").transform(Number),
  furnished: z.boolean().optional(),
  bedrooms: z.string().min(1, "Number of bedrooms is required").transform(Number),
  bathrooms: z.string().min(1, "Number of bathrooms is required").transform(Number),
  areaSize: z.string().min(1, "Area size is required").transform(Number),
  garages: z.string().transform(Number),
  yearBuild: z.string().min(4, "Year built is required").transform(Number),
  floors: z.string().transform(Number),
  address: z.string().min(4, "Address is required"),
  country: z.string().min(1, "Country is required"),
  subCity: z.string().min(1, "Subcity is required"),
  status: z.string().min(1, "Property status is required"),
  city: z.string().min(1, "City is required"),
  image: z
    .array(z.string())
    .min(3, "At least 3 images are required")
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
      address: "",
      country: "",
      subCity: "",
      city: "",
      image: [
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop",
      ],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const token = Cookies.get("accessToken");
    if (!token) {
      console.error("Token not found");
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/property`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      navigate("/profile/listings");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-3xl font-light tracking-[-0.64px] text-[#0d253d] md:text-4xl">
          Create Listing
        </h1>
        <p className="mt-1 text-[15px] font-light text-[#64748d]">
          Fill in the details below to list your property
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Basic Information */}
          <div className="rounded-xl border border-[#e3e8ee] bg-white p-6 shadow-[0_1px_3px_rgba(0,55,112,0.08)] md:p-8">
            <h2 className="mb-4 text-xl font-light tracking-[-0.26px] text-[#0d253d]">Basic Information</h2>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-normal text-[#0d253d]">Property Title *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Modern Villa in Bole"
                        {...field}
                        className="h-11 rounded-md border-[#a8c3de] text-[15px] font-light focus:border-[#533afd] focus:ring-1 focus:ring-[#533afd]"
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] text-[#ea2261]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-normal text-[#0d253d]">Description *</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        placeholder="Describe the property, its features, and surroundings..."
                        {...field}
                        className="rounded-md border-[#a8c3de] text-[15px] font-light focus:border-[#533afd] focus:ring-1 focus:ring-[#533afd]"
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] text-[#ea2261]" />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Type & Status */}
          <div className="rounded-xl border border-[#e3e8ee] bg-white p-6 shadow-[0_1px_3px_rgba(0,55,112,0.08)] md:p-8">
            <h2 className="mb-4 text-xl font-light tracking-[-0.26px] text-[#0d253d]">Category</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-normal text-[#0d253d]">Property Type *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-11 rounded-md border-[#a8c3de] text-[15px] font-light focus:ring-1 focus:ring-[#533afd]">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Apartment">Apartment</SelectItem>
                        <SelectItem value="House">House</SelectItem>
                        <SelectItem value="Land">Land</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-[12px] text-[#ea2261]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-normal text-[#0d253d]">Status *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-11 rounded-md border-[#a8c3de] text-[15px] font-light focus:ring-1 focus:ring-[#533afd]">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Available">Available</SelectItem>
                        <SelectItem value="Sold">Sold</SelectItem>
                        <SelectItem value="Pending">Pending</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-[12px] text-[#ea2261]" />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Pricing & Furnished */}
          <div className="rounded-xl border border-[#e3e8ee] bg-white p-6 shadow-[0_1px_3px_rgba(0,55,112,0.08)] md:p-8">
            <h2 className="mb-4 text-xl font-light tracking-[-0.26px] text-[#0d253d]">Pricing</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-normal text-[#0d253d]">Price (ETB) *</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g., 8500000"
                        {...field}
                        className="h-11 rounded-md border-[#a8c3de] text-[15px] font-light [font-feature-settings:'tnum'] focus:border-[#533afd] focus:ring-1 focus:ring-[#533afd]"
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] text-[#ea2261]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="furnished"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-end space-x-2 space-y-0 pb-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="rounded border-[#a8c3de] text-[#533afd] focus:ring-1 focus:ring-[#533afd]"
                      />
                    </FormControl>
                    <FormLabel className="text-[13px] font-normal text-[#0d253d]">Furnished</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Property Details */}
          <div className="rounded-xl border border-[#e3e8ee] bg-white p-6 shadow-[0_1px_3px_rgba(0,55,112,0.08)] md:p-8">
            <h2 className="mb-4 text-xl font-light tracking-[-0.26px] text-[#0d253d]">Property Details</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <FormField
                control={form.control}
                name="bedrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-normal text-[#0d253d]">Bedrooms *</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="0"
                        {...field}
                        className="h-11 rounded-md border-[#a8c3de] text-[15px] font-light [font-feature-settings:'tnum'] focus:border-[#533afd] focus:ring-1 focus:ring-[#533afd]"
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] text-[#ea2261]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bathrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-normal text-[#0d253d]">Bathrooms *</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="0"
                        {...field}
                        className="h-11 rounded-md border-[#a8c3de] text-[15px] font-light [font-feature-settings:'tnum'] focus:border-[#533afd] focus:ring-1 focus:ring-[#533afd]"
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] text-[#ea2261]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="areaSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-normal text-[#0d253d]">Area Size (m²) *</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="0"
                        {...field}
                        className="h-11 rounded-md border-[#a8c3de] text-[15px] font-light [font-feature-settings:'tnum'] focus:border-[#533afd] focus:ring-1 focus:ring-[#533afd]"
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] text-[#ea2261]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="garages"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-normal text-[#0d253d]">Garages</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="0"
                        {...field}
                        className="h-11 rounded-md border-[#a8c3de] text-[15px] font-light [font-feature-settings:'tnum'] focus:border-[#533afd] focus:ring-1 focus:ring-[#533afd]"
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] text-[#ea2261]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="yearBuild"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-normal text-[#0d253d]">Year Built *</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g., 2020"
                        {...field}
                        className="h-11 rounded-md border-[#a8c3de] text-[15px] font-light [font-feature-settings:'tnum'] focus:border-[#533afd] focus:ring-1 focus:ring-[#533afd]"
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] text-[#ea2261]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="floors"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-normal text-[#0d253d]">Floor</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="0"
                        {...field}
                        className="h-11 rounded-md border-[#a8c3de] text-[15px] font-light [font-feature-settings:'tnum'] focus:border-[#533afd] focus:ring-1 focus:ring-[#533afd]"
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] text-[#ea2261]" />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Location */}
          <div className="rounded-xl border border-[#e3e8ee] bg-white p-6 shadow-[0_1px_3px_rgba(0,55,112,0.08)] md:p-8">
            <h2 className="mb-4 text-xl font-light tracking-[-0.26px] text-[#0d253d]">Location</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-normal text-[#0d253d]">Street Address *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Namibia Street"
                        {...field}
                        className="h-11 rounded-md border-[#a8c3de] text-[15px] font-light focus:border-[#533afd] focus:ring-1 focus:ring-[#533afd]"
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] text-[#ea2261]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-normal text-[#0d253d]">City *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-11 rounded-md border-[#a8c3de] text-[15px] font-light focus:ring-1 focus:ring-[#533afd]">
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Addis Ababa">Addis Ababa</SelectItem>
                        <SelectItem value="Dire Dawa">Dire Dawa</SelectItem>
                        <SelectItem value="Mekelle">Mekelle</SelectItem>
                        <SelectItem value="Gonder">Gonder</SelectItem>
                        <SelectItem value="Bahir Dar">Bahir Dar</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-[12px] text-[#ea2261]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subCity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-normal text-[#0d253d]">Subcity *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-11 rounded-md border-[#a8c3de] text-[15px] font-light focus:ring-1 focus:ring-[#533afd]">
                          <SelectValue placeholder="Select subcity" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Addis Ketema">Addis Ketema</SelectItem>
                        <SelectItem value="Akaky Kaliti">Akaky Kaliti</SelectItem>
                        <SelectItem value="Arada">Arada</SelectItem>
                        <SelectItem value="Bole">Bole</SelectItem>
                        <SelectItem value="Gullele">Gullele</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-[12px] text-[#ea2261]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-normal text-[#0d253d]">Country *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-11 rounded-md border-[#a8c3de] text-[15px] font-light focus:ring-1 focus:ring-[#533afd]">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Ethiopia">Ethiopia</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-[12px] text-[#ea2261]" />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Images */}
          <div className="rounded-xl border border-[#e3e8ee] bg-white p-6 shadow-[0_1px_3px_rgba(0,55,112,0.08)] md:p-8">
            <h2 className="mb-4 text-xl font-light tracking-[-0.26px] text-[#0d253d]">Images</h2>
            <FormField
              control={form.control}
              name="image"
              render={() => (
                <FormItem>
                  <FormLabel className="text-[13px] font-normal text-[#0d253d]">Upload at least 3 images *</FormLabel>
                  <FormControl>
                    <div className="rounded-lg border-2 border-dashed border-[#a8c3de] bg-[#f6f9fc] p-8 text-center transition-colors hover:border-[#533afd]">
                      <p className="text-[15px] font-light text-[#64748d]">Drag and drop images here</p>
                      <p className="text-[13px] font-light text-[#64748d]">(Minimum size 1440x900)</p>
                      <Button
                        type="button"
                        variant="outline"
                        className="mt-4 rounded-full border-[#533afd] px-4 py-2 text-[14px] font-normal text-[#533afd] hover:bg-[#f6f9fc]"
                      >
                        Select Images
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-[12px] text-[#ea2261]" />
                </FormItem>
              )}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-2">
            <Button
              type="submit"
              className="rounded-full bg-[#533afd] px-6 py-2 text-[16px] font-normal text-white transition-all duration-200 hover:bg-[#4434d4] focus:outline-none focus:ring-2 focus:ring-[#533afd] focus:ring-offset-2"
            >
              Create Listing
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}