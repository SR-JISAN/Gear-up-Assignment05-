import LoginForm from "@/app/(authGroup)/_components/login-form";

export const metadata = {
  title: "Sign In | Your App",
  description: "Sign in to your account",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md">
        {/* Left side - Form */}
        <div className="space-y-8">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
