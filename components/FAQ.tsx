import React from 'react';

const faqs = [
  {
    question: "What kind of shoes are needed?",
    answer: "We are primarily looking for basketball shoes (new or lightly used) in sizes 7-15. These will be used for youth basketball programs in Juba."
  },
  {
    question: "How do I get the shoes to you?",
    answer: "Once you submit a pledge, we will email you the nearest drop-off location or shipping instructions depending on your city."
  },
  {
    question: "Can I donate other gear?",
    answer: "Yes! We also accept basketballs, jerseys, and athletic socks. Just mention them in the 'Donation Details' section of the form."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-orange-500 font-bold tracking-tighter text-3xl mb-12 uppercase">Common Questions</h2>
      <div className="grid gap-8">
        {faqs.map((faq, index) => (
          <div key={index} className="border-l-2 border-orange-600 pl-6 py-2">
            <h4 className="text-white font-bold text-lg mb-2">{faq.question}</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;