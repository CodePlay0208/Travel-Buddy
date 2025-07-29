import React from 'react';
import DestinationTemplate from '../components/DestinationTemplate';
import { destinationContent } from '../data/destinationContent';

const NagpurPage = () => (
    <DestinationTemplate
        destination={destinationContent.nagpur}
        destinationName="nagpur"
    />
);

export default NagpurPage;
