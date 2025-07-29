import React from 'react';
import DestinationTemplate from '../components/DestinationTemplate';
import { destinationContent } from '../data/destinationContent';

const PunePage = () => (
    <DestinationTemplate
        destination={destinationContent.pune}
        destinationName="pune"
    />
);

export default PunePage;
