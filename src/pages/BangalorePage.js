import React from 'react';
import DestinationTemplate from '../components/DestinationTemplate';
import { destinationContent } from '../data/destinationContent';

const BangalorePage = () => (
    <DestinationTemplate
        destination={destinationContent.bangalore}
        destinationName="bangalore"
    />
);

export default BangalorePage;
