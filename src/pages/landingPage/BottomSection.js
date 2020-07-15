import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Container, Typography, Button } from '@material-ui/core';
import spark from '../../images/spark.png';


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

const BottomSection = () => {
    const classes = useStyles();
    return (
        <div className="lastSpark">
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
            </div>
    )
}

export default BottomSection
