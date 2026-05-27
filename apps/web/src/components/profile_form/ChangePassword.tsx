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
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const profileSchema = z
  .object({
    newPassword: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function ChangePassword() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof profileSchema>) {
    const token = Cookies.get("accessToken");
    if (!token) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/change-password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ password: values.newPassword }),
      });

      if (!response.ok) throw new Error("Failed to update password");

      setSubmitStatus("success");
      form.reset();
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full">
      <h2 className="mb-2 text-2xl font-light tracking-[-0.26px] text-[#0d253d]">
        Change Password
      </h2>
      <p className="mb-6 text-[15px] font-light text-[#64748d]">
        Update your password to keep your account secure.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* New Password */}
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] font-normal text-[#0d253d]">
                    New Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showNewPassword ? "text" : "password"}
                        placeholder="Enter new password"
                        {...field}
                        className="h-11 rounded-md border-[#a8c3de] pr-10 text-[15px] font-light focus:border-[#533afd] focus:ring-1 focus:ring-[#533afd]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
                      >
                        {showNewPassword ? (
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

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] font-normal text-[#0d253d]">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm new password"
                        {...field}
                        className="h-11 rounded-md border-[#a8c3de] pr-10 text-[15px] font-light focus:border-[#533afd] focus:ring-1 focus:ring-[#533afd]"
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
          </div>

          {submitStatus === "success" && (
            <div className="rounded-md bg-[#f6f9fc] border border-[#e3e8ee] p-2 text-center text-[13px] font-light text-[#0d253d]">
              ✓ Password updated successfully!
            </div>
          )}

          {submitStatus === "error" && (
            <div className="rounded-md bg-[#f6f9fc] border border-[#ea2261]/30 p-2 text-center text-[13px] font-light text-[#ea2261]">
              ✗ Failed to update password. Please try again.
            </div>
          )}

          <div className="flex justify-end pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-[#533afd] px-6 py-2 text-[16px] font-normal text-white transition-all duration-200 hover:bg-[#4434d4] focus:outline-none focus:ring-2 focus:ring-[#533afd] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Updating..." : "Update Password"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}