import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export const CashoutStepTwo = ({ handleSubmit, data, setData }: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="rounded-lg bg-muted p-3">
          <div className="flex justify-between text-sm">
            <span>Recipient:</span>
            <span className="font-medium">{data?.recipient}</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>Amount:</span>
            <span className="font-medium">৳5</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>Fee:</span>
            <span className="font-medium">৳5</span>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between font-medium">
            <span>Total:</span>
            <span>৳555</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="pin">Enter PIN</Label>
          <Input
            id="pin"
            name="pin"
            type="password"
            placeholder="Enter your 5-digit PIN"
            maxLength={5}
            value={data.pin}
            onChange={handleChange}
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Confirm & Send
        </Button>
      </form>
      ;
    </>
  );
};
