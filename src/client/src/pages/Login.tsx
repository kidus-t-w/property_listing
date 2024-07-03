import {
  Form,
  FormControl,
  FormField,
  FormMessage,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginInput } from "@/schemas/auth.schema";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginInput) => {
    console.log(values);
  };

  return (
    <main className="flex flex-col gap-4 h-screen items-center justify-center font-poppins relative">
      <h1 className="text-5xl font-semibold mb-5">Ethio-Property</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="min-w-[600px] space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} className="h-12 focus-visible:ring-blue-700" />
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
                  <Input placeholder="Enter your password" className="h-12 focus-visible:ring-blue-700" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full h-12 text-md bg-blue-700 hover:bg-blue-500">Login</Button>
        </form>
      </Form>
      <Separator className="mt-2 max-w-[600px]" />
      <div className="text-md">
        <p>Don't have an account? <Link className="text-blue-700" to={'/signup'}>Sign Up</Link></p>
      </div>
      <Link to='/'><h1 className="absolute text-3xl font-bold top-0 left-0 p-8">Ethio Property</h1></Link>
    </main>
  );
}
