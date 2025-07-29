import React from 'react';
import DestinationTemplate from '../components/DestinationTemplate';
import { destinationContent } from '../data/destinationContent';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const BangalorePage = () => (
    <>
        <Navbar />
        <DestinationTemplate
            destination={destinationContent.bangalore}
            destinationName="bangalore"
        />
        <Footer />
    </>
);

export default BangalorePage;
