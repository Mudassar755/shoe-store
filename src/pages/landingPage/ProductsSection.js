import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {getProduct} from '../../Redux/Actions/productsActions'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
        margin: "20px 0"
    },
    gridItem: {
        marginRight: "40px",
        padding: "50px"
    },
    divider: {
        width:"90%", 
        height:"3px",
        backgroundColor:"#CECECE", 
        margin:"10px 5%"
       },
       paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        backgroundColor: "#F4F4F4",
        width: "100%",
        height: "85%",
    },

}));

const ProductsSection = ({ products, getProduct }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className={classes.heading}>
                        <Typography variant="h4" gutterBottom>
                            Top Products
                        </Typography>
                    </div>
                </Grid>
                {products.map(product => (
                    <Grid item xs={10} md={2} sm={4} className={classes.gridItem} key={product.id}>

                        <div>
                            <Link to={`products/${product.title.toLowerCase()}`}>
                                <Paper className={classes.paper} elevation={3} onClick ={() => getProduct(product)}>
                                    <img src={product.imgSrc} alt="shoes" style={{width:"100%"}}/>
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
                                    ${product.price}
                                </Typography>
                            </div>
                            {/* <Button onClick={() => addToCart(product)}>ADD To CART</Button> */}
                        </div>
                    </Grid>

                ))}
            </Grid>
            <div className={classes.divider}></div>
            </Container>
        </div>
    )
}
const mapStateToProps = state => ({
    products: state.products.products
})
export default connect(mapStateToProps, {getProduct})(ProductsSection)
