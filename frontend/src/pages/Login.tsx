import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Info } from "lucide-react";
import { Link } from "react-router";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  pin: z
    .string()
    .length(5, "PIN must be exactly 5 digits")
    .regex(/^\d+$/, "PIN must contain only numbers"),
  mobile: z.string().regex(/^01\d{9}$/, "Invalid Bangladesh mobile number"),
  email: z.string().email("Invalid email address"),
  accountType: z.enum(["AGENT", "USER"]),
  nid: z.string().min(10, "NID must be at least 10 characters"),
});

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      pin: "",
      mobile: "",
      email: "",
      accountType: "USER",
      nid: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const initialBalance = values.accountType === "AGENT" ? 100000 : 40;
    console.log("Registration values:", { ...values, initialBalance });
  };

  return (
    <div className=" lg:h-screen bg-gray-200/40 flex justify-center items-center mx-auto">
      <Card className="w-full lg:max-w-lg border border-black/30 shadow-md mx-auto">
        <CardHeader className=" border-b border-gray-500/40 pb-2">
          <CardTitle className="text-2xl text-centr">Create Account</CardTitle>
          <CardDescription className="text-[14px] flex items-center gap-2 text-red-500/80 font-medium">
            <span>
              <Info />
            </span>
            Register new MoneyMate account and get bonus
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex flex-col lg:flex-row gap-4 *:flex-1/2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="accountType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Account Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="border-black">
                            <SelectValue placeholder="Select account type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="USER">User</SelectItem>
                          <SelectItem value="AGENT">Agent</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number</FormLabel>
                    <FormControl>
                      <Input placeholder="01XXXXXXXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> PIN</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        maxLength={5}
                        placeholder="Enter 5-digit PIN"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nid"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>NID Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter NID number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Register
              </Button>

              <div>
                <span className="text-slate-700 font-semibold">
                  Already have an account ?{" "}
                </span>
                <Link to="/login" className="text-blue-700 font-bold">
                  Login
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
