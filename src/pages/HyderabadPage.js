import React from 'react';
import DestinationTemplate from '../components/DestinationTemplate';
import { destinationContent } from '../data/destinationContent';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const HyderabadPage = () => (
    <>
        <Navbar />
        <DestinationTemplate
            destination={destinationContent.hyderabad}
            destinationName="hyderabad"
        />
        <Footer />
    </>
);

export default HyderabadPage;
