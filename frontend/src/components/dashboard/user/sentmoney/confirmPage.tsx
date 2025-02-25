import { CheckCircle2 } from "lucide-react";

const ConfirmPage = ({ data }: any) => {
  return (
    <div>
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <CheckCircle2 className="h-16 w-16 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-medium">Transaction Successful!</h3>
          <p className="text-sm text-muted-foreground">
            You have sent ৳{data.amount} {data.recipient}
          </p>
        </div>
        <div className="rounded-lg bg-muted p-3 text-left">
          <div className="flex justify-between text-sm">
            <span>Transaction ID:</span>
            <span className="font-medium">
              TR{Math.floor(Math.random() * 1000000)}
            </span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>Date & Time:</span>
            <span className="font-medium">{new Date().toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>Fee:</span>
            <span className="font-medium">৳66</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPage;
