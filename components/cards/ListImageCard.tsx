// Base
import Image, { StaticImageData } from "next/image";

// Components
import Gradient from "../utils/Gradient";

interface ListImageCardProps {
  image: {
    src: StaticImageData;
    alt: string;
  };
  title: string;
  list: string[];
  color: "pink" | "blue";
}

const colors = {
  pink: {
    text: "text-pink",
    backgroundColor: "bg-pink",
    marker: "marker:text-pink"
  },
  blue: {
    text: "text-sky",
    backgroundColor: "bg-sky",
    marker: "marker:text-sky"
  }
};

const ListImageCard = ({ image, title, list, color }: ListImageCardProps) => {
  return (
    <div className="relative w-full max-w-[410px]">
      <Gradient borderRadius={24} blur />

      <div className="bg-white rounded-3xl overflow-hidden m-0.5 h-[calc(100%-4px)]">
        <div className="relative w-full h-[293px]">
          <Image
            src={image.src}
            fill
            sizes="600px"
            placeholder="blur"
            alt={image.alt}
            className="object-cover"
          />
        </div>

        <div className="p-4 lg:p-6">
          <h3
            className={`text-lg uppercase font-bold mb-6 lg:text-2xl ${colors[color].text}`}
          >
            {title}
          </h3>

          <ul
            className={`flex flex-col gap-y-3 list-disc pl-5 ${colors[color].marker}`}
          >
            {list.map((item, index) => (
              <li key={index}>
                <p className="font-medium">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListImageCard;
