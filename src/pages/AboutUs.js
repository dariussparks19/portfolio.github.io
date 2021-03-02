import React from "react";
//import components
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";
//Animations

import {motion} from 'framer-motion';
import {pageAnimation} from "../animations";
import ScrollTop from '../components/ScrollTop';



const AboutUs = () => {
    return(
    <motion.div 
    exit="exit" 
    variants={pageAnimation} 
    initial="hidden" 
    animate="show"
    >
        <AboutSection />
        <ServicesSection />
        <FaqSection />
        <ScrollTop/>
    </motion.div>
    );
}

export default AboutUs;
