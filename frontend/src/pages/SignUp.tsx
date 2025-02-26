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
import { Link, useNavigate } from "react-router";
import { signUpSchema } from "@/types/schema";
import ax from "@/lib/axios-instance";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      password: "",
      number: "",
      email: "",
      role: "user",
      nid: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    const initialBalance = values.role === "agent" ? 100000 : 40;

    try {
      const res = await ax.post("/auth/signup", { ...values, initialBalance });
      console.log(res.data);

      if (res?.data?.success) {
        toast.success("Registered..! plaeas login now");
        navigate("/sign-in");
      }
      return res?.data;
    } catch (error) {
      toast.error("something went wrong..");

      if (axios.isAxiosError(error) && error.response) {
        return error.response.data;
      }
      throw error;
    }
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

                {/* role */}
                <FormField
                  control={form.control}
                  name="role"
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
                          <SelectItem value="user">User</SelectItem>
                          <SelectItem value="agent">Agent</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* email */}
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

              {/* mobile  */}
              <FormField
                control={form.control}
                name="number"
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

              {/* pin */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Password</FormLabel>
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

              {/* nid */}
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

              <Button type="submit" className="w-full cursor-pointer">
                Register
              </Button>

              <div>
                <span className="text-slate-700 font-semibold">
                  Already have an account ?{" "}
                </span>
                <Link to="/sign-in" className="text-blue-700 font-bold">
                  Login
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Toaster />
    </div>
  );
};

export default SignUp;

//https://mfs-bw2atetkh-polashs-projects.vercel.app/
