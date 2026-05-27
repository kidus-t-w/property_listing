import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";

export default function DeleteAccount() {
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      // Add delete account logic here
      console.log("Delete account");
    }
  };

  return (
    <div className="w-full">
      <h2 className="mb-2 text-2xl font-light tracking-[-0.26px] text-[#0d253d]">
        Delete Account
      </h2>
      <p className="mb-6 text-[15px] font-light text-[#64748d]">
        Permanently delete your account and all associated data. This action cannot be reversed.
      </p>

      <div className="rounded-xl border border-[#e3e8ee] bg-white p-6 shadow-[0_1px_3px_rgba(0,55,112,0.08)] md:p-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <h3 className="text-lg font-light tracking-[-0.22px] text-[#0d253d]">
              Delete your account
            </h3>
            <p className="text-[13px] font-light text-[#64748d]">
              Once deleted, you will lose access to all your listings and profile data.
            </p>
          </div>
          <Button
            onClick={handleDelete}
            variant="outline"
            className="rounded-full border-[#ea2261] px-4 py-2 text-[16px] font-normal text-[#ea2261] transition-all duration-200 hover:bg-[#ea2261]/5 focus:outline-none focus:ring-2 focus:ring-[#ea2261] focus:ring-offset-2"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete My Account
          </Button>
        </div>
      </div>
    </div>
  );
}