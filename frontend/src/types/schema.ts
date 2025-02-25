import * as z from "zod";

export const loginSchema = z.object({
  identifier: z.string().min(1, "Mobile number or email is required"),
  password: z
    .string()
    .length(5, "PIN must be exactly 5 digits")
    .regex(/^\d+$/, "PIN must contain only numbers"),
});

export const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  password: z
    .string()
    .length(5, "PIN must be exactly 5 digits")
    .regex(/^\d+$/, "PIN must contain only numbers"),
    number: z.string().regex(/^01\d{9}$/, "Invalid Bangladesh mobile number"),
  email: z.string().email("Invalid email address"),
  accountType: z.enum(["AGENT", "USER"]),
  nid: z.string().min(10, "NID must be at least 10 characters"),
});

export const cashoutSchema = z.object({
  number: z.string().regex(/^01\d{9}$/, "Invalid Bangladesh mobile number"),
  amount: z.string(),
  password: z
    .string()
    .length(5, "PIN must be exactly 5 digits")
    .regex(/^\d+$/, "PIN must contain only numbers"),
});
