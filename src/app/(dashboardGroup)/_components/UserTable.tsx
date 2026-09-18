"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";



import UserAvatar from "./UserAvatar";
import { AdminUser } from "../_actions/dashboardType";
import AdminStatusButton from "./AdminStatusButton";

export default function UserTable({ users }: { users: AdminUser[] }) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="flex  items-center gap-2">
        <CardTitle className="text-xl">Total Users :</CardTitle>
        <p className="font-bold text-lg">{users.length ?? 0}</p>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Serial No.</TableHead>
                <TableHead>User</TableHead>

                <TableHead>Email</TableHead>

                <TableHead>Phone</TableHead>

                <TableHead>Role</TableHead>

                <TableHead>Status</TableHead>

                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {users.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-10">
                    No users found
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user, index) => (
                  <TableRow key={user.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <UserAvatar
                        image={user.profile?.profileImage || "/avater.png"}
                        name={user.name}
                      />
                    </TableCell>

                    <TableCell>{user.email}</TableCell>

                    <TableCell>{user.phone_number || "N/A"}</TableCell>

                    <TableCell>
                      <Badge variant="outline">{user.role}</Badge>
                    </TableCell>

                    <TableCell>
                      <Badge
                        className={
                          user.customer_status === "ACTIVE"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }
                      >
                        {user.customer_status}
                      </Badge>
                    </TableCell>

                    <TableCell>
                      <AdminStatusButton user={user} />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
