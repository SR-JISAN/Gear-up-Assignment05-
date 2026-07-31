import LoginForm from "@/app/(authGroup)/_components/login-form";

export const metadata = {
  title: "Sign In | Your App",
  description: "Sign in to your account",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4 py-12 ">
      <div className="w-full h-full space-y-6 max-w-md">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-center">Welcome Back!!</h1>
          <p className="text-gray-500 text-center">
            Enter Your Credentials To Access The Account.
          </p>
        </div>
        <div className="space-y-8 min-h-full">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
