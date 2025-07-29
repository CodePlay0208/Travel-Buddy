import React from 'react';
import DestinationTemplate from '../components/DestinationTemplate';
import { destinationContent } from '../data/destinationContent';

const GoaPage = () => (
    <DestinationTemplate
        destination={destinationContent.goa}
        destinationName="goa"
    />
);

export default GoaPage;
