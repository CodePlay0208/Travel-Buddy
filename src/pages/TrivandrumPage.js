import React from 'react';
import { destinationContent } from '../data/destinationContent';
import DestinationTemplate from '../components/DestinationTemplate';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const TrivandrumPage = () => (
    <>
        <Navbar />
        <DestinationTemplate
            destination={destinationContent.trivandrum}
            destinationName="trivandrum"
        />
        <Footer />
    </>
);

export default TrivandrumPage;
