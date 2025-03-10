// Base
import Image from "next/image";

// Components
import Container from "../app/Container";

const Header = () => {
  return (
    <header>
      <div className="bg-turquoise-700 py-6">
        <Container>
          <div className="flex justify-center">
            <Image
              src="/assets/logos/shift-mind-logo.svg"
              width={110}
              height={52}
              alt="Shift mind logo"
              priority
            />
          </div>
        </Container>
      </div>

      <div className="bg-[url(/assets/decorations/wave-line-green-sm.svg)] bg-no-repeat bg-cover h-[72px] -mt-1 lg:bg-[url(/assets/decorations/wave-line-green.svg)] lg:h-24"></div>
    </header>
  );
};

export default Header;
