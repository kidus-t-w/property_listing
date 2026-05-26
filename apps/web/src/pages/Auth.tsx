import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AuthImage from "@/assets/img/auth.svg";
import LoginForm from "@/components/auth/LoginForm";
import SignUpForm from "@/components/auth/SignupForm";
export default function AuthPage() {
  return (
    <div className="flex h-screen">
      <div className="flex w-1/2 items-center justify-center bg-black text-white">
        <img src={AuthImage} alt="" className="w-[600px]" />
      </div>
      <div className="flex w-1/2 items-center justify-center ">
        <Tabs defaultValue="account" className="h-[500px] w-2/3">
          <TabsList className="flex w-full justify-evenly">
            <TabsTrigger value="account">Login</TabsTrigger>
            <TabsTrigger value="password">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="my-8 space-y-1">
              <h1 className="text-4xl font-bold">Welcome Back</h1>
              <p className="text-xl text-gray-600">
                Please login with your credentials.
              </p>
            </div>
            <LoginForm />
          </TabsContent>
          <TabsContent value="password">
            <div className="my-8 space-y-1">
              <h1 className="text-4xl font-bold">Welcome</h1>
              <p className="text-xl text-gray-600">
                Please enter your details.
              </p>
            </div>
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
