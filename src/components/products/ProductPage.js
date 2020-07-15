import React from 'react';
import { Paper, Grid, Container, Button, Typography, Checkbox, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import shoe1 from '../../images/shoe1.png';
import headerImg from '../../images/products-header.png';
import shoe2 from '../../images/shoe2.png';
import shoe3 from '../../images/shoe3.png';
import shoe4 from '../../images/shoe4.png';
import shoe5 from '../../images/shoe5.png';

import ReactImageMagnify from 'react-image-magnify';
import ReactImageZoom from 'react-image-zoom';

import {connect} from 'react-redux'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
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
}));


const ProductPage = ({product, products}) => {
    const classes = useStyles();
    const props = { zoomWidth: 500, img: headerImg};
    return (
        <div>
            <Container>
                <Grid container spacing={3}>
                
                    <Grid item xs={10} sm={6} md={6} style={{backgroundColor: "#F4F4F4",height:"auto", margin:"5% 1%"}}>
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
                            height:660
                        },
                       
                          lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                    }} />
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}  style={{height:"330px", margin:"3.5% 0"}}>
                            <img src={shoe1} style={{height: "25%", backgroundColor:"#F4F4F4",marginTop:"5px"}} />
                            <img src={shoe1} style={{height: "25%",backgroundColor:"#F4F4F4",marginTop:"5px"}} />
                            <img src={shoe1} style={{height: "25%",backgroundColor:"#F4F4F4",marginTop:"5px"}} />
                            <img src={shoe1} style={{height: "25%",backgroundColor:"#F4F4F4",marginTop:"5px"}} />
                            
                            </Grid>
                        <Grid item xs={12} sm={4} md={4} style={{margin:"4% 1%"}}>
                            <Typography variant="h4" gutterBottom>Product Name</Typography>
                            <Typography variant="body1" gutterBottom>Price</Typography>
                            <Typography variant="body2" gutterBottom>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                            <Button variant="contained">ADD TO CART</Button>
                            <Button variant="contained">BUY NOW</Button>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12}>
                                <Typography variant="h4" gutterBottom> Related Products</Typography>
                            </Grid>
                            {products.map(product => (

                            <Grid item xs={12} md={2} sm={4} style={{ marginRight: "40px" }}>
                            <div>
                                <Paper className={classes.paper1} elevation={3}>
                                    <img src={product.imgSrc} alt="shoes" />
                                </Paper>
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
                            </div>
                        </Grid>
                            ))}
                       
                            
                    </Grid>
            </Container>
        </div>
    )
}

const mapStateToProps = state => ({
    product: state.products.product,
    products: state.products.products
})
export default connect(mapStateToProps, null)(ProductPage);
