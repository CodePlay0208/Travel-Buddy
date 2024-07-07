
import React, { useState } from 'react';
import FAQItem from './FAQItem'; 
import './FaqSection.css';

const faqData = [
  {
    id: 1,
    question: 'How do I book a trip?',
    answer: 'You can book a trip on our website travelbuddy.com. Simply search for your destination, choose the date you want to travel and pick the trip that suits you best! Your Trip can be confirmed as soon as the publisher manually approves it. This makes booking a trip fast, simple and easy.',
  },
  {
    id: 2,
    question: 'How do I publish a trip?',
    answer: 'Publising a trip on travelbuddy is easy. To publish your trip, use travelbuddy.com. Fill in the details required for publishing a trip in the Publish Trip section. You’ll also need to choose how you want to accept bookings (either automatically or manually), and you have the option of adding any important details you think your passengers should know about. Then tap ‘Publish trip’ and you’re done!',
  },
  {
    id: 3,
    question: 'How do I cancel my trip?',
    answer: 'If you have a change of plans, you can always cancel your trip from the ‘Your trips’ section of our app. The sooner you cancel, the better. That way the publisher has time to accept new members. The amount of your refund will depend on how far in advance you cancel. If you cancel more than 48 hours before departure, for example, you’ll receive a full refund, excluding the service fee.',
  },
  {
    id: 4,
    question: 'What are the benefits of finding a group through travel buddy',
    answer: 'There are multiple advantages to finding a group for a trip through travel buddy. We put in a lot of effort in ensuring that you find a safe group to travel with and also the ratings helps in deciding which group you want to travel with',
  },
  {
    id: 5,
    question: 'How much does booking a trip cost?',
    answer: "The cost of booking a trip depends on various factors such as total members and departure date. It also depends on the publisher how much he is willing to charge."
    },
  {
    id: 6,
    question: 'How can I find group for a trip?',
    answer: 'Finding a group with TravelBuddy is super easy, and free! Simply visit our homepage and enter the destination and start date and you will find a lot of trips that you can be part of.',
  },
];

const FAQSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFAQs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="faq-section">
      <input
        type="text"
        placeholder="Search FAQs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="faq-grid">
        {filteredFAQs.map((faq) => (
          <FAQItem key={faq.id} faq={faq} />
        ))}
      </div>
      <div className='contactUs'>
      <a href= "mailto: tusharmoudgil22@gmail.com" className="help-link">
        Contact Us
      </a>
      </div>
    </div>
  );
};

export default FAQSection;
