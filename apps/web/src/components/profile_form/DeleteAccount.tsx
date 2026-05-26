import { Button } from "../ui/button";

export default function DeleteAccount() {
  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Delete Account</h2>
      <div className="flex items-center justify-between rounded-lg bg-white ">
        <span className="text-lg font-medium">Delete Account</span>
        <Button
          type="submit"
          className="text-white bg-blue-800 hover:bg-blue-500 w-[180px]"
        >
          Delete My Account
        </Button>
      </div>
    </div>
  );
}
