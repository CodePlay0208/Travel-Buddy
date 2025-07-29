import React from 'react';
import DestinationTemplate from '../components/DestinationTemplate';
import { destinationContent } from '../data/destinationContent';

const KolkataPage = () => (
    <DestinationTemplate
        destination={destinationContent.kolkata}
        destinationName="kolkata"
    />
);

export default KolkataPage;
