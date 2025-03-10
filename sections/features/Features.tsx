// Base
import Image from "next/image";

// Components
import Container from "@/components/app/Container";
import FeatureItem from "@/components/utils/FeatureItem";

// Assets
import BrainImage from "@/public/assets/photos/brain.png";

const Features = () => {
  return (
    <section className="py-[60px] lg:pt-0 lg:-mt-[142px]">
      <Container>
        <h1 className="text-3.5xl font-bold text-center mb-[60px] lg:text-4.5xl lg:mb-20 lg:max-w-[508px] lg:mx-auto">
          Your Procrastination plan will help you:
        </h1>

        <div className="flex flex-col gap-y-10 items-center justify-between lg:flex-row lg:max-w-[964px] lg:mx-auto">
          <Image
            src={BrainImage}
            width={248}
            height={217}
            placeholder="blur"
            alt="Brain"
            className="order-2 lg:w-[310px] lg:h-[271px]"
          />

          <div className="flex flex-wrap gap-y-10 lg:gap-[60px] lg:max-w-[560px] lg:order-2">
            <FeatureItem
              icon="notes"
              description="Keep your <b>motivation up</b> by having daily reports of your progress and achievements"
              className="lg:max-w-[210px]"
            />
            <FeatureItem
              icon="hourglass"
              description="Learn new techniques to improve your <b>concentration, effectively handle time</b>, and establish <b>positive daily routines</b>."
              className="lg:max-w-[246px]"
            />
            <FeatureItem
              icon="guide"
              description="Build <b>new habits</b> with our prepared guides"
              className="lg:max-w-[210px]"
            />
            <FeatureItem
              icon="clipboard"
              description="Have an action plan to <b>break your procrastination cycle</b> and manage procrastination"
              className="lg:max-w-[290px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
