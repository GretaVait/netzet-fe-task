"use client";

// Base
import { useState } from "react";
import Image from "next/image";

// Components
import Container from "@/components/app/Container";
import PlanCard from "@/components/cards/plan/PlanCard";
import Button from "@/components/app/Button";
import PaymentPopup from "@/components/popups/payment-popup/PaymentPopup";

// Assets
import AcceptedCards from "@/public/assets/photos/cards.png";

// Data
import plans from "@/public/data/plans.json";

const Plan = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[1]);
  const [displayPayment, setDisplayPayment] = useState(false);

  return (
    <section>
      <div className="bg-[url(/assets/decorations/wave-line-green-cyan-sm.svg)] bg-no-repeat bg-cover h-12 -mb-1 lg:bg-[url(/assets/decorations/wave-line-green-cyan.svg)] lg:h-40"></div>
      <div className="relative bg-turquoise-850 py-10">
        <PaymentPopup
          active={displayPayment}
          setClose={() => {
            setDisplayPayment(false);
          }}
          plan={selectedPlan}
        />

        <Container>
          <h2 className="text-2.5xl text-center text-white font-bold mb-10 lg:text-4xl lg:mb-[54px]">
            Choose your plan
          </h2>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 max-w-[1164px] mb-[54px] mx-auto lg:items-end">
            {plans.map((plan, index) => (
              <PlanCard
                topChoice={plan.interval == 1}
                active={selectedPlan.interval == plan.interval}
                setActive={() => {
                  setSelectedPlan(plan);
                }}
                interval={plan.interval}
                price={plan.price}
                key={index}
              />
            ))}
          </div>

          <div className="flex flex-col gap-y-8 items-center text-center mx-auto max-w-[672px]">
            <div>
              <p className="text-sm text-white mb-4">
                By selecting a payment method, you agree to the Terms &amp;
                Conditions and Privacy Policy.
              </p>

              <Button
                variant="primary"
                onClick={() => {
                  setDisplayPayment(true);
                }}
              >
                Get my plan
              </Button>
            </div>

            <p className="text-xs text-white">
              You are enrolling in {selectedPlan.interval} Month Plan
              subscription to <br />
              https://shiftmind.app/ service with the discount price $
              {selectedPlan.price.discounted}. You agree that the plan you
              selected will automatically be extended at the full price for
              successive renewal periods and you will be charged $
              {selectedPlan.price.regular} every {selectedPlan.interval} months
              until you cancel the subscription. Payments will be charged from
              the card you specified here. You can cancel your subscription by
              contacting our customer support team via email at
              hello@shiftmind.app. Terms of Service the charge will appear on
              your bill as “ShiftMind”.
            </p>

            <div className="flex flex-col items-center gap-y-6 lg:flex-row lg:gap-x-10">
              <div className="flex items-center justify-between gap-x-4">
                <Image
                  src="/assets/svgs/money-back-guarantee.svg"
                  width={52}
                  height={52}
                  alt="Money back guarantee badge"
                />

                <p className="text-left leading-3">
                  <span className="text-lg text-white font-extrabold uppercase lg:text-xl">
                    Risk-free guarantee
                  </span>{" "}
                  <span className="text-xs text-white font-medium lg:text-sm">
                    cancel at any time without being charged the full price
                  </span>
                </p>
              </div>

              <Image
                src={AcceptedCards}
                width={263}
                height={38}
                sizes="400px"
                alt="Accepted cards"
              />
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-[url(/assets/decorations/wave-line-green-cyan-sm.svg)] bg-no-repeat bg-cover h-12 rotate-180 -mt-1 lg:bg-[url(/assets/decorations/wave-line-green-cyan.svg)] lg:h-40"></div>
    </section>
  );
};

export default Plan;
