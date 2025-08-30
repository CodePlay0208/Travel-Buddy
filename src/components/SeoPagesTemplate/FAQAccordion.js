import React, { useState } from 'react';
import styled from 'styled-components';
import AccordionDownIcon from './AccordionDownIcon';
import AccordionUpIcon from './AccordionUpIcon';

const FAQSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 100%;
  margin: 0 0 60px 0; 
`;
const FAQHeading = styled.h1`
display: flex;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  font-size: 3.25rem;
  line-height: 120%;
  color: #252525;
  margin: 0;
  width: 100%;
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
  box-shadow: 2px 3px 15px 0px #00000040;

`;
const AccordionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
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
  transition: transform 0.3s ease;
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
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px;
  gap: 10px;
  width: 100%;
  border-radius: 0px 0px 24px 24px;
  box-sizing: border-box;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 500;
  font-size: 32px;
  line-height: 150%;
  text-align: justify;
  color: #FFFFFF;
`;

const FAQAccordion = ({ faqs }) => {
    const [openFAQs, setOpenFAQs] = useState(new Set());
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
        <FAQSection>
            <FAQHeading>Frequently Asked Questions</FAQHeading>
            <AccordionContainer>
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} isOpen={openFAQs.has(index)}>
                        <AccordionHeader onClick={() => toggleFAQ(index)}>
                            <QuestionText>{faq.question}</QuestionText>
                            <AccordionIcon>
                                {openFAQs.has(index) ? <AccordionUpIcon /> : <AccordionDownIcon />}
                            </AccordionIcon>
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
    );
};

export default FAQAccordion;
