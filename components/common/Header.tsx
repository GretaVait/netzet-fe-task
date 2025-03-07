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

      <Image
        src="/assets/decorations/wave-line-green.svg"
        fill
        alt="Green decoration"
        className="h-auto! static!"
      />
    </header>
  );
};

export default Header;
