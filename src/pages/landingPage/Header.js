import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Paper, Grid, Container, Typography, Button } from '@material-ui/core';
import shoes from '../../images/header-shoe.png';
import shoe1 from '../../images/shoe1.png';
import shoe2 from '../../images/shoe2.png';
import shoe3 from '../../images/shoe3.png';
import shoe4 from '../../images/shoe4.png';
import shoe5 from '../../images/shoe5.png';

import bannerShoe from '../../images/banner-shoe.png';
import mens from '../../images/mens-shoe.jpg';
import mens1 from '../../images/mens-shoe1.jpg';
import spark from '../../images/spark.png';

import AppNavBar from '../../components/appbar/AppNavBar'
import './style.css'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
    },
    root1: {
        backgroundColor: "#FFF"
    },
    root2: {
        backgroundImage: "linear-gradient(to right, #ebedfa , #c2bdd4)"
    },
    gridContainer: {
        marginTop: "10px",
        marginBottom: "10px"
    },
    gridContainer1: {
        marginTop: "10px",
        marginBottom: "10px",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        backgroundColor: "#F4F4F4",
        boxShadow: "10px 10px 50px 10px #ddd",
        width:"100%",
        margin: "10px 0"
    },
    paper1: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        backgroundColor: "#F4F4F4",
        width: "100%",
        height: "85%",
    },
    textSection: {
        paddingTop: "20%",
        paddingLeft: "20%"
    },
    heading: {
        paddingTop: "5%",
        paddingLeft: "1%"
    },
    // lastSpark: {
    //   backgroundColor: "red"

    // }


}));

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                    <Paper className={classes.paper} elevation={3}>
                        <Grid container spacing={3}>

                            <Grid item xs={12} sm={6} md={6}>
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
                            <Grid item xs={12} sm={6} md={6}>
                                <img src={shoes} alt="shoes" />
                            </Grid>

                        </Grid>
                    </Paper>
            </div>
            {/* <div className={classes.root1}>
                <Container className={classes.gridContainer1}>
                    <Grid container spacing={3}>

                        <Grid item xs={12}>
                            <div className={classes.heading}>
                                <Typography variant="h4" gutterBottom>
                                    Bootcamp eCommerce
                            </Typography>

                            </div>
                        </Grid>
                        <Grid item xs={12} md={2} sm={4} style={{ marginRight: "40px" }}>
                            <div>
                                <Paper className={classes.paper1} elevation={3}>
                                    <img src={shoe1} alt="shoes" />
                                </Paper>
                                <div style={{ marginTop: "10px" }}>
                                    <Typography variant="body2" gutterBottom>
                                        Branded Shoes
                            </Typography>
                                    <Typography variant="subtitle2" gutterBottom>
                                        NIKE SHOES
                            </Typography>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        $500
                            </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={2} sm={4} style={{ marginRight: "40px" }}>
                            <div>
                                <Paper className={classes.paper1} elevation={3}>
                                    <img src={shoe2} alt="shoes" />
                                </Paper>
                                <div style={{ marginTop: "10px" }}>
                                    <Typography variant="body2" gutterBottom>
                                        Branded Shoes
                            </Typography>
                                    <Typography variant="subtitle2" gutterBottom>
                                        NIKE SHOES
                            </Typography>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        $500
                            </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={2} sm={4} style={{ marginRight: "40px" }}>
                            <div>
                                <Paper className={classes.paper1} elevation={3}>
                                    <img src={shoe3} alt="shoes" />
                                </Paper>
                                <div style={{ marginTop: "10px" }}>
                                    <Typography variant="body2" gutterBottom>
                                        Branded Shoes
                            </Typography>
                                    <Typography variant="subtitle2" gutterBottom>
                                        NIKE SHOES
                            </Typography>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        $500
                            </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={2} sm={4} style={{ marginRight: "40px" }}>
                            <div>
                                <Paper className={classes.paper1} elevation={3}>
                                    <img src={shoe4} alt="shoes" />
                                </Paper>
                                <div style={{ marginTop: "10px" }}>
                                    <Typography variant="body2" gutterBottom>
                                        Branded Shoes
                            </Typography>
                                    <Typography variant="subtitle2" gutterBottom>
                                        NIKE SHOES
                            </Typography>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        $500
                            </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={2} sm={4} style={{ marginRight: "40px" }}>
                            <div>
                                <Paper className={classes.paper1} elevation={3}>
                                    <img src={shoe5} alt="shoes" />
                                </Paper>
                                <div style={{ marginTop: "10px" }}>
                                    <Typography variant="body2" gutterBottom>
                                        Branded Shoes
                            </Typography>
                                    <Typography variant="subtitle2" gutterBottom>
                                        NIKE SHOES
                            </Typography>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        $500
                            </Typography>
                                </div>
                            </div>
                        </Grid>
                        <div style={{ width: "70%", height: "5px", backgroundColor: "#c7c7c7", margin: "30px 15%" }}></div>

                    </Grid>
                </Container>
            </div> */}

            {/* <div className={classes.root2}>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={6}>
                            <div className={classes.textSection}>
                                <Typography variant="body1" gutterBottom>
                                    Bootcamp eCommerce
                            </Typography>
                                <Typography variant="h3" gutterBottom style={{ fontWeight: "600", color: "#000" }}>
                                    E-Commerce Store
                            </Typography>

                                <Button variant="contained" style={{ backgroundColor: "#131313", color: "#F4F4F4", marginRight: "10px" }}>
                                    Shop Now
                                </Button>
                                <Button variant="contained" style={{ backgroundColor: "transparent", color: "#131313", border: "1px solid #131313" }}>
                                    Shop Now
                                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <img src={bannerShoe} alt="banner" />
                        </Grid>
                    </Grid>
                </Container>
            </div> */}

            {/* <div style={{ margin: "20px 0" }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12}>
                            <Typography variant="h4" gutterBottom>Shoe Store</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <div style={{ backgroundImage: "linear-gradient(to right, #F7F7F7 , #BEBEC0, #F7F7F7 )", width: "100%", height: "100%", }}>
                                <img src={mens} alt="mens" style={{ width: "100%" }} />
                                <div style={{ margin: "5% 15%" }}>
                                    <Typography variant="body1" gutterBottom>Branded Shoe</Typography>
                                    <Button variant="contained" style={{ backgroundColor: "#131313", color: "#F4F4F4", }}>SEE ALL</Button>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <div style={{ backgroundImage: "linear-gradient(to right, #E4E4E4 , #D7D6D4)", width: "100%", height: "100%", }}>
                                <img src={mens1} alt="mens1" style={{ width: "100%" }} />
                                <div style={{ margin: "5% 15%" }}>
                                    <Typography variant="body1" gutterBottom>Branded Shoe</Typography>
                                    <Button variant="contained" style={{ backgroundColor: "#131313", color: "#F4F4F4", }}>SEE ALL</Button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div> */}

            {/* <div className="lastSpark">
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={6}>
                            <div style={{ margin: "25% 15%" }}>
                                <Typography variant="h3" gutterBottom
                                    style={{ color: "#FFF", fontWeight: "600", }}
                                >
                                    FINAL SPARK
                                 </Typography>
                                <Button variant="contained"
                                    style={{ backgroundColor: "transparent", border: "1px solid #FFF", color: "#FFF" }}
                                >Go To Store</Button>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <img src={spark} alt="spark-img" />
                        </Grid>
                    </Grid>
                </Container>
            </div> */}

            {/* <div className="last-section">
                <Container>
                    <Grid container spacing={3}>
                        <Grid item sm={12} md={12}>
                            <div className={classes.lastSection}>

                                <Typography variant="h3" gutterBottom style={{ fontWeight: "600", zIndex: "2" }}>
                                    E-Commerce Store
                            </Typography>

                                <Button variant="contained" style={{ backgroundColor: "#131313", color: "#F4F4F4", marginRight: "10px" }}>
                                    Shop Now
                                </Button>
                                <Button variant="contained" style={{ backgroundColor: "transparent", color: "#131313", border: "1px solid #131313" }}>
                                    Shop Now
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div> */}
        </div>
    )
}

export default Header
