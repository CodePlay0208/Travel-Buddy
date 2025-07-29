import React from 'react';
import DestinationTemplate from '../components/DestinationTemplate';
import { destinationContent } from '../data/destinationContent';

const LucknowPage = () => (
    <DestinationTemplate
        destination={destinationContent.lucknow}
        destinationName="lucknow"
    />
);

export default LucknowPage;
