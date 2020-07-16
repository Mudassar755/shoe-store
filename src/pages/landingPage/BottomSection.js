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
 
    sparkBtn: {
        backgroundColor: "transparent",
         border: "1px solid #FFF",
         color: "#FFF"
    },

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
