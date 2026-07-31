import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export default function ProfileCard() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-4 p-6">
        <Avatar className="h-20 w-20">
          <AvatarFallback>MJ</AvatarFallback>
        </Avatar>

        <div className="text-center">
          <h2 className="text-xl font-bold">Md Jisan</h2>

          <p className="text-muted-foreground">Customer</p>
        </div>
      </CardContent>
    </Card>
  );
}
