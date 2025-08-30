import React from 'react';
import DestinationTemplate from '../components/DestinationTemplate';
import { destinationContent } from '../data/destinationContent';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const GoaPage = () => (
    <>
        <Navbar isImageNavbar={true}/>
        <DestinationTemplate
            destination={destinationContent.goa}
            destinationName="goa"
        />
        <Footer />
    </>
);

export default GoaPage;
