// Components
import Container from "@/components/app/Container";
import TestimonialCard from "@/components/cards/TestimonialCard";

const Testimonials = () => {
  return (
    <section className="py-10 lg:pt-[60px] lg:pb-20">
      <Container>
        <h1 className="text-3.5xl font-bold text-center mb-10 lg:text-4.5xl lg:mb-20">
          People love our plan
        </h1>

        <div className="flex flex-col gap-[19px] lg:flex-row lg:max-w-[972px] lg:mx-auto">
          <TestimonialCard
            avatar="user-1"
            name="Samantha C."
            age={38}
            location="Kansas City, Missouri"
            review="Years of procrastination left my life in shambles. I knew that something needed to change.
            <br />
            <br />
            ShiftMind helped me realize that all my life I’d been suffering from overwhelm anxiety and task aversion and helped me embrace my unique productivity style - Energy-Driven Achiever!"
          />
          <TestimonialCard
            avatar="user-2"
            name="Julia W."
            age={33}
            location="Albuquerque,<br /> New Mexico"
            review="When I found ShiftMind, I was instantly hooked by its CBT-based daily lessons that helped me reframe my thoughts and overcome negative self-talk (my #1 procrastination trigger).
            <br />
            <br />
            Plus, since the program made me realize that I’m a Deadline-Driven Performer, I've revamped my diet, started exercising regularly, and my body has transformed!"
          />
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
