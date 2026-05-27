import Cookies from "js-cookie";
import axios, { AxiosError } from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginInput } from "@/schemas/auth.schema";

import {
  Form,
  FormControl,
  FormField,
  FormMessage,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { isAuthenticated } from "@/lib/utils";
import { useState } from "react";
import { Eye, EyeOff, Home, TrendingUp, Shield } from "lucide-react";

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  const isAuth = isAuthenticated();
  if (isAuth) {
    return <Navigate to="/" />;
  }

  const onSubmit = async (values: LoginInput) => {
    const { email, password } = values;

    try {
      const response = await axios.post<LoginResponse>(
        `${import.meta.env.VITE_BACKEND_URL}/api/sessions`,
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const { accessToken, refreshToken } = response.data;
      Cookies.set("accessToken", accessToken);
      Cookies.set("refreshToken", refreshToken);
      navigate("/");
    } catch (e: any) {
      const error = e as AxiosError;
      if (error.response) {
        const { data } = error.response;
        form.setError("password", { message: data as string });
      } else {
        form.setError("email", { message: "Network error, please try again." });
      }
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white lg:flex-row">
      {/* Left Column: Login Form */}
      <div className="flex flex-1 items-center justify-center px-6 py-12 lg:px-12">
        <div className="w-full max-w-md">
          {/* Logo (mobile only, since desktop has visual column) */}
          <Link
            to="/"
            className="mb-8 inline-block text-2xl font-light tracking-[-0.22px] text-[#0d253d] hover:text-[#533afd] transition-colors lg:hidden"
          >
            Ethio Property
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-light tracking-[-0.64px] text-[#0d253d] md:text-4xl">
              Welcome back
            </h1>
            <p className="mt-2 text-[15px] font-light text-[#64748d]">
              Sign in to your account
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-normal text-[#0d253d]">
                      Email address
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="you@example.com"
                        {...field}
                        className="h-11 rounded-md border-[#a8c3de] bg-white text-[15px] font-light text-[#0d253d] placeholder:text-[#64748d]/50 focus:border-[#533afd] focus:ring-1 focus:ring-[#533afd]"
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
                          placeholder="Enter your password"
                          {...field}
                          className="h-11 w-full rounded-md border-[#a8c3de] bg-white pr-10 text-[15px] font-light text-[#0d253d] placeholder:text-[#64748d]/50 focus:border-[#533afd] focus:ring-1 focus:ring-[#533afd]"
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

              <Button
                type="submit"
                className="h-11 w-full rounded-full bg-[#533afd] text-[16px] font-normal text-white transition-all duration-200 hover:bg-[#4434d4] focus:outline-none focus:ring-2 focus:ring-[#533afd] focus:ring-offset-2"
              >
                Sign in
              </Button>
            </form>
          </Form>

          <Separator className="my-6 bg-[#e3e8ee]" />

          <div className="text-center text-[15px] font-light text-[#64748d]">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#533afd] hover:text-[#4434d4] transition-colors">
              Create account
            </Link>
          </div>
        </div>
      </div>

      {/* Right Column: Visual Display */}
      <div className="relative hidden flex-1 items-center justify-center bg-gradient-to-br from-[#f6f9fc] to-[#f5e9d4] p-8 lg:flex">
        {/* Decorative gradient blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[#b9b9f9] opacity-30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#f96bee] opacity-20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#533afd] opacity-10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-md text-center">
          {/* Brand Logo */}
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-white p-3 shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0d253d]">
                <Home className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-light tracking-[-0.96px] text-[#0d253d]">
            Find Your Dream Home
          </h2>
          <p className="mt-3 text-[15px] font-light text-[#64748d]">
            Access thousands of verified listings, track your favorites, and connect with trusted agents.
          </p>

          {/* Feature list */}
          <div className="mt-8 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                <TrendingUp className="h-4 w-4 text-[#533afd]" />
              </div>
              <span className="text-[15px] font-light text-[#0d253d]">Real-time market insights</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                <Shield className="h-4 w-4 text-[#533afd]" />
              </div>
              <span className="text-[15px] font-light text-[#0d253d]">Verified properties & secure payments</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                <Home className="h-4 w-4 text-[#533afd]" />
              </div>
              <span className="text-[15px] font-light text-[#0d253d]">Personalized property recommendations</span>
            </div>
          </div>

          {/* Dashboard mockup mini preview */}
          <div className="mt-10 rounded-xl bg-[#0d253d] p-4 shadow-[0_8px_24px_rgba(0,55,112,0.08)]">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <div className="h-2 w-2 rounded-full bg-[#ea2261]" />
              <div className="h-2 w-2 rounded-full bg-[#f96bee]" />
              <div className="h-2 w-2 rounded-full bg-[#533afd]" />
              <span className="ml-auto text-[10px] font-light text-white/50">portfolio</span>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between text-[11px] font-light text-white/70 [font-feature-settings:'tnum']">
                <span>Property</span>
                <span>Value (ETB)</span>
              </div>
              <div className="flex justify-between text-[11px] font-light text-white/90 [font-feature-settings:'tnum']">
                <span>Bole Villa</span>
                <span>8,450,000</span>
              </div>
              <div className="flex justify-between text-[11px] font-light text-white/70 [font-feature-settings:'tnum']">
                <span>Summit Condo</span>
                <span>3,220,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}