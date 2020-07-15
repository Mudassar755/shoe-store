import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Container, Typography, Button } from '@material-ui/core';
import bannerShoe from '../../images/banner-shoe.png';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
        backgroundImage: "linear-gradient(to right, #ebedfa , #c2bdd4)",
        margin: "20px 0"
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
        boxShadow: "10px 10px 50px 10px #ddd"
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
const MiddleBanner = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
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
            </div>
    )
}

export default MiddleBanner
