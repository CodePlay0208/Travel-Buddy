import React from 'react';
import DestinationTemplate from '../components/DestinationTemplate';
import { destinationContent } from '../data/destinationContent';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const ShimlaPage = () => (
    <>
        <Navbar />
        <DestinationTemplate
            destination={destinationContent.shimla}
            destinationName="shimla"
        />
        <Footer />
    </>
);

export default ShimlaPage;
