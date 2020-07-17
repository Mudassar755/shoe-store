import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Paper,
    Grid,
    Container,
    Button,
    Typography,
} from '@material-ui/core';
import headerImg from '../../images/products-header.png';
import { Link, Outlet } from 'react-router-dom'

import { GlobalContext } from '../../context/GlobalState';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
        backgroundColor: "#FFF",
        marginBottom: "30px"
    },
    gridContainer: {
        marginTop: "10px",
        marginBottom: "10px"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        backgroundColor: "#FFF",
        position: "relative",
    },
    paperDiv: {
        border: "2px solid #DDDDDD",
        padding: "13px",
        borderRadius: "10px"
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

const Products = ({ products }) => {
    const classes = useStyles();
    // const [checked, setChecked] = useState(false);
    // const [formData, setFormData] = useState({
    //     checked: false,
    // });
    // const { checked } = formData
    // const handleChange = (event) => {
    //     setFormData({ ...formData, checked: !checked });
    //     // setChecked(event.target.checked);
    //     console.log("checked", checked)
    // };
    const {allProducts, addToCart, getProduct} = useContext(GlobalContext);
    return (
        <div className={classes.root}>
            {/* <Container className={classes.gridContainer}> */}
                <Grid container spacing={2} style={{ backgroundColor: "#F2BDB7", margin: "0 0" }}>
                    <Grid item xs={12} sm={10} md={6}>
                        <div style={{ margin: "14% 30%" }}>
                            <Typography variant="body2" gutterBottom>Products Header</Typography>
                            <Typography variant="h5" gutterBottom>Products Header</Typography>
                            <Button style={{ border: "1px solid black" }}>Shop Now</Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6}>
                        <img src={headerImg} alt="header" style={{width:"101%"}} />
                    </Grid>
                </Grid>

                {/*  show selected item*/}

                <Outlet />
                
                {/*  show selected item*/}

                <Container style={{margin:"2% 0"}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="h4" gutterBottom>Products Store</Typography>
                    </Grid>
                   
                    {/* <Grid item xs={2}>
                        <div className={classes.paper}>
                            <Typography variant="h6" gutterBottom>
                                Categories
                            </Typography>
                            <div>
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    defaultChecked
                                    color="default"
                                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                                />Mens
                            </div>
                            <div>
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    defaultChecked
                                    color="default"
                                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                                />Womens
                            </div>
                            <div>
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    defaultChecked
                                    color="default"
                                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                                />Kids
                            </div>
                            <Divider />
                            <Typography variant="h6" gutterBottom>
                                Companies
                            </Typography>
                            <div>
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    defaultChecked
                                    color="default"
                                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                                />NIKE
                            </div>
                            <div>
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    defaultChecked
                                    color="default"
                                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                                />ADIDAS
                            </div>
                            <div>
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    defaultChecked
                                    color="default"
                                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                                />PUMA
                            </div>
                            <div>
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    defaultChecked
                                    color="default"
                                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                                />REEBOK
                            </div>

                            <Divider />
                            
                        </div>

                    </Grid> */}
                    {allProducts.map(product => (
                        <Grid item xs={10} md={2} sm={4} style={{ marginRight: "40px", width:"100%" }} key={product.id}>

                            <div>
                                <Link to={`${product.title.toLowerCase()}`}>
                                    <Paper className={classes.paper1} elevation={3} onClick={() => getProduct(product)}>
                                        <img src={product.imgSrc} alt="shoes" style={{width:"100%"}} />
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
                                <Button
                                   variant="contained"
                                    onClick={() => addToCart(product)}>ADD To CART</Button>
                            </div>
                        </Grid>
                    ))}

                    {allProducts.map(product => (
                        <Grid item xs={10} md={2} sm={4} style={{ marginRight: "40px" }} key={product.id}>

                            <div>
                                <Link to={`${product.title.toLowerCase()}`}>
                                    <Paper className={classes.paper1} elevation={3} onClick={() => getProduct(product)}>
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
                                <Button
                                   variant="contained"
                                    onClick={() => addToCart(product)}>ADD To CART</Button>
                            </div>
                        </Grid>
                    ))}

                    <Grid xs={12} sm={12} md={12} style={{ textAlign: "center" }}>
                        <Button variant="contained"
                            style={{
                                backgroundColor: "transparent",
                                color: "#131313",
                                border: "1px solid #131313",
                                marginTop: "50px"
                            }}>Load More</Button>
                    </Grid>

                </Grid>
                </Container>
            {/* </Container> */}
        </div>
    )
}

export default Products
