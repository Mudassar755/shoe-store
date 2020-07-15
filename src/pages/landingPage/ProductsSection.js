import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Container, Typography, Button } from '@material-ui/core';
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

}));

const ProductsSection = ({ products, getProduct }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className={classes.heading}>
                        <Typography variant="h4" gutterBottom>
                            Top Products
                        </Typography>
                    </div>
                </Grid>
                {products.map(product => (
                    <Grid item xs={6} md={2} sm={4} className={classes.gridItem}>

                        <div>
                            <Link to={`products/${product.title.toLowerCase()}`}>
                                <Paper className={classes.paper1} elevation={3} onClick ={() => getProduct(product)}>
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
                                    ${product.price}
                                </Typography>
                            </div>
                            {/* <Button onClick={() => addToCart(product)}>ADD To CART</Button> */}
                        </div>
                    </Grid>

                ))}
            </Grid>
        </div>
    )
}
const mapStateToProps = state => ({
    products: state.products.products
})
export default connect(mapStateToProps, {getProduct})(ProductsSection)
