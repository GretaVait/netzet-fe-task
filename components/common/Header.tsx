// Base
import Image from "next/image";

// Components
import Container from "../app/Container";

const Header = () => {
  return (
    <header className="bg-turquoise-700 py-6 relative">
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

      <Image
        src="/assets/decorations/wave-line-green.svg"
        fill
        alt="Green decoration"
        className="h-auto! absolute bottom-2! left-0! top-auto! translate-y-full"
      />
    </header>
  );
};

export default Header;
