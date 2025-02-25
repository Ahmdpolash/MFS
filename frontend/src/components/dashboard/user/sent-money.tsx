import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";


export const SendMoney = ({ handleSubmit, data, setData }: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="recipient">Recipient Phone Number</Label>
        <Input
          id="recipient"
          name="recipient"
          placeholder="01XXXXXXXXX"
          value={data?.recipient}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="amount">Amount (৳)</Label>
        <Input
          id="amount"
          name="amount"
          type="number"
          placeholder="Enter amount"
          min="50"
          value={data?.amount}
          onChange={handleChange}
          required
        />
        <p className="text-xs text-muted-foreground">Minimum amount: ৳50</p>
      </div>
      <Button type="submit" className="w-full">
        Continue <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
};
