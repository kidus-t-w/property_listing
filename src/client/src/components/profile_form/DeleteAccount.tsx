export default function DeleteAccount() {
  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Delete Account</h2>
      <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md">
        <span className="text-lg font-medium">Delete Account</span>
        <button
          type="submit"
          className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Delete My Account
        </button>
      </div>
    </div>
  );
}
