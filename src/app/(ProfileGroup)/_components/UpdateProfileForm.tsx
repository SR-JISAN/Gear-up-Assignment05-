"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { IUser } from "../_actions/getProfileAction";
import { updateProfileAction } from "../_actions/updateProfile";


interface Props {
  user: IUser;
  close: () => void;
}

const initialState = {
  success: false,
  message: "",
};

export default function UpdateProfileForm({ user, close }: Props) {
   console.log(user);
  const [state, action, pending] = useActionState(
    updateProfileAction,
    initialState,
  );

  useEffect(() => {
    if (!state.message) return;

    if (!state.success) {
      toast.error(state.message);
      return;
    }

    toast.success(state.message);

    close();
  }, [state, close]);

  return (
    <form action={action} className="space-y-5">
      <div>
        <label>Name</label>

        <Input name="name" defaultValue={user.name} />
      </div>

      <div>
        <label>Phone</label>

        <Input name="phone_number" defaultValue={user.phone_number ?? ""} />
      </div>

      <div>
        <label>Bio</label>

        <Input name="bio" defaultValue={user.profile.bio ?? ""} />
      </div>

      <div>
        <label>Profile Image</label>

        <Input name="profileImage" defaultValue={user.profile.profileImage ?? ""} />
      </div>

      <Button className="w-full" disabled={pending}>
        {pending ? "Updating..." : "Update Profile"}
      </Button>
    </form>
  );
}

