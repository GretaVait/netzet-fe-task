// Base
import Image from "next/image";

// Components
import Container from "@/components/app/Container";
import Gradient from "@/components/utils/Gradient";

const OurPromise = () => {
  return (
    <section className="py-[60px] lg:py-20 lg:max-w-[794px] lg:mx-auto">
      <Container>
        <div className="relative rounded-[40px] p-0.5">
          <Gradient borderRadius={40} />

          <div className="bg-white rounded-[40px] py-10 px-6 lg:px-14">
            <h3 className="text-2.5xl mb-6 text-center font-bold lg:text-4xl">
              Our promise
            </h3>

            <div className="flex flex-col gap-y-6 lg:text-lg">
              <p>
                &quot;We know how you feel. You&apos;re constantly fighting
                procrastination, and it seems like there&apos;s no way to win.
                Sometimes you see a glimmer of hope, only to fall back into the
                same old patterns.
              </p>
              <p>
                At first you think that missing a deadline or an overdue bill is
                the worst that could happen. But then you realize that those are
                just the beginning.
              </p>
              <p>
                <b>Unsuccessful relationships, unrealized aspirations</b>, and{" "}
                <b>poor mental wellbeing</b> that seems to be spiraling out of
                control - these are the real consequences of procrastination.
              </p>
              <p>
                Having helped thousands of procrastinators we&apos;ve learned
                that the procrastinator&apos;s problems run deep and overcoming
                procrastination is not merely just a matter of &quot;getting
                your act together&quot; and &quot;sticking to it&quot;.
              </p>
              <p>
                <b>
                  There&apos;s a reason why you procrastinate, and understanding
                  that reason is the key to success.
                </b>
              </p>
              <p>
                That&apos;s why there&apos;s no one-size-fits-all solution to
                procrastination. You need to find the right strategy for you -
                and that&apos;s where we come in.
              </p>
              <p>
                Together,{" "}
                <b>
                  we&apos;ll help you find the root cause of your
                  procrastination
                </b>{" "}
                and design a personalized plan to overcome it based on the
                latest psychological research.
              </p>
              <p>
                We have helped countless people to feel more in control, more
                productive, and more confident and we know we can do the same
                for you!
              </p>
            </div>

            <div className="bg-[url(/assets/decorations/wave-line-white-gradient-sm.svg)] bg-no-repeat bg-cover h-26 -mx-6 mb-6 max-[425px]:h-14 md:h-35 lg:bg-[url(/assets/decorations/wave-line-white-gradient.svg)] lg:h-[84px] lg:-mx-14 lg:mb-0"></div>

            <div className="flex items-center justify-center gap-x-8">
              <Image
                src="/assets/photos/head-of-science.png"
                width={94}
                height={94}
                alt="Head of science image"
              />

              <div>
                <p className="font-bold italic mb-4">Timothy Decker</p>

                <p className="text-sm">
                  Head of Science and <br /> Research at <b>ShiftMind</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurPromise;
