// Components
import Header from "@/components/common/Header";

// Sections
import Timer from "@/sections/timer/Timer";
import Summary from "@/sections/summary/Summary";
import Plans from "@/sections/plans/Plans";
import Benefits from "@/sections/benefits/Benefits";
import Results from "@/sections/results/Results";
import Features from "@/sections/features/Features";
import Testimonials from "@/sections/testimonials/Testimonials";
import OurPromise from "@/sections/our-promise/OurPromise";
import FAQ from "@/sections/faq/FAQ";

export default function Home() {
  return (
    <div>
      <Timer />

      <Header />

      <main>
        <Summary />

        <Plans />

        <Benefits />

        <Results />

        <Features />

        <Testimonials />

        <Plans />

        <OurPromise />

        <FAQ />
      </main>
    </div>
  );
}
