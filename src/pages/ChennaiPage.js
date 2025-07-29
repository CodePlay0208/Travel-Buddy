import React from 'react';
import DestinationTemplate from '../components/DestinationTemplate';
import { destinationContent } from '../data/destinationContent';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const ChennaiPage = () => (
    <>
        <Navbar />
        <DestinationTemplate
            destination={destinationContent.chennai}
            destinationName="chennai"
        />
        <Footer />
    </>
);

export default ChennaiPage;
