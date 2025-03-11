"use client";

// Base
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Packages
import classNames from "classnames";

// Components
import Gradient from "@/components/utils/Gradient";

interface FAQCardProps {
  question: string;
  answer: string;
}

const FAQCard = ({ question, answer }: FAQCardProps) => {
  const [accordionState, setAccordionState] = useState(false);
  const [height, setHeight] = useState(0);

  const accordionRef = useRef(null);

  useEffect(() => {
    if (accordionRef.current && accordionState) {
      setHeight(accordionRef.current["scrollHeight"]);
    } else {
      setHeight(0);
    }
  }, [accordionState, accordionRef]);

  const toggleAccordion = (state: boolean) => {
    setAccordionState(state);
  };

  return (
    <div className="relative isolate p-0.5">
      <Gradient
        borderRadius={24}
        blur
        className={classNames("transition-opacity", {
          "opacity-100": accordionState,
          "opacity-0": !accordionState
        })}
      />

      <div className="bg-white rounded-3xl">
        <button
          className="flex items-center justify-between gap-x-6 w-full px-6 h-[74px]"
          onClick={() => toggleAccordion(!accordionState)}
        >
          <p className="font-medium text-left leading-5">{question}</p>

          <div
            className={classNames(
              "rounded-lg size-6 min-w-6 flex items-center justify-center transition-colors",
              {
                "bg-cyan": accordionState,
                "bg-turquoise-100": !accordionState
              }
            )}
          >
            <Image
              src="/assets/icons/arrow.svg"
              width={15}
              height={10}
              alt="Arrow icon"
              className={classNames("transition-transform", {
                "rotate-180": accordionState,
                "rotate-0": !accordionState
              })}
            />
          </div>
        </button>

        <div
          className="h-0 transition-all overflow-hidden"
          style={{ height: height + "px" }}
          ref={accordionRef}
        >
          <p className="text-sm pb-6 px-6">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQCard;
