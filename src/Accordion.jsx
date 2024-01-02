import React, { useState } from "react";
import { Card } from "./Card";

export const Accordion = () => {
  const [selectedId, setSelectedId] = useState(null);
  const faqs = [
    {
      title: "Where are these chairs assembled?",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
      title: "How long do I have to return my chair?",
      text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
      title: "Do you ship to countries outside the EU?",
      text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
  ];

  const handleSelectedId = (id) => {
    selectedId !== id ? setSelectedId(id) : setSelectedId(null);
  };

  const cards = faqs.map((faq, id) => {
    const props = {
      ...faq,
      id: id + 1,
      handleSelectedId,
      selectedId,
    };

    return <Card {...props} />;
  });

  return <div className="accordion">{cards}</div>;
};
