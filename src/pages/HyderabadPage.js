import React from 'react';
import DestinationTemplate from '../components/DestinationTemplate';
import { destinationContent } from '../data/destinationContent';

const HyderabadPage = () => (
    <DestinationTemplate
        destination={destinationContent.hyderabad}
        destinationName="hyderabad"
    />
);

export default HyderabadPage;
