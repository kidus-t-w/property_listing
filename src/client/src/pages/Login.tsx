import Cookies from "js-cookie";
import axios, { AxiosError } from "axios";
// import { useAuth } from "../contexts/auth.context";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginInput } from "@/schemas/auth.schema";

// components
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
import { Eye, EyeOff } from "lucide-react"; // Icon library

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
    // destructure the values from the input
    const { email, password } = values;

    try {
      // make the request to the server
      const response = await axios.post<LoginResponse>(
        "http://localhost:1337/api/sessions",
        {
          email,
          password,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      // NOTE: no need to parse the data to json because we are using axios
      const { accessToken, refreshToken } = response.data;

      Cookies.set("accessToken", accessToken);
      Cookies.set("refreshToken", refreshToken);
      navigate("/");
    } catch (e: any) {
      const error = e as AxiosError;

      if (error.response) {
        const { data } = error.response;
        form.setError("password", {
          message: data as string,
        });
      } else {
        form.setError("email", {
          message: "Network error, please try again.",
        });
      }
    }
  };

  return (
    <main className="relative flex h-screen flex-col items-center justify-center gap-4 font-poppins">
      <h1 className="mb-5 text-3xl font-semibold sm:text-5xl">Ethio-Property</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-md space-y-4 sm:max-w-lg"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    {...field}
                    className="h-12 focus-visible:ring-blue-700"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="h-12 pr-10 focus-visible:ring-blue-700"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-700" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-700" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="text-md h-12 w-full bg-blue-700 hover:bg-blue-500">
            Login
          </Button>
        </form>
      </Form>
      <Separator className="mt-2 w-full max-w-md sm:max-w-lg" />
      <div className="text-md">
        <p>
          Don't have an account?{" "}
          <Link className="text-blue-700" to={"/signup"}>
            Sign Up
          </Link>
        </p>
      </div>
      <Link to="/">
        <h1 className="absolute left-0 top-0 p-4 text-xl font-bold sm:p-8 sm:text-3xl">
          Ethio Property
        </h1>
      </Link>
    </main>
  );
}
