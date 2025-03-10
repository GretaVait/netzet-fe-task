// Base
import Image from "next/image";

// Packages
import classNames from "classnames";

// Components
import Steps from "@/components/utils/steps/Steps";
import OrderSummary from "./order-summary/OrderSummary";
import PaymentMethod from "./payment-method/PaymentMethod";

// Interfaces
import { PlanData } from "@/interfaces/PlanData";

interface PaymentPopupProps {
  active: boolean;
  setClose: () => void;
  plan: PlanData;
}

const PaymentPopup = ({ active, setClose, plan }: PaymentPopupProps) => {
  return (
    <div>
      <div
        className={classNames(
          "bg-black/60 w-full h-full fixed inset-0 transition-opacity z-[1]",
          {
            "opacity-100 pointer-events-auto": active,
            "opacity-0 pointer-events-none": !active
          }
        )}
      />
      <div
        className={classNames(
          "flex flex-col gap-y-[43px] fixed top-6 left-1/2 -translate-x-1/2 z-[1] w-[calc(100%-32px)] max-w-[600px] h-[calc(100%-48px)] bg-white border border-turquoise-700 rounded-3xl px-6 pt-6 pb-10 transition-opacity",
          {
            "opacity-100 pointer-events-auto": active,
            "opacity-0 pointer-events-none": !active
          }
        )}
      >
        <div>
          <div className="mb-1 text-right">
            <button className="cursor-pointer" onClick={setClose}>
              <Image
                src="/assets/icons/close.svg"
                width={20}
                height={20}
                alt="Close Icon"
              />
            </button>
          </div>

          <Steps />
        </div>

        <OrderSummary plan={plan} />

        <PaymentMethod />
      </div>
    </div>
  );
};

export default PaymentPopup;
