"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { loginAction } from "@/app/(authGroup)/_actions/loginAction";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, false);

  useEffect(() => {
    if (!state) return;

    if (!state.success) {
      toast.error(state.message || "user LogIn Failed");
    }
  }, [state]);
  return (
    <div>
      <form className="space-y-3 " action={action}>
        <Card className="space-y-3 min-h-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 p-4">
          <Input
            name="email"
            type="email"
            placeholder="Enter Your Email"
            required
          />
          <div className="space-y-1.5">
            <Input
              name="password"
              type="password"
              placeholder="Enter Your password"
              required
            />
            <Link
              className="underline text-sm text-blue-500 hover:text-blue-800"
              href="/"
            >
              Forgat Password
            </Link>
          </div>

          <Button>{pending ? "LogIn..." : "Log In"}</Button>

          <p>
            New to account{" "}
            <Link
              className="underline text-sm text-blue-500 hover:text-blue-800"
              href="/register"
            >
              Register.
            </Link>
          </p>
        </Card>
      </form>
    </div>
  );
}

export default LoginForm;
