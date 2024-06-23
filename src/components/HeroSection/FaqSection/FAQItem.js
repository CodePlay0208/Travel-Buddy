
import React, { useState } from 'react';
import './FaqItem.css';

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <h3 className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {faq.question}
      </h3>
      {isOpen && <p className="faq-answer">{faq.answer}</p>}
    </div>
  );
};

export default FAQItem;
