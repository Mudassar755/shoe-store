import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  Grid, Typography, Button, Container } from '@material-ui/core';
import mens from '../../images/mens-shoe.jpg';
import mens1 from '../../images/mens-shoe1.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
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

const TwoColumns = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
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
        </div>
    )
}

export default TwoColumns
