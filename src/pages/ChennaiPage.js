import React from 'react';
import DestinationTemplate from '../components/DestinationTemplate';
import { destinationContent } from '../data/destinationContent';

const ChennaiPage = () => (
    <DestinationTemplate
        destination={destinationContent.chennai}
        destinationName="chennai"
    />
);

export default ChennaiPage;
