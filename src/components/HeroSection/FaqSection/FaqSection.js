
import React, { useState } from 'react';
import FAQItem from './FAQItem'; 
import './FaqSection.css';

const faqData = [
  {
    id: 1,
    question: 'How do I book a carpool ride?',
    answer: 'You can book a carpool ride on our mobile app, or on blablacar.com. Simply search for your destination, choose the date you want to travel and pick the carpool that suits you best! Some rides can be booked instantly, while other rides require manual approval from the driver. Either way, booking a carpool ride is fast, simple and easy.',
  },
  {
    id: 2,
    question: 'How do I publish a carpool ride?',
    answer: 'Offering a carpool ride on BlaBlaCar is easy. To publish your ride, use our mobile app or blablacar.com. Indicate your departure and arrival points, the date and time of your departure, how many passengers you can take and the price per seat. You’ll also need to choose how you want to accept bookings (either automatically or manually), and you have the option of adding any important details you think your passengers should know about. Then tap ‘Publish ride’ and you’re done!',
  },
  {
    id: 3,
    question: 'How do I cancel my carpool ride?',
    answer: 'If you have a change of plans, you can always cancel your carpool ride from the ‘Your rides’ section of our app. The sooner you cancel, the better. That way the driver has time to accept new passengers. The amount of your refund will depend on how far in advance you cancel. If you cancel more than 24 hours before departure, for example, you’ll receive a full refund, excluding the service fee.',
  },
  {
    id: 4,
    question: 'What are the benefits of travelling by carpool?',
    answer: 'There are multiple advantages to carpooling, over other means of transport. Travelling by carpool is usually more affordable, especially for longer distances. Carpooling is also more eco-friendly, as sharing a car means there will be fewer cars on the road, and therefore fewer emissions. Taking a carpool ride is also a safe way to travel in the current times. Because there are only a few people in a car, you have fewer points of contact and there’s less risk than other travel options.',
  },
  {
    id: 5,
    question: 'How much does a carpool ride cost?',
    answer: 'The costs of a carpool ride can vary greatly, and depend on factors like distance, time of departure, the demand of that ride and more. It is also up to the driver to decide how much to charge per seat, so it’s hard to put an exact price tag on a ride. Check out some of our top carpool destinations to get an idea of price, or start searching for your next carpool ride on blablacar.com.',
  },
  {
    id: 6,
    question: 'How do I start carpooling?',
    answer: 'Carpooling with BlaBlaCar is super easy, and free! Simply sign up for an account and tell us some basic details about yourself. Once you have a BlaBlaCar account, you can start booking or publishing rides directly on our app or website.',
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
      <a href="#" className="help-link">
        Read our Help Centre
      </a>
    </div>
  );
};

export default FAQSection;
