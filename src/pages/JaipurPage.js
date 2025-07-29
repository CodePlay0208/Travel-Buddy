import React from 'react';
import DestinationTemplate from '../components/DestinationTemplate';
import { destinationContent } from '../data/destinationContent';

const JaipurPage = () => (
    <DestinationTemplate
        destination={destinationContent.jaipur}
        destinationName="jaipur"
    />
);

export default JaipurPage;
