import React from 'react';
import DestinationTemplate from '../components/DestinationTemplate';
import { destinationContent } from '../data/destinationContent';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const NagpurPage = () => (
    <>
        <Navbar />
        <DestinationTemplate
            destination={destinationContent.nagpur}
            destinationName="nagpur"
        />
        <Footer />
    </>
);

export default NagpurPage;
