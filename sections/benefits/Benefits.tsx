// Base
import Image from "next/image";

// Components
import Container from "@/components/app/Container";
import ListImageCard from "@/components/cards/ListImageCard";

// Assets
import UserBeforeImage from "@/public/assets/photos/user-before.png";
import UserAfterImage from "@/public/assets/photos/user-after.png";

const Benefits = () => {
  return (
    <section className="pt-16 pb-9 lg:pt-28 lg:pb-24">
      <Container>
        <div className="flex flex-col items-stretch mx-auto gap-y-6 max-w-[960px] lg:flex-row lg:gap-x-8">
          <ListImageCard
            image={{
              src: UserBeforeImage,
              alt: "User before using the app"
            }}
            title="Procrastination symptoms:"
            list={[
              "Time management difficulties",
              "Poor organizational skills",
              "Difficulty focusing",
              "Acting without thinking",
              "Restlessness"
            ]}
            color="pink"
          />

          <div className="flex items-center justify-center">
            <Image
              src="/assets/svgs/gradient-arrows.svg"
              width={53}
              height={60}
              alt="Gradient Arrow"
              className="rotate-90 lg:rotate-0 lg:w-20 lg:h-[86px]"
            />
          </div>

          <ListImageCard
            image={{
              src: UserAfterImage,
              alt: "User after using the app"
            }}
            title="Your goal:"
            list={[
              "Able to focus, minimal distraction",
              "Effective planning, punctuality",
              "Tidy spaces, structured routines",
              "Considerate actions, patience",
              "Calmness"
            ]}
            color="blue"
          />
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
