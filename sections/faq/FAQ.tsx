// Components
import Container from "@/components/app/Container";
import FAQCard from "./elements/FAQCard";

// Data
import faqData from "@/public/data/faq.json";

const FAQ = () => {
  return (
    <section>
      <div className="bg-[url(/assets/decorations/wave-line-green-top-sm.svg)] bg-no-repeat bg-cover h-34 -mb-1 max-[425px]:h-20 lg:bg-[url(/assets/decorations/wave-line-green-top.svg)] lg:h-44" />

      <div className="bg-turquoise-700 py-10 lg:pt-0 lg:pb-20">
        <Container>
          <h2 className="text-4.5xl font-bold text-white text-center mb-6">
            People often ask
          </h2>

          <div className="flex flex-col gap-y-4 lg:max-w-[964px] lg:mx-auto">
            {faqData.map((item, index) => (
              <FAQCard
                question={item.question}
                answer={item.answer}
                key={index}
              />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default FAQ;
