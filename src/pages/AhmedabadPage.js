import React from 'react';
import DestinationTemplate from '../components/DestinationTemplate';
import { destinationContent } from '../data/destinationContent';

const AhmedabadPage = () => (
    <DestinationTemplate
        destination={destinationContent.ahmedabad}
        destinationName="ahmedabad"
    />
);

export default AhmedabadPage;
