import React from 'react';
import { Paper, Grid, Container, Typography, Button } from '@material-ui/core';
import Header from './Header';
import ProductsSection from './ProductsSection';
import MiddleBanner from './MiddleBanner';
import TwoColumns from './TwoColumns';
import BottomSection from './BottomSection'

const LandingPage = () => {
    return (
        <Container>
            <Header />
            <ProductsSection />
            <MiddleBanner />
            <TwoColumns />
            <BottomSection />
        </Container>
    )
}

export default LandingPage
