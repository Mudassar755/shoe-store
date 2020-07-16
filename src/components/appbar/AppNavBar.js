import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, AppBar, Toolbar, IconButton, Typography, Button, Badge } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {connect} from 'react-redux';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appHeader:{
        backgroundColor: "#F4F4F4", 
        color: "#000", 
    },
    appLink: {
        color: "#000", 
        textDecoration: "none",
        margin: "0 10px"
    }
}));

function AppNavBar({itemsQty}) {
    const classes = useStyles();
    return (
        <div>
            <Container>
                <AppBar position="static" className={classes.appHeader}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/" className={classes.appLink}>Shoe Store</Link>
                        </Typography>
                        <Link to="/" className={classes.appLink}>
                            <Button color="inherit" >Home</Button>
                        </Link>
                        <Link to="/categories" className={classes.appLink}>
                            <Button color="inherit">Categories</Button>
                        </Link>
                        <Link to="/products" className={classes.appLink}>
                            <Button color="inherit">Products</Button>
                        </Link>
                        <Link to="/cart" className={classes.appLink}>
                        <Badge badgeContent={itemsQty} color="secondary">
                        <AddShoppingCartIcon />
                        </Badge>
                            {/* <Button color="primary"><AddShoppingCartIcon /></Button> */}
                        </Link>
                    </Toolbar>
                </AppBar>
            </Container>
        </div>
    )
}

const mapStateToProps = state => ({
    itemsQty: state.products.itemsQty
})
export default connect(mapStateToProps, null)(AppNavBar);
