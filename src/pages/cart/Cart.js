import React from 'react';
import {
    Paper,
    Grid,
    Container,
    Button,
    Typography,
    Checkbox,
    Divider
} from '@material-ui/core';
import shoe1 from '../../images/shoe1.png';
import shoe2 from '../../images/shoe2.png';
import shoe3 from '../../images/shoe3.png';
import shoe4 from '../../images/shoe4.png';
import shoe5 from '../../images/shoe5.png';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { connect } from 'react-redux';
import { deleteProduct, increment, decrement, clearCart } from '../../Redux/Actions/productsActions'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "20px 0"
    },
    empty:{
        textAlign: "center",
        margin:"50px"
    }
}));

const Cart = ({ cartItems, deleteProduct, increment, decrement, clearCart }) => {
    const classes = useStyles();
    const reducerMethod = (accumulator, item) => {
        return accumulator + item;
    };

    let cartTotal = []

    cartItems.map(item => cartTotal.push(item.qty * item.price))
    console.log("cartttttt", cartTotal)

    const total = cartTotal.reduce(reducerMethod, 0)
    console.log("total", cartItems)
    return (
        <div>
            {cartItems.length ? (
                 <Container className={classes.root}>
                 <Grid container spacing={3}>
                     <Grid item xs={12} sm={12} md={12}>
                         <Typography variant="h5" gutterBottom>Cart Items</Typography>
                     </Grid>
                     <Grid item xs={6} sm={6} md={6}>
                         <Typography variant="body1" gutterBottom>Products</Typography>
                     </Grid>
                     <Grid item xs={2} sm={2} md={2}>
                         <Typography variant="body1" gutterBottom>Quantity</Typography>
                     </Grid>
                     <Grid item xs={2} sm={2} md={2}>
                         <Typography variant="body1" gutterBottom>Remove</Typography>
                     </Grid>
                     <Grid item xs={2} sm={2} md={2}>
                         <Typography variant="body1" gutterBottom>Amount</Typography>
                     </Grid>
                     <div style={{ width: "100%", height: "3px", backgroundColor: "#F4F4F4", margin: "5px 0" }}></div>
                 </Grid>
                 {cartItems.map(item => (
                     <Grid container spacing={3}>
                         <Grid item xs={6} sm={6} md={6}>
                             <div style={{ backgroundColor: "#F4F4F4", width: "32%", height: "90%" }}>
                                 <img src={item.imgSrc} alt="product" style={{ width: "100%", height: "100%" }} />
                             </div>
                         </Grid>
                         <Grid item xs={2} sm={2} md={2} style={{ padding: "6% 3%" }}>
                         <IconButton aria-label="delete" onClick={() => increment(item)}>
                                 <ExpandLessIcon />
                             </IconButton>
                             <Typography variant="body1" gutterBottom style={{paddingLeft:"20px"}}>{item.qty}</Typography>
                             <IconButton aria-label="delete" onClick={() => decrement(item)}>
                                 <ExpandMoreIcon />
                             </IconButton>
                         </Grid>
                         <Grid item xs={2} sm={2} md={2} style={{ padding: "6% 3%" }}>
                             <IconButton aria-label="delete" onClick={() => deleteProduct(item.id, item.qty)}>
                                 <DeleteIcon />
                             </IconButton>
                         </Grid>
                         <Grid item xs={2} sm={2} md={2} style={{ padding: "6% 3%" }}>
                             <Typography variant="body1" gutterBottom>${item.price * item.qty}</Typography>
                         </Grid>
                         <div style={{ width: "100%", height: "3px", backgroundColor: "#F4F4F4", margin: "5px 0" }}></div>
 
                     </Grid>
                 ))}
                 <Grid container spacing={3}>
                     <Grid item xs={6} sm={6} md={6}>
                         <Typography variant="body2">Total amount : <strong>${total}</strong></Typography>
                         <Typography variant="body2">Discount : <strong>10%</strong></Typography>
                         <Typography variant="body2">Final Amount : <strong>${total - total / 10}</strong></Typography>
                         <Button  variant="contained"
                            style={{
                                backgroundColor: "transparent",
                                color: "#131313",
                                border: "1px solid #131313",
                                margin: "20px 10px"
                            }}>Pay Now</Button>
                     </Grid>
                     <Grid item xs={6} sm={6} md={6} style={{ textAlign: "right" }}>
                         <Button 
                          variant="contained"
                          onClick = {() => clearCart()}
                          style={{
                              backgroundColor: "#131313",
                              color: "#EEE",
                              border: "1px solid #B7B7B7",
                              margin: "20px 10px"
                              
                          }}>Clear Cart</Button>
                         <Button  variant="contained"
                             style={{
                                backgroundColor: "#131313",
                                color: "#EEE",
                                border: "1px solid #B7B7B7",
                                margin: "20px 10px"
                            }}>
                                Pay Now</Button>
                     </Grid>
                 </Grid>
 
 
             </Container>
            ) : <div className={classes.empty}>
                <Typography variant="h2" gutterBottom> <strong>You Cart is Empty</strong></Typography>
                </div>}
           
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.products.cartItems
})
export default connect(mapStateToProps, { deleteProduct, increment, decrement, clearCart })(Cart);
