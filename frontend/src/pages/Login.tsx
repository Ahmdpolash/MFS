import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router";
import { loginSchema } from "@/types/schema";
import ax from "@/lib/axios-instance";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      password: "",
      identifier: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    console.log(values);

    try {
      const res = await ax.post("/auth/signin", {
        identifier: values.identifier,
        password: values.password,
      });

      if (res.data.success) {
        toast.success("Signin successful 🎉");
        navigate("/dashboard/user");

        const token = Cookies.get("token");
        console.log("Token cookie:", token);


      } else {
        toast.error(res.data.message || "Signin failed");
      }
      return res?.data;
    } catch (error) {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className=" lg:h-screen bg-gray-200/40 flex justify-center items-center mx-auto">
      <Card className="w-full lg:max-w-lg border border-black/30 shadow-md mx-auto">
        <CardHeader className=" border-b border-gray-500/40 pb-2">
          <CardTitle className="text-2xl text-centr">Login Account</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="identifier"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number or Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter mobile number or email"
                        {...field}
                      />
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
                    <div className="flex justify-between items-center cursor-pointer">
                      <FormLabel> Password</FormLabel>
                      <p className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                        Forgot your password?
                      </p>
                    </div>
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

              <Button type="submit" className="w-full">
                Login
              </Button>

              <div>
                <span className="text-slate-700 font-semibold">
                  Dont have an account ?{" "}
                </span>
                <Link to="/sign-up" className="text-blue-700 font-bold">
                  Sign Up
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

export default Login;
