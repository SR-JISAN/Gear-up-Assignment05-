import { Mail, MapPin, Phone, User, Pencil } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { IUser } from "../_actions/getProfileAction";

interface Props {
  user: IUser;
}

export default function PersonalInformation({ user }: Props) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Personal Information</CardTitle>

        <Button variant="outline" size="sm">
          <Pencil className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex items-center gap-4">
          <User className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Full Name</p>

            <p className="font-medium">{user.name}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Mail className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Email Address</p>

            <p className="font-medium">{user.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Phone className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Phone Number</p>

            <p className="font-medium">{user.phone || "Not Added"}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <MapPin className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Address</p>

            <p className="font-medium">{user.address || "Not Added"}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

