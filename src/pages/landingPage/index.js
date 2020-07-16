import React from 'react';
import Header from './Header';
import ProductsSection from './ProductsSection';
import MiddleBanner from './MiddleBanner';
import TwoColumns from './TwoColumns';
import BottomSection from './BottomSection';


const LandingPage = () => {
    return (
            <div >
            <Header />
            <ProductsSection />
            <MiddleBanner />
            <TwoColumns />
            <BottomSection />
            </div>
    )
}

export default LandingPage
