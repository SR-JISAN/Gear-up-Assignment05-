"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { Eye, EyeClosed } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { registerAction, TActionState } from "../_actions/registerAction";
import GoogleLoginButton from "./GoogleLoginButton";

function RegisterForm() {
    const initialState: TActionState = {
      success: false,
      message: "",
    };
  const [state, action, pending] = useActionState(registerAction, initialState);

  const [isOpenEys, setIsOpenEye] = useState(false)

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);
  
  return (
    <div>
      <form className="space-y-3 " action={action}>
        <Card className="space-y-3 min-h-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 p-4">
          <Input
            name="name"
            type="text"
            placeholder="Enter Your Full Name"
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Enter Your Email"
            required
          />
          <div className="space-y-1.5">
            <div className="flex items-center relative">
              <Input
                name="password"
                type={isOpenEys ? "text" : "password"}
                placeholder="Enter Your password"
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
          </div>
          <Input
            name="phone_number"
            type="text"
            placeholder="Enter Your Valid Phone Number"
            required
          />
          <div className="space-y-2">
            <label className="text-sm font-medium">Role</label>

            <Select name="role" defaultValue="CUSTOMER">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="CUSTOMER">Customer</SelectItem>

                <SelectItem value="PROVIDER">Provider</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            variant="outline"
            className="hover:bg-cyan-600 hover:text-white font-bold"
          >
            {pending ? "Regis..." : "Register"}
          </Button>
          <GoogleLoginButton/>
          <p>
            Already Have Account{" "}
            <Link
              className="underline text-sm text-blue-500 hover:text-blue-800"
              href="/login"
            >
              Log In.
            </Link>
          </p>
        </Card>
      </form>
    </div>
  );
}

export default RegisterForm;
