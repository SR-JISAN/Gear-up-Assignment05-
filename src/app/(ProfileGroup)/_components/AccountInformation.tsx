import { Calendar, CreditCard, ShieldCheck, UserCog, Hash } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { IUser } from "../_actions/getProfileAction";

interface Props {
  user: IUser;
}

export default function AccountInformation({ user }: Props) {

    
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Information</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex items-center gap-4">
          <Hash className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">User ID</p>

            <p className="font-medium break-all">{user.id}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <UserCog className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Role</p>

            <Badge>{user.role}</Badge>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ShieldCheck className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Account Status</p>

            <Badge
              variant={user.customer_status === "ACTIVE" ? "default" : "destructive"}
            >
              {user.customer_status}
            </Badge>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Calendar className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Joined</p>

            <p className="font-medium">
              {new Date(user.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <CreditCard className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Stripe Customer ID</p>

            <p className="font-medium break-all">
              {user.stripCustomerId || "Not Created"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
