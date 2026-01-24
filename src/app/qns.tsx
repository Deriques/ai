'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "What is this platform used for?",
    answer: "It's an AI-powered design assistant that helps you generate, customize, and export creative assets in seconds—whether for personal projects, brand work, or commercial use."
  },
  {
    question: "What happens if I hit my free generation limit?",
    answer: "You can upgrade to a paid plan to continue generating content, or wait until your limit resets in the next billing cycle."
  },
  {
    question: "Do I need design experience to use it?",
    answer: "No design experience is necessary. Our platform is built to be intuitive and accessible for everyone, from beginners to professionals."
  },
  {
    question: "Can I collaborate with my team?",
    answer: "Yes, our platform supports team collaboration features that allow you to work together seamlessly on projects."
  },
  {
    question: "Is it really free to use?",
    answer: "Yes, we offer a free tier with generous limits. You can upgrade to premium plans for additional features and higher usage limits."
  }
];

export default function Qns() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-visible">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-0 w-25 h-90 ">
        <img 
          src="/images/img_rounded_rectangle.png" 
          alt="orange rect" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute left-0 top-175 w-40 h-50">
        <img 
          src="/images/Rounded_rectangle.png" 
          alt="white rect" 
          className="w-full h-full object-container sm-object-hidden"
        />
      </div>

      <div className="absolute right-0 bottom-75 w-20 h-75">
        <img 
          src="/images/Circle.png" 
          alt="cirlce" 
          className="w-full h-full object-cover"
        />
      </div>

      

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked<br />Questions
          </h1>
          <p className="text-gray-400 text-lg">
            Got questions? We've got answers. Find everything you need to know about using our<br />
            platform, plans, and features.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-gray-800 pb-4"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex justify-between items-center py-4 text-left hover:text-gray-300 transition-colors"
              >
                <span className="text-lg font-medium pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100 mb-2' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-400 leading-relaxed pb-2">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}