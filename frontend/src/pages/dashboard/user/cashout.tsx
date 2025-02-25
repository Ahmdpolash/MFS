import type React from "react";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CashoutStepOne } from "@/components/dashboard/user/cashout/CashoutStepOne";
import { CashoutStepTwo } from "@/components/dashboard/user/cashout/CashoutStepTwo";

type formData = {
  number: string;
  amount: string;
  pin: string;
};

export function Cashout() {
  const [step, setStep] = useState(1);

  const [data, setData] = useState<formData>({
    number: "",
    amount: "",
    pin: "",
  });

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(data);

    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setSuccess(true);
      setStep(3);
    }
  };

  const calculateFee = () => {
    const amountNum = Number.parseFloat(data.amount);
    return amountNum > 100 ? 5 : 0;
  };

  const fee = calculateFee();
  const total = Number.parseFloat(data.amount) + fee;

  return (
    <div className="max-w-lg  lg:h-[calc(_100vh-_65px)] grid items-center  mx-auto">
      <div className="">
        <Card className="border border-slate-500/50">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Send className="h-5 w-5 text-primary" />
              <CardTitle>Cashout</CardTitle>
            </div>
            <CardDescription>Withdraw cash from an agent</CardDescription>
          </CardHeader>

          <CardContent>
            {step === 1 && (
              <CashoutStepOne
                data={data}
                setData={setData}
                handleSubmit={handleSubmit}
              />
            )}

            {step === 2 && (
              <CashoutStepTwo
                data={data}
                handleSubmit={handleSubmit}
                setData={setData}
              />
            )}

            {step === 3 && success && (
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <CheckCircle2 className="h-16 w-16 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Cash Out Successful!</h3>
                  <p className="text-sm text-muted-foreground">
                    You have withdrawn ৳5 from agent 55
                  </p>
                </div>
                <div className="rounded-lg bg-muted p-3 text-left">
                  <div className="flex justify-between text-sm">
                    <span>Transaction ID:</span>
                    <span className="font-medium">
                      CO{Math.floor(Math.random() * 1000000)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span>Date & Time:</span>
                    <span className="font-medium">
                      {new Date().toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span>Fee (1.5%):</span>
                    <span className="font-medium">৳{fee.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          {step === 3 && (
            <CardFooter>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setStep(1);

                  setSuccess(false);
                }}
              >
                New Cash Out Request
              </Button>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  );
}
