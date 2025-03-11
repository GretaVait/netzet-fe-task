// Components
import Header from "@/components/common/Header";

// Sections
import Timer from "@/sections/timer/Timer";
import Summary from "@/sections/summary/Summary";
import Plan from "@/sections/plan/Plan";
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

        <Plan />

        <Benefits />

        <Results />

        <Features />

        <Testimonials />

        <Plan />

        <OurPromise />

        <FAQ />
      </main>
    </div>
  );
}
