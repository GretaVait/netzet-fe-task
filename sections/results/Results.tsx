// Base
import Image from "next/image";

// Components
import Container from "@/components/app/Container";
import StatisticItem from "@/components/utils/StatisticItem";

// Assets
import UserBrainImage from "@/public/assets/photos/user-brain-bg.png";
import UserBrainImageMobile from "@/public/assets/photos/user-brain-sm.png";

const Results = () => {
  return (
    <section className="relative isolate">
      <Image
        src={UserBrainImage}
        width={1440}
        height={884}
        sizes="100vw"
        alt="User brain"
        className="w-full hidden lg:block"
      />
      <Image
        src={UserBrainImageMobile}
        width={390}
        height={426}
        sizes="100vw"
        alt="User brain"
        className="w-full lg:hidden"
      />

      <div className="bg-turquoise-700 absolute bottom-[48%] translate-y-1/2 left-0 z-[-1] w-full h-[90%] md:h-[95%] lg:hidden" />

      <Container>
        <div className="flex flex-col gap-y-10 pt-16 pb-20 lg:p-0 lg:absolute lg:top-[40%] lg:left-[60%] lg:-translate-y-1/2 lg:w-[400px] lg:ml-auto">
          <StatisticItem
            percentage={87}
            description="of our users reported experiencing long-term improvements in managing their procrastination symptoms"
          />
          <StatisticItem
            percentage={94}
            description="of users reported a more balanced and <b>positive mental state</b>"
          />
          <StatisticItem
            percentage={89}
            description="of users successfully aligned their behaviors and attitudes more closely with the <b>qualities they admire in others</b>"
          />
        </div>
      </Container>

      <div className="bg-[url(/assets/decorations/wave-line-green-bottom-sm.svg)] max-[425px]:h-16 bg-no-repeat bg-cover h-28 -mt-1 lg:hidden"></div>
    </section>
  );
};

export default Results;
