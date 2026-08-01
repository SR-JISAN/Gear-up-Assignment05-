"use client";

import { useRef, useTransition } from "react";
import { toast } from "sonner";

import { createCategory } from "../_actions/categoryActions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CategoryForm() {
  const [pending, startTransition] = useTransition();

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const result = await createCategory(formData);

      if (result.success) {
        toast.success(result.message);
        formRef.current?.reset();
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <form
      ref={formRef}
      action={handleSubmit}
      className="space-y-6 rounded-xl border bg-card p-6"
    >
      <div className="space-y-2">
        <label className="text-sm font-medium">Category Name</label>

        <Input name="name" placeholder="Enter category name" required />
      </div>

      <Button type="submit" disabled={pending} className="w-full">
        {pending ? "Creating..." : "Create Category"}
      </Button>
    </form>
  );
}
