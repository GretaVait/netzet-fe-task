// Base
import Image from "next/image";

// Components
import Container from "@/components/app/Container";
import SummaryCard from "@/components/cards/summary/SummaryCard";

// Assets
import ProductivityGraph from "@/public/assets/photos/graph.png";
import ProductivityGraphMobile from "@/public/assets/photos/graph-mobile.png";

const Summary = () => {
  return (
    <section className="pt-10 pb-[60px]">
      <Container>
        <h1 className="text-3.5xl font-bold text-center mb-10 lg:text-4.5xl">
          Your Personal <br /> Procrastination Summary
        </h1>

        <div className="flex flex-col items-center gap-y-4 lg:gap-y-6">
          <div className="grid grid-cols-1 gap-4 max-w-[960px] lg:grid-cols-2">
            <SummaryCard
              title="Physical symptoms:"
              level="high"
              description="Can show up as feeling anxious, sad, or having big mood changes."
            />
            <SummaryCard
              title="Psychological symptoms:"
              level="moderate"
              description="Like having trouble sleeping, feeling tired all the time, or pain without a clear reason."
            />
            <SummaryCard
              title="Behavioral symptoms:"
              level="moderate"
              description="Might involve remembering bad things that happened, having bad dreams, or can't stop thinking about something bad."
            />
            <SummaryCard
              title="Impact on your life:"
              level="moderate"
              description="Having trouble trusting others, worrying they'll leave you, or finding it hard to get close to people and set limits."
            />
          </div>

          <div className="bg-turquoise-800 rounded-3xl py-10 px-4 lg:px-10 max-w-[640px]">
            <Image
              src={ProductivityGraph}
              width={560}
              height={365}
              alt="Productivity Graph"
              className="w-full hidden lg:block"
            />
            <Image
              src={ProductivityGraphMobile}
              width={310}
              height={272}
              alt="Productivity Graph"
              className="w-full lg:hidden"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Summary;
