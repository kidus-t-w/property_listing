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

export default function SignUpPage() {
  const navigate = useNavigate()

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
    console.log("Form values:", values); // Log form values

    const { confirm_password, ...rest } = values;

    try {
      const res = await fetch("http://localhost:1337/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rest),
      });
      return navigate('/login')
    } catch (error: any) {
      console.error(error);
    }
  }

  return (
    <main className="relative flex h-screen flex-col items-center justify-center gap-4 font-poppins">
      <h1 className="mb-5 text-5xl font-semibold">Ethio-Property</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="min-w-[600px] space-y-4"
        >
          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md">First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="First name"
                      {...field}
                      className="text-md h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md">Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Last name"
                      {...field}
                      className="text-md h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="john.doe@gmail.com"
                    {...field}
                    className="text-md h-12"
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
                    placeholder="Enter your password..."
                    {...field}
                    className="text-md h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Confirm your password"
                    {...field}
                    className="text-md h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="text-md h-12 w-full bg-blue-700 hover:bg-blue-500">
            Sign Up
          </Button>
        </form>
      </Form>
      <Separator className="mt-2 max-w-[600px]" />
      <div className="text-md">
        <p>
          Already have an account?{" "}
          <Link className="text-blue-700" to={"/login"}>
            Login
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
