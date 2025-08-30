
import React from 'react';
import styled from 'styled-components';
import SectionBlock from './SectionBlock';
import BackgroundSectionBlock from './BackgroundSectionBlock';
import FAQAccordion from './FAQAccordion';

const Container = styled.div`
  max-width: 1420px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Montserrat', Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const sections = [
  {
    heading: { h1: "Explore Goa with Our Holiday Packages" },
    paragraph: { p: "Goa is more than just beaches, it's a journey through culture, cuisine, and coastlines. Our holiday packages in Goa cover top destinations such as:" },
    list: [
      "Baga Beach: Nightlife, water sports, and beach shacks",
      "Calangute & Anjuna: Local markets and lively scenes",
      "Palolem & Colva: Calm waters, clean sands, perfect for quiet stays",
      "Old Goa: Visit Basilica of Bom Jesus, Se Cathedral, and Church of St. Francis of Assisi",
      "Fort Aguada: panoramic sea views and Portuguese history"
    ]
  },
  {
    heading: { h2: "Honeymoon & Family-Friendly Goa Packages" },
    paragraph: { p: "For couples, our Goa honeymoon packages offer romantic moments like sunset cruises on the Mandovi River, beachside stays in Morjim, and candlelit dinners by the sea. For families, enjoy Dudhsagar Waterfalls, Butterfly Beach, and the Bhagwan Mahavir Wildlife Sanctuary." }
  },
  {
    heading: "Culture, Cuisine & Hidden Corners",
    paragraph: "Beyond the beaches, Goa's heart beats in its traditions. Experience festivals, night markets, the Latin Quarter of Fontainhas, and authentic Goan cuisine such as prawn balchão, fish curry rice, and bebinca."
  },
  {
    backgroundImage: "https://example.com/goa-beach.jpg",
    heading: "Book Your Goa Travel Package Today",
    paragraph: "Whether you're here for a weekend, honeymoon, or longer, our Goa packages give you a complete experience without the stress of planning."
  }
];

const faqs = [
  {
    question: "What is the average Goa trip cost for 3 to 5 days?",
    answer: "₹8,500 to ₹25,000 per person depending on hotel category and season."
  },
  {
    question: "Which are the best places to visit in Goa?",
    answer: "Baga Beach, Fort Aguada, Dudhsagar Waterfalls, Old Goa churches, Palolem, Spice Plantations, Fontainhas."
  },
  {
    question: "Is North Goa or South Goa better for tourists?",
    answer: "North Goa for nightlife and markets, South Goa for peace and nature. Many packages include both."
  },
  {
    question: "What is included in Goa tour packages?",
    answer: "Accommodation, breakfast, sightseeing tours, transfers, and local support."
  },
  {
    question: "When is the best time to visit Goa?",
    answer: "October to March, during pleasant weather and festive celebrations."
  }
];

const SectionTemplate = () => (
  <Container>
    {sections.map((section, index) => {
      if (section.backgroundImage) {
        return <BackgroundSectionBlock key={index} section={section} />;
      }
      return <SectionBlock key={index} section={section} />;
    })}
    <FAQAccordion faqs={faqs} />
  </Container>
);

export default SectionTemplate;
