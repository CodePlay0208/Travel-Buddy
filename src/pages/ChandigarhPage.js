import React from 'react';
import DestinationTemplate from '../components/DestinationTemplate';
import { destinationContent } from '../data/destinationContent';

const ChandigarhPage = () => (
    <DestinationTemplate
        destination={destinationContent.chandigarh}
        destinationName="chandigarh"
    />
);

export default ChandigarhPage;
