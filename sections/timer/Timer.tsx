// Components
import Container from "@/components/app/Container";
import Countdown from "./elements/Countdown";
import Button from "@/components/app/Button";

const Timer = () => {
  return (
    <section className="bg-turquoise-800 py-4">
      <Container>
        <div className="flex items-center justify-center gap-x-6 lg:gap-x-9">
          <div className="flex items-center gap-x-2 lg:gap-x-4">
            <p className="text-white font-medium min-w-[74px] leading-5 lg:text-lg">
              The offer expires in
            </p>

            <Countdown />
          </div>

          <Button variant="secondary">Get my plan</Button>
        </div>
      </Container>
    </section>
  );
};

export default Timer;
