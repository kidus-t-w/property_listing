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

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export default function LoginPage() {
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate()

  const isAuth = isAuthenticated()
  if (isAuth) {
    return <Navigate to="/"/> 
  }
  // const authContext = useAuth();

  // if (!authContext) {
  //   throw new Error("Login page must be used within an AuthProvider.");
  // }

  // const { authTokens, lrgin } = authContext;

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
        { headers: { "Content-Type": "application/json" } },
      );

      // NOTE: no need to parse the data to json because we are using axios
      const { accessToken, refreshToken } = response.data;

      Cookies.set("accessToken", accessToken);
      Cookies.set("refreshToken", refreshToken);
      navigate("/") 
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
      <h1 className="mb-5 text-5xl font-semibold">Ethio-Property</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="min-w-[600px] space-y-4"
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
                  <Input
                    placeholder="Enter your password"
                    className="h-12 focus-visible:ring-blue-700"
                    {...field}
                  />
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
      <Separator className="mt-2 max-w-[600px]" />
      <div className="text-md">
        <p>
          Don't have an account?{" "}
          <Link className="text-blue-700" to={"/signup"}>
            Sign Up
          </Link>
        </p>
      </div>
      <Link to="/">
        <h1 className="absolute left-0 top-0 p-8 text-3xl font-bold">
          Ethio Property
        </h1>
      </Link>
    </main>
  );
}
