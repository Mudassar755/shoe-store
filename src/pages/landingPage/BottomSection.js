import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
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
    sparkBtn: {
        backgroundColor: "transparent",
         border: "1px solid #FFF",
         color: "#FFF"
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
                        <Grid item xs={12} sm={10} md={6}>
                            <div style={{ margin: "25% 15%" }}>
                                <Typography variant="h3" gutterBottom
                                    style={{ color: "#FFF", fontWeight: "600", }}
                                >
                                    FINAL SPARK
                                 </Typography>
                                <Button variant="contained"
                                    className={classes.sparkBtn}
                                >Go To Store</Button>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={8} md={6}>
                            <img src={spark} alt="spark-img" />
                        </Grid>
                    </Grid>
            </div>
    )
}

export default BottomSection
