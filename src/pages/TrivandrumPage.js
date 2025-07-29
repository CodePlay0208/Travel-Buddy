import React from 'react';
import { destinationContent } from '../data/destinationContent';
import DestinationTemplate from '../components/DestinationTemplate';

const TrivandrumPage = () => (
    <DestinationTemplate
        destination={destinationContent.trivandrum}
        destinationName="trivandrum"
    />
);

export default TrivandrumPage;
