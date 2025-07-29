import React from 'react';
import DestinationTemplate from '../components/DestinationTemplate';
import { destinationContent } from '../data/destinationContent';

const CochinPage = () => (
    <DestinationTemplate
        destination={destinationContent.cochin}
        destinationName="cochin"
    />
);

export default CochinPage;
