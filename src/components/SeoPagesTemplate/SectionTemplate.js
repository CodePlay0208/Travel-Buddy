import React, { useState } from 'react';
import styled from 'styled-components';

// Custom SVG Icon Component
const CheckIcon = () => (
  <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M37.1651 18.4695V20.0029C37.163 23.5969 35.9992 27.094 33.8473 29.9726C31.6953 32.8512 28.6705 34.957 25.224 35.976C21.7774 36.9951 18.0938 36.8727 14.7225 35.6272C11.3512 34.3816 8.47282 32.0797 6.51666 29.0646C4.5605 26.0496 3.63138 22.483 3.86785 18.8967C4.10433 15.3105 5.49374 11.8967 7.82886 9.16465C10.164 6.43257 13.3197 4.5285 16.8254 3.73644C20.331 2.94438 23.9988 3.30676 27.2817 4.76953" stroke="#65B599" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M37.165 6.6665L20.4984 23.3498L15.4984 18.3498" stroke="#65B599" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Styled Components
const Container = styled.div`
  max-width: 1420px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Montserrat', Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

// Regular Section styling
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 100%;
  max-width: 1419px;
  margin-bottom: 40px;
`;

// Background Image Section styling
const BackgroundSection = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 60px;
  gap: 12px;
  isolation: isolate;
  width: 100%;
  max-width: 1419px;
  height: 342px;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid #000000;
  border-radius: 20px;
  position: relative;
  margin-bottom: 40px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    z-index: 0;
  }
`;

const BackgroundSectionContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 1299px;
`;

const BackgroundSectionHeading = styled.h1`
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  font-size: 62px;
  line-height: 120%;
  text-align: center;
  color: #8DD3BB;
  margin: 0;
  width: 100%;
  max-width: 1297px;
  min-height: 74px;
  z-index: 1;
`;

const BackgroundSectionParagraph = styled.p`
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 150%;
  text-align: center;
  color: #FFFFFF;
  margin: 0;
  width: 100%;
  max-width: 1299px;
  min-height: 96px;
  z-index: 2;
`;

const SectionHeadingContainer = styled.div`
  width: 100%;
  max-width: 1014px;
  min-height: 67px;
`;

const SectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 100%;
  max-width: 1419px;
`;

const SectionParagraphContainer = styled.div`
  width: 100%;
  max-width: 1419px;
  min-height: 144px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 100%;
  min-height: 48px;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListItemContent = styled.div`
  flex: 1;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 150%;
  text-align: justify;
  color: #000000;
  min-height: 48px;
  display: flex;
  align-items: center;
`;

// Dynamic styled components for different HTML tags
const H1Item = styled.h1`
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  color: #252525;
  margin: 0;
  ${props => props.isHeading && `
    border-bottom: none;
  `}
`;

const H2Item = styled.h2`
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  color: #252525;
  margin: 0;
  ${props => props.isHeading && `
    border-bottom: none;
  `}
`;

const H3Item = styled.h3`
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  color: #252525;
  margin: 0;
  ${props => props.isHeading && `
    border-bottom: none;
  `}
`;

const H4Item = styled.h4`
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  color: #252525;
  margin: 0;
  ${props => props.isHeading && `
    border-bottom: none;
  `}
`;

const PItem = styled.p`
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 150%;
  text-align: justify;
  color: #000000;
  margin: 0;
  width: 100%;
`;

const DivItem = styled.div`
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 150%;
  text-align: justify;
  color: #000000;
  margin: 0;
  width: 100%;
`;

// FAQ Accordion Styles
const FAQSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 100%;
  max-width: 1420px;
`;

const FAQHeading = styled.h1`
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  color: #252525;
  margin: 0;
  width: 100%;
  max-width: 832px;
`;

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 100%;
`;

const AccordionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 0px;
  width: 100%;
  background: ${props => props.isOpen ? '#8DD3BB' : 'transparent'};
  border-radius: 20px;
  overflow: hidden;
`;

const AccordionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px;
  gap: 10px;
  width: 100%;
  min-height: 128px;
  background: #FFFFFF;
  box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-2px);
    transition: transform 0.2s ease;
  }
`;

const QuestionText = styled.div`
  flex: 1;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 500;
  font-size: 32px;
  line-height: 150%;
  text-align: justify;
  color: #000000;
`;

const AccordionIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #000000;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.3s ease;
  
  &::before {
    content: '▼';
  }
`;

const AccordionContent = styled.div`
  width: 100%;
  max-height: ${props => props.isOpen ? '400px' : '0'};
  overflow: hidden;
  transition: max-height 0.4s ease;
`;

const AccordionAnswer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px;
  gap: 10px;
  width: 100%;
  min-height: 320px;
  border-radius: 0px 0px 24px 24px;
  box-sizing: border-box;
  
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 500;
  font-size: 32px;
  line-height: 150%;
  text-align: justify;
  color: #FFFFFF;
`;

const SectionTemplate = () => {
    const [openFAQs, setOpenFAQs] = useState(new Set());

    const sections = [
        {
            heading: {h1: "Explore Goa with Our Holiday Packages"},
            paragraph: {p: "Goa is more than just beaches, it's a journey through culture, cuisine, and coastlines. Our holiday packages in Goa cover top destinations such as:"},
            list: [
                "Baga Beach: Nightlife, water sports, and beach shacks",
                "Calangute & Anjuna: Local markets and lively scenes",
                "Palolem & Colva: Calm waters, clean sands, perfect for quiet stays",
                "Old Goa: Visit Basilica of Bom Jesus, Se Cathedral, and Church of St. Francis of Assisi",
                "Fort Aguada: panoramic sea views and Portuguese history"
            ]
        },
        {
            heading: {h2: "Honeymoon & Family-Friendly Goa Packages"},
            paragraph: {p: "For couples, our Goa honeymoon packages offer romantic moments like sunset cruises on the Mandovi River, beachside stays in Morjim, and candlelit dinners by the sea. For families, enjoy Dudhsagar Waterfalls, Butterfly Beach, and the Bhagwan Mahavir Wildlife Sanctuary."}
        },
        {
            heading: "Culture, Cuisine & Hidden Corners",
            paragraph: "Beyond the beaches, Goa's heart beats in its traditions. Experience festivals, night markets, the Latin Quarter of Fontainhas, and authentic Goan cuisine such as prawn balchão, fish curry rice, and bebinca."
        },
        {
            // Background image section example
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

    // Function to render content based on HTML tag or plain string
    const renderContent = (content, isHeading = false) => {
        if (typeof content === 'string') {
            return isHeading ? 
                <H2Item isHeading={isHeading}>{content}</H2Item> : 
                <PItem>{content}</PItem>;
        }

        const tag = Object.keys(content)[0];
        const text = content[tag];

        switch(tag) {
            case 'h1':
                return <H1Item isHeading={isHeading}>{text}</H1Item>;
            case 'h2':
                return <H2Item isHeading={isHeading}>{text}</H2Item>;
            case 'h3':
                return <H3Item isHeading={isHeading}>{text}</H3Item>;
            case 'h4':
                return <H4Item isHeading={isHeading}>{text}</H4Item>;
            case 'p':
                return <PItem>{text}</PItem>;
            case 'div':
                return <DivItem>{text}</DivItem>;
            default:
                return <PItem>{text}</PItem>;
        }
    };

    const toggleFAQ = (index) => {
        setOpenFAQs(prevOpenFAQs => {
            const newOpenFAQs = new Set(prevOpenFAQs);
            if (newOpenFAQs.has(index)) {
                newOpenFAQs.delete(index);
            } else {
                newOpenFAQs.add(index);
            }
            return newOpenFAQs;
        });
    };

    return (
        <Container>
            {/* Render Sections */}
            {sections.map((section, index) => {
                // Check if section has background image
                if (section.backgroundImage) {
                    return (
                        <BackgroundSection key={index} backgroundImage={section.backgroundImage}>
                            <BackgroundSectionContent>
                                <BackgroundSectionHeading>
                                    {typeof section.heading === 'string' ? section.heading : section.heading[Object.keys(section.heading)[0]]}
                                </BackgroundSectionHeading>
                                <BackgroundSectionParagraph>
                                    {typeof section.paragraph === 'string' ? section.paragraph : section.paragraph[Object.keys(section.paragraph)[0]]}
                                </BackgroundSectionParagraph>
                            </BackgroundSectionContent>
                        </BackgroundSection>
                    );
                }
                
                // Regular section
                return (
                    <Section key={index}>
                        <SectionHeadingContainer>
                            {renderContent(section.heading, true)}
                        </SectionHeadingContainer>
                        
                        <SectionContentContainer>
                            <SectionParagraphContainer>
                                {renderContent(section.paragraph, false)}
                            </SectionParagraphContainer>
                            
                            {section.list && (
                                <List>
                                    {section.list.map((item, itemIndex) => (
                                        <ListItem key={itemIndex}>
                                            <IconWrapper>
                                                <CheckIcon />
                                            </IconWrapper>
                                            <ListItemContent>
                                                {typeof item === 'string' ? item : renderContent(item)}
                                            </ListItemContent>
                                        </ListItem>
                                    ))}
                                </List>
                            )}
                        </SectionContentContainer>
                    </Section>
                );
            })}

            {/* FAQ Accordion Section */}
            <FAQSection>
                <FAQHeading>Frequently Asked Questions</FAQHeading>
                <AccordionContainer>
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} isOpen={openFAQs.has(index)}>
                            <AccordionHeader onClick={() => toggleFAQ(index)}>
                                <QuestionText>{faq.question}</QuestionText>
                                <AccordionIcon isOpen={openFAQs.has(index)} />
                            </AccordionHeader>
                            <AccordionContent isOpen={openFAQs.has(index)}>
                                <AccordionAnswer>
                                    {faq.answer}
                                </AccordionAnswer>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </AccordionContainer>
            </FAQSection>
        </Container>
    );
};

export default SectionTemplate;
