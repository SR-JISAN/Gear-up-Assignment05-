import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { IUser } from "../_actions/getProfileAction";

interface Props {
  user: IUser;
}

export default function ProfileCard({ user }: Props) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center p-8">
        <Image
          src={user?.profile?.profileImage || "/avatar.png"}
          alt={user.name}
          width={120}
          height={120}
          className="rounded-full border object-cover"
        />

        <h2 className="mt-5 text-2xl font-bold">{user.name}</h2>

        <p className="text-muted-foreground">{user.email}</p>

        <Badge className="mt-4">{user.role}</Badge>

        <Badge
          variant={
            user.customer_status === "ACTIVE" ? "default" : "destructive"
          }
          className="mt-2"
        >
          {user.customer_status}
        </Badge>
      </CardContent>
    </Card>
  );
}
