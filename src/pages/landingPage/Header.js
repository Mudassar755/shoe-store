import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import shoes from '../../images/header-shoe.png';

import './style.css'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
    },
   
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        backgroundColor: "#F4F4F4",
        // boxShadow: "10px 10px 50px 10px #ddd",
        width:"100%",
        // margin: "10px 0"
    },
  
    textSection: {
        paddingTop: "20%",
        paddingLeft: "20%"
    },

}));

const Header = () => {
    const classes = useStyles();
    return (
            <div className={classes.root}>
                    <div className={classes.paper}>
                        <Grid container spacing={3}>

                            <Grid item xs={12} sm={10} md={6}>
                                <div className={classes.textSection}>
                                    <Typography variant="body1" gutterBottom>
                                        Bootcamp eCommerce
                            </Typography>
                                    <Typography variant="h3" gutterBottom style={{ fontWeight: "600", color: "#000" }}>
                                        E-Commerce Store
                            </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        10 % OFF
                            </Typography>
                                    <Button variant="contained" style={{ backgroundColor: "#131313", color: "#F4F4F4" }}>
                                        Shop Now
                        </Button>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={8} md={6}>
                                <img src={shoes} alt="shoes" />
                            </Grid>

                        </Grid>
                    </div>
            </div>
           
    )
}

export default Header
