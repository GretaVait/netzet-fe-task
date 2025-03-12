"use client";

// Base
import { useMemo } from "react";
import { useRouter } from "next/navigation";

// Packages
import { useTimer } from "react-timer-hook";

// Components
import Container from "@/components/app/Container";
import Countdown from "./elements/Countdown";
import Button from "@/components/app/Button";

const Timer = () => {
  const router = useRouter();

  const timestamp = useMemo(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600); // 10 minute timer

    return time;
  }, []);

  const { minutes, seconds } = useTimer({ expiryTimestamp: timestamp });

  return (
    <section className="bg-turquoise-800 py-4">
      <Container>
        <div className="flex items-center justify-center gap-x-6 lg:gap-x-9">
          <div className="flex items-center gap-x-2 lg:gap-x-4">
            <p className="text-white font-medium min-w-[74px] leading-5 lg:text-lg">
              The offer expires in
            </p>

            <Countdown minutes={minutes} seconds={seconds} />
          </div>

          <Button
            variant="secondary"
            onClick={() => {
              router.push("#plans");
            }}
          >
            Get my plan
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Timer;
