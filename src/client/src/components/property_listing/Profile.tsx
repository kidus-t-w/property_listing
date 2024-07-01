import ChangePassword from "../profile_form/ChangePassword";
import DeleteAccount from "../profile_form/DeleteAccount";
import Information from "../profile_form/information";

export default function ProfileForm() {
  return (
    <div className="w-full px-8">
      <Information />
      <ChangePassword />
      <DeleteAccount/>
    </div>
  );
}
