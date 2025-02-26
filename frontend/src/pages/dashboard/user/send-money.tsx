import type React from "react";

import { useState } from "react";
import {  Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SendMoney } from "@/components/dashboard/user/sentmoney/sent-money";
import { TransactionForm } from "@/components/dashboard/user/sentmoney/transactionForm";
import ConfirmPage from "@/components/dashboard/user/sentmoney/confirmPage";

type formData = {
  recipient: string;
  amount: string;
  pin: string;
};

export function SentMoney() {
  const [step, setStep] = useState(1);

  const [data, setData] = useState<formData>({
    recipient: "",
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

  // const calculateFee = () => {
  //   const amountNum = Number.parseFloat(data.amount);
  //   return amountNum > 100 ? 5 : 0;
  // };

  // const fee = calculateFee();
  // const total = Number.parseFloat(data.amount) + fee;

  return (
    <div className="max-w-lg  lg:h-[calc(_100vh-_65px)] grid items-center  mx-auto">
      <div className="">
        <Card className="border border-slate-500/50">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Send className="h-5 w-5 text-primary" />
              <CardTitle>Send Money</CardTitle>
            </div>
            <CardDescription>Send money to another user</CardDescription>
          </CardHeader>

          <CardContent>
            {step === 1 && (
              <SendMoney
                data={data}
                setData={setData}
                handleSubmit={handleSubmit}
              />
            )}

            {step === 2 && (
              <TransactionForm
                data={data}
                handleSubmit={handleSubmit}
                setData={setData}
              />
            )}

            {step === 3 && success && <ConfirmPage data={data} />}
          </CardContent>

          {step === 3 && (
            <CardFooter>
              <Button 
                variant="outline"
                className="w-full cursor-pointer hover:bg-black hover:text-white border-black/60"
                onClick={() => {
                  setStep(1);
                  setData({ recipient: "", amount: "", pin: "" });
                  setSuccess(false);
                }}
              >
                Send Another Payment
              </Button>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  );
}
