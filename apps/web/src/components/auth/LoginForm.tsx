import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Shadcn Component
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// first step --> Define the schema
const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required.",
    })
    .email({
      message: "Email must be a valid email address.",
    }),
  password: z
    .string({
      required_error: "Password is required.",
    })
    .min(8, {
      message: "Password must be a minimun of 8 characters.",
    })
    .max(25, {
      message: "Password can not exceed 25 characters.",
    }),
});

export default function LoginForm() {
  // second step --> Create the form object using useForm hook from react-hook-form
  // NOTE: the form object that you will create will have everything you need for the form, like:
  //      -- handleSubmit: to handle form submission
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // third step --> Create the submit handler function
  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="h-full w-full space-y-4"
      >
        {/* Email Input */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="janedoe@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        {/* Password Input */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your password here..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </Form>
  );
}
