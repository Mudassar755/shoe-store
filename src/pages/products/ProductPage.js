import React, {useContext} from 'react';
import { Grid, Container, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import shoe1 from '../../images/shoe1.png';
import headerImg from '../../images/products-header.png';

import ReactImageMagnify from 'react-image-magnify';
// import ReactImageZoom from 'react-image-zoom';

import {Link} from 'react-router-dom'

import {GlobalContext} from '../../context/GlobalState'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
        margin: "20px 0"
    },
    gridContainer: {
        marginTop: "10px",
        marginBottom: "10px"
    },

    paper1: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        backgroundColor: "#F4F4F4",
        width: "100%",
        height: "85%",
    },
    productImg: {
        height: "25%", 
        backgroundColor: "#F4F4F4", 
        marginTop: "5px"
    }
}));


const ProductPage = () => {
    const classes = useStyles();
    // const props = { zoomWidth: 500, img: headerImg };
    const {product, addToCart} = useContext(GlobalContext)
    return (
        <div className ={classes.root}>
            <Container>
                {product ? (

                
                <Grid container spacing={3}>
                    
                    <Grid item xs={9} sm={8} md={6} style={{ backgroundColor: "#F4F4F4", height: "auto", margin: "5% 1%" }}>
                        {/* <ReactImageZoom {...props} /> */}
                        {/* <img src={headerImg} /> */}
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: product ? product.imgSrc : headerImg,
                                sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px',
                                lensStyle: "box"
                            },
                            largeImage: {
                                src: product ? product.imgSrc : headerImg,
                                width: 768,
                                height: 660
                            },

                            lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                        }} />
                    </Grid>
                    <Grid item xs={2} sm={2} md={1} style={{ height: "330px", margin: "3.5% 0" }}>
                        <img src={product ? product.imgSrc : shoe1} className={classes.productImg} alt="reebol shoe"/>
                        <img src={product ? product.imgSrc : shoe1} className={classes.productImg} alt="reebol shoe"/>
                        <img src={product ? product.imgSrc : shoe1} className={classes.productImg} alt="reebol shoe"/>
                        <img src={product ? product.imgSrc : shoe1} className={classes.productImg} alt="reebol shoe"/>

                    </Grid>
                    <Grid item xs={12} sm={8} md={4} style={{ margin: "4% 1%" }}>
                        <Typography variant="h4" gutterBottom>Product Name</Typography>
                        <Typography variant="body1" gutterBottom><strong>${product ? product.price : '0'}</strong></Typography>
                        <Typography variant="body2" gutterBottom>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: "#131313",
                                color: "#EEE",
                                border: "1px solid #B7B7B7",
                                margin: "20px 10px"
                            }}
                            onClick={() => addToCart(product)}
                        >ADD TO CART</Button>
                        <Link to = "/cart" style={{textDecoration:"none"}}>
                        <Button
                            variant="contained"
                            onClick={() => addToCart(product)}
                            style={{
                                backgroundColor: "transparent",
                                color: "#131313",
                                border: "1px solid #131313",
                                margin: "20px 10px",
                                
                            }}
                        >BUY NOW</Button>
                        </Link>
                    </Grid>
                     </Grid>
                    ) : null}
                     {/* <Grid container spacing ={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="h4" gutterBottom> Related Products</Typography>
                    </Grid>
                    {allProducts.map(product => (

                        <Grid item xs={12} md={2} sm={4} style={{ marginRight: "40px" }} key={product.id}>
                            <div>
                            <Link to="/">
                                <Paper className={classes.paper1} elevation={3} onClick={() => getProduct(product)}>
                                    <img src={product.imgSrc} alt="shoes" />
                                </Paper>
                                </Link>
                                <div style={{ marginTop: "10px" }}>
                                    <Typography variant="body2" gutterBottom>
                                        {product.tag}
                                    </Typography>
                                    <Typography variant="subtitle2" gutterBottom>
                                        {product.title}
                                    </Typography>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        {product.price}
                                    </Typography>
                                </div>
                                <Button
                                   variant="contained"
                                    onClick={() => addToCart(product)}>ADD To CART</Button>
                            </div>
                        </Grid>
                    ))}


                </Grid> */}
            </Container>
        </div>
    )
}

export default (ProductPage);
