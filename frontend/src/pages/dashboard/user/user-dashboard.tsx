"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DashboardPagination } from "@/components/dashboard/pagination";

const transactions = [
  {
    id: "TR123",
    date: "2024-02-24",
    type: "Send Money",
    amount: "500",
    recipient: "01712345678",
    status: "Completed",
  },
  {
    id: "TR124",
    date: "2024-02-24",
    type: "Cash Out",
    amount: "1000",
    recipient: "Agent: 01812345678",
    status: "Completed",
  },
  {
    id: "TR125",
    date: "2024-02-23",
    type: "Cash In",
    amount: "2000",
    recipient: "Self",
    status: "Completed",
  },
];

export function UserDashboard() {
  const [showBalance, setShowBalance] = useState(false);
  const balance = "5,240";

  return (
    <div className="grid gap-4 md:gap-8 mt-3">
      {/* header card box */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="border border-slate-500/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-medium">
              Current Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-1 items-cente">
              <div className="text-2xl font-bold">
                {showBalance ? `৳${balance}` : "৳•••••"}
              </div>
              <Button
                className="cursor-pointer"
                variant="ghost"
                size="icon"
                onClick={() => setShowBalance(!showBalance)}
              >
                {showBalance ? (
                  <EyeOff className="h-4 w-4 " />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">Available Balance</p>
          </CardContent>
        </Card>
        <Card className="border border-slate-500/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-medium ">Send Money</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-sm text-muted-foreground">
              Transactions this month
            </p>
          </CardContent>
        </Card>
        <Card className="border border-slate-500/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-medium">Cash Out</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-sm text-muted-foreground">
              Transactions this month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* table */}
      <Card className="border border-slate-500/50 cursor-pointer">
        <CardHeader>
          <CardTitle className="text-xl">Recent Transactions</CardTitle>
          <CardDescription>Your last transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader >
              <TableRow className="*:text-slate-700 *:text-center">
                <TableHead>Transaction ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Recipient</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {transactions.map((transaction) => (
                <TableRow className="*:text-center " key={transaction.id}>
                  <TableCell className="font-medium">
                    {transaction.id}
                  </TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>৳{transaction.amount}</TableCell>
                  <TableCell>{transaction.recipient}</TableCell>
                  <TableCell>{transaction.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* pagination */}
      <div>
        <DashboardPagination />
      </div>
    </div>
  );
}
