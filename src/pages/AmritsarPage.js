import React from 'react';
import DestinationTemplate from '../components/DestinationTemplate';
import { destinationContent } from '../data/destinationContent';

const AmritsarPage = () => (
    <DestinationTemplate
        destination={destinationContent.amritsar}
        destinationName="amritsar"
    />
);

export default AmritsarPage;
