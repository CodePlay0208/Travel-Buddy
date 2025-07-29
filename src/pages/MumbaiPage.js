import React from 'react';
import DestinationTemplate from '../components/DestinationTemplate';
import { destinationContent } from '../data/destinationContent';

const MumbaiPage = () => (
    <DestinationTemplate
        destination={destinationContent.mumbai}
        destinationName="mumbai"
    />
);

export default MumbaiPage;
