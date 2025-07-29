import React from 'react';
import DestinationTemplate from '../components/DestinationTemplate';
import { destinationContent } from '../data/destinationContent';

const ShimlaPage = () => (
    <DestinationTemplate
        destination={destinationContent.shimla}
        destinationName="shimla"
    />
);

export default ShimlaPage;
