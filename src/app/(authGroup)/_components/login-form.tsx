"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { loginAction } from "@/app/(authGroup)/_actions/loginAction";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { Eye, EyeClosed } from "lucide-react";
import GoogleLoginButton from "./GoogleLoginButton";

function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, false);

  const [isOpenEys, setIsOpenEye] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     const handleAdminLogin = () => {
       setEmail("srjisan@gmail.com");
       setPassword("123456");
     };

     const handleProviderLogin = () => {
       setEmail("nabila@gmail.com");
       setPassword("1234567");
     };

     const handleCustomerLogin = () => {
       setEmail("sam@gmail.com");
       setPassword("1234567");
     };

  useEffect(() => {
    if (!state) return;

    if (!state.success) {
      toast.error(state.message || "user LogIn Failed");
    }
  }, [state]);
  
  return (
    <div>
      <Card className="space-y-3 min-h-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 p-4">
        <form className="space-y-3 min-h-full" action={action}>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <div className="space-y-1.5">
            <div className="flex items-center relative">
              <Input
                id="password"
                name="password"
                type={isOpenEys ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="pr-10"
                required
              />

              <button
                type="button"
                onClick={() => setIsOpenEye(!isOpenEys)}
                className="absolute bottom-1 right-1.5"
              >
                {isOpenEys ? (
                  <Eye color="#1a71a8" />
                ) : (
                  <EyeClosed color="#1a71a8" />
                )}
              </button>
            </div>
            <Link
              className="underline text-sm text-blue-500 hover:text-blue-800"
              href="/"
            >
              Forgat Password
            </Link>
          </div>

          <Button
            variant="outline"
            className="hover:bg-cyan-600 hover:text-white font-semibold w-full"
          >
            {pending ? "LogIn..." : "Log In"}
          </Button>
          <GoogleLoginButton/>
        </form>
        <p>
          New to account{" "}
          <Link
            className="underline text-sm text-blue-500 hover:text-blue-800"
            href="/register"
          >
            Register.
          </Link>
        </p>

        <div className="flex justify-between items-center gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={handleAdminLogin}
            disabled={pending}
            className="hover:bg-cyan-600 hover:text-white"
          >
            Sign in as Admin
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={handleProviderLogin}
            disabled={pending}
            className="hover:bg-cyan-600 hover:text-white"
          >
            Sign in as Provider
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={handleCustomerLogin}
            disabled={pending}
            className="hover:bg-cyan-600 hover:text-white"
          >
            Sign in as Customer
          </Button>
        </div>
        <Button
          variant="outline"
          type="button"
          className="hover:bg-cyan-600 hover:text-white"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          GO BACK TO HOME
        </Button>
      </Card>
    </div>
  );
}

export default LoginForm;
