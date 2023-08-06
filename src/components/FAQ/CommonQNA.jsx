import { useEffect, useState } from "react";
import AnimatedSection from "../AOS-Animate/AnimatedSection";

const CommonQNA = () => {
  const [sampleQuestion, setSampleQuestion] = useState([]);

  useEffect(() => {
    fetch("/FAQ.json")
      .then((res) => res.json())
      .then((data) => setSampleQuestion(data));
  }, []);

  return (
    <div className="mb-8 px-4">
      <AnimatedSection>
        <div className="text-center my-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Some of your <br />
            <span className="text-3xl text-gradient">Common askings</span>
          </h2>
          <h4 className="mb-16 text-justify">
            Welcome to our FAQ section!
            <br /> We understand that you may have questions about our wonderful
            world of toy dolls. We have gathered some of the most common
            inquiries right here to provide you with quick and informative
            answers. Whether you are curious about the types of dolls we offer,
            safety guidelines, customization options, or anything else, you will
            find the information you need to make the most of your doll-shopping
            experience. If you do not see your question listed, do not hesitate
            to reach out to our friendly customer support team. Lets dive in and
            explore the exciting world of dolls together!
            <br /> <br /> Feel free to personalize and adapt this introductory
            text to match the tone and style of your website.
          </h4>
        </div>
      </AnimatedSection>

      {/* Q&A part */}
      {sampleQuestion.map(({ id, question, answer }) => (
        <AnimatedSection key={id}>
          <div className="border border-slate-200 rounded-md p-4 mb-8 md:mb-12">
            <h3 className="text-xl font-bold mb-4 border-b-2 pb-3 border-slate-100">
              {question}
            </h3>
            <p className="px-2 sm:px-8 text-justify">{answer}</p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default CommonQNA;
