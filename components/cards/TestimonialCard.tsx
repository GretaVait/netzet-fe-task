// Base
import Image from "next/image";

// Packages
import parse from "html-react-parser";

// Components
import Gradient from "../utils/Gradient";

interface TestimonialCardProps {
  avatar: string;
  name: string;
  age: number;
  location: string;
  review: string;
}

const TestimonialCard = ({
  avatar,
  name,
  age,
  location,
  review
}: TestimonialCardProps) => {
  return (
    <div className="relative">
      <Gradient borderRadius={24} blur />

      <div className="bg-white p-6 rounded-3xl m-[1px]">
        <div className="flex items-center gap-x-[25px] mb-[25px]">
          <Image
            src={`/assets/users/${avatar}.png`}
            width={86}
            height={86}
            alt={`${name} user image`}
          />

          <div className="flex flex-col gap-y-1">
            <p className="font-extrabold">
              {name}, {age}
            </p>
            <p className="text-xs italic">{parse(location)}</p>

            <div className="flex gap-x-1">
              {[...Array(5)].map((_, index) => (
                <Image
                  src="/assets/icons/star.svg"
                  width={14}
                  height={14}
                  alt="Star icon"
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="text-sm font-medium">“{parse(review)}”</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
