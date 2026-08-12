"use client";

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function GoogleLoginButton() {
  const router = useRouter();

  const handleGoogleSuccess = async (
    credentialResponse: CredentialResponse,
  ) => {
    try {
      const idToken = credentialResponse.credential;

      if (!idToken) {
        toast.error("Google token not found");
        return;
      }

      const response = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Google login failed");
      }

      toast.success("Google Login Successful");

      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      console.error("Google Login Error:", error);

      toast.error(
        error instanceof Error ? error.message : "Google login failed",
      );
    }
  };

  return (
    <div className="w-full">
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={() => {
          toast.error("Google Login Failed");
        }}
        width="100%"
      />
    </div>
  );
}
