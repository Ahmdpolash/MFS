import * as React from "react";
import { ArrowRightLeft, Banknote, CirclePlus, LayoutDashboard, Send, User, UserRoundCog, Users } from "lucide-react";

import { NavMain } from "@/components/nav-main";

import { NavUser } from "@/components/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Link } from "react-router";

// This is sample data.
const menuItems = {
  admin: [
    {
      title: "Dashboard Overview",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "User Management",
      url: "",
      icon: Users,
      isActive: true,
      items: [
        { title: "User List", url: "/dashboard/users" },
        { title: "User Transactions", url: "/dashboard/user-transactions" },
      ],
    },
    {
      title: "Agent Management",
      url: "",
      icon: UserRoundCog,
      isActive: true,
      items: [
        { title: "All Agents", url: "/dashboard/all-agents" },
        { title: "Request Agents", url: "/dashboard/request-agents" },
        { title: "Agent Transactions", url: "/dashboard/agent-transactions" },
      ],
    },
    {
      title: "Profile",
      url: "/dashboard/profile",
      icon: User,
    },
  ],
  user: [
    { title: "Dashboard Overview", url: "/dashboard/user", icon: LayoutDashboard },
    { title: "Send Money", url: "/dashboard/send-money", icon: Send },
    { title: "Cashout", url: "/dashboard/cashout", icon: Banknote },
    { title: "Transactions", url: "/dashboard/transactions", icon: ArrowRightLeft },
    { title: "Profile", url: "/dashboard/profile", icon: User },
  ],
  agent: [
    { title: "Dashboard Overview", url: "/dashboard", icon: LayoutDashboard },
    { title: "Cash-In", url: "/dashboard/cash-in", icon:CirclePlus },
    { title: "Cash-Out", url: "/dashboard/send-money", icon: Banknote },

    {
      title: "Transactions History",
      url: "/dashboard/agent-transactions",
      icon: ArrowRightLeft,
    },
    { title: "Profile", url: "/dashboard/profile", icon: User },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" className="" {...props}>
      <SidebarHeader>
        <SidebarMenuButton size="lg" asChild>
          <Link className="border-b border-gray-500/50 pb-2" to={"/"}>
            <span className="font-medium text-2xl text-center m-auto">
              MoneyMate
            </span>
          </Link>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={menuItems["user"]} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: "Admin",
            email: "test@example.com",
            // name: user?.name || "Admin",
            // email: user?.email || "admin@gmail.com",
            avatar: "string",
          }}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
