// Components
import ReceiptItem from "./elements/ReceiptItem";

// Interfaces
import { PlanData } from "@/interfaces/PlanData";

interface OrderSummaryProps {
  plan: PlanData;
}

const OrderSummary = ({ plan }: OrderSummaryProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

      <div className="flex flex-col gap-y-4 border border-turquoise-200 rounded-2xl p-4">
        <ReceiptItem
          variant="regular"
          label="Monthly Plan"
          value={`$${plan.price.regular}`}
        />

        <div className="bg-turquoise-200 w-full h-[1px]" />

        <ReceiptItem
          variant="discount"
          label={`Discount (${
            100 - Math.round((100 * plan.price.discounted) / plan.price.regular)
          }%)`}
          value={`$${plan.price.regular - plan.price.discounted}`}
        />

        <div className="bg-turquoise-200 w-full h-[1px]" />

        <ReceiptItem
          variant="total"
          label="Total"
          value={`$${plan.price.discounted}`}
        />
      </div>
    </div>
  );
};

export default OrderSummary;
