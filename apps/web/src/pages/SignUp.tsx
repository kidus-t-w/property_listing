import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { SignUpInput, signUpFormSchema } from "../schemas/auth.schema";
import {
  Form,
  FormControl,
  FormMessage,
  FormItem,
  FormField,
  FormLabel,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useState } from "react";
import { Eye, EyeOff, Home, TrendingUp, Shield } from "lucide-react";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<SignUpInput>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    const { confirm_password, ...rest } = values;

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rest),
      });
      if (!response.ok) throw new Error("Signup failed");
      navigate("/login");
    } catch (error: any) {
      console.error(error);
      form.setError("email", { message: "Signup failed. Please try again." });
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white lg:flex-row">
      {/* Left Column: Sign Up Form */}
      <div className="flex flex-1 items-center justify-center px-6 py-12 lg:px-12">
        <div className="w-full max-w-md">
          {/* Logo (mobile only) */}
          <Link
            to="/"
            className="mb-8 inline-block text-2xl font-light tracking-[-0.22px] text-[#0d253d] hover:text-[#533afd] transition-colors lg:hidden"
          >
            Ethio Property
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-light tracking-[-0.64px] text-[#0d253d] md:text-4xl">
              Create an account
            </h1>
            <p className="mt-2 text-[15px] font-light text-[#64748d]">
              Join Ethio Property to find your dream home
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                          placeholder="John"
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
                          placeholder="Doe"
                          {...field}
                          className="h-11 rounded-md border-[#a8c3de] text-[15px] font-light focus:border-[#533afd] focus:ring-1 focus:ring-[#533afd]"
                        />
                      </FormControl>
                      <FormMessage className="text-[12px] text-[#ea2261]" />
                    </FormItem>
                  )}
                />
              </div>

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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-normal text-[#0d253d]">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          {...field}
                          className="h-11 w-full rounded-md border-[#a8c3de] pr-10 text-[15px] font-light focus:border-[#533afd] focus:ring-1 focus:ring-[#533afd]"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-[#64748d]" />
                          ) : (
                            <Eye className="h-4 w-4 text-[#64748d]" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-[12px] text-[#ea2261]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirm_password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-normal text-[#0d253d]">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          {...field}
                          className="h-11 w-full rounded-md border-[#a8c3de] pr-10 text-[15px] font-light focus:border-[#533afd] focus:ring-1 focus:ring-[#533afd]"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4 text-[#64748d]" />
                          ) : (
                            <Eye className="h-4 w-4 text-[#64748d]" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-[12px] text-[#ea2261]" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="h-11 w-full rounded-full bg-[#533afd] text-[16px] font-normal text-white transition-all duration-200 hover:bg-[#4434d4] focus:outline-none focus:ring-2 focus:ring-[#533afd] focus:ring-offset-2"
              >
                Sign Up
              </Button>
            </form>
          </Form>

          <Separator className="my-6 bg-[#e3e8ee]" />

          <div className="text-center text-[15px] font-light text-[#64748d]">
            Already have an account?{" "}
            <Link to="/login" className="text-[#533afd] hover:text-[#4434d4] transition-colors">
              Sign in
            </Link>
          </div>
        </div>
      </div>

      {/* Right Column: Visual Display */}
      <div className="relative hidden flex-1 items-center justify-center bg-gradient-to-br from-[#f6f9fc] to-[#f5e9d4] p-8 lg:flex">
        {/* Decorative blur blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[#b9b9f9] opacity-30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#f96bee] opacity-20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#533afd] opacity-10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-md text-center">
          {/* Brand circle */}
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-white p-3 shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0d253d]">
                <Home className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-light tracking-[-0.96px] text-[#0d253d]">
            Start your journey
          </h2>
          <p className="mt-3 text-[15px] font-light text-[#64748d]">
            Join thousands of happy homeowners and investors. Get access to verified listings, market insights, and expert support.
          </p>

          {/* Feature list */}
          <div className="mt-8 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                <TrendingUp className="h-4 w-4 text-[#533afd]" />
              </div>
              <span className="text-[15px] font-light text-[#0d253d]">Real-time market analytics</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                <Shield className="h-4 w-4 text-[#533afd]" />
              </div>
              <span className="text-[15px] font-light text-[#0d253d]">Secure transactions & verified properties</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                <Home className="h-4 w-4 text-[#533afd]" />
              </div>
              <span className="text-[15px] font-light text-[#0d253d]">Personalized property recommendations</span>
            </div>
          </div>

          {/* Mini dashboard preview */}
          <div className="mt-10 rounded-xl bg-[#0d253d] p-4 shadow-[0_8px_24px_rgba(0,55,112,0.08)]">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <div className="h-2 w-2 rounded-full bg-[#ea2261]" />
              <div className="h-2 w-2 rounded-full bg-[#f96bee]" />
              <div className="h-2 w-2 rounded-full bg-[#533afd]" />
              <span className="ml-auto text-[10px] font-light text-white/50">welcome</span>
            </div>
            <div className="mt-3 text-left text-[11px] font-light text-white/80">
              <p>✓ Account created in seconds</p>
              <p className="mt-1">✓ Save favorite listings</p>
              <p className="mt-1">✓ Get instant alerts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}