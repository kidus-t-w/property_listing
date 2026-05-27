import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";

const profileSchema = z.object({
  userName: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
});

interface User {
  _id: string;
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export default function Information() {
  const token = Cookies.get("accessToken");
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      userName: "",
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
  });

  useEffect(() => {
    if (!token) {
      console.error("Token not found");
      setLoading(false);
      return;
    }

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
        form.reset(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
        setLoading(false);
      });
  }, [token, form]);

  const onSubmit = async (values: z.infer<typeof profileSchema>) => {
    if (!user || !token) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Failed to update user information");

      const updatedUser = await response.json();
      setUser(updatedUser);
      form.reset(updatedUser);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="h-8 w-32 animate-pulse rounded bg-[#f6f9fc]" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 w-20 animate-pulse rounded bg-[#f6f9fc]" />
              <div className="h-11 w-full animate-pulse rounded-md bg-[#f6f9fc]" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2 className="mb-6 text-2xl font-light tracking-[-0.26px] text-[#0d253d]">
        Profile Information
      </h2>
      <p className="mb-6 text-[15px] font-light text-[#64748d]">
        Update your personal details below.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] font-normal text-[#0d253d]">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="username"
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] font-normal text-[#0d253d]">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@example.com"
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
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] font-normal text-[#0d253d]">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="First name"
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
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] font-normal text-[#0d253d]">
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Last name"
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
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] font-normal text-[#0d253d]">
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+251 9XX XXX XXX"
                      {...field}
                      className="h-11 rounded-md border-[#a8c3de] text-[15px] font-light [font-feature-settings:'tnum'] focus:border-[#533afd] focus:ring-1 focus:ring-[#533afd]"
                    />
                  </FormControl>
                  <FormMessage className="text-[12px] text-[#ea2261]" />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end pt-2">
            <Button
              type="submit"
              className="rounded-full bg-[#533afd] px-6 py-2 text-[16px] font-normal text-white transition-all duration-200 hover:bg-[#4434d4] focus:outline-none focus:ring-2 focus:ring-[#533afd] focus:ring-offset-2"
            >
              Update Information
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}