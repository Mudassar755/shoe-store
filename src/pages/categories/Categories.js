import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Container, Button } from '@material-ui/core';
import shoe1 from '../../images/shoe1.png';
import shoe2 from '../../images/shoe2.png';
import shoe3 from '../../images/shoe3.png';
import shoe4 from '../../images/shoe4.png';
import shoe5 from '../../images/shoe5.png';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
        backgroundColor: "#FFF",
        margin:"20px 0"
    },
    gridContainer: {
        marginTop: "10px",
        marginBottom: "10px"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: "#F4F4F4",
        position: "relative",
    },
    paperDiv: {
        border: "2px solid #DDDDDD",
        padding: "13px",
        borderRadius: "10px"
    },

}));

const Categories = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container className={classes.gridContainer}>
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={6} md={4}>
                        <Paper className={classes.paper} elevation={3}>
                            <div className={classes.paperDiv}>
                                <img src={shoe1} alt="nike shoe"/>
                            </div>
                           
                            <Button>Category Name</Button>
                        </Paper>

                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper className={classes.paper} elevation={3}>
                            <div className={classes.paperDiv}>
                                <img src={shoe2} alt="nike shoe"/>
                            </div>
                            <Button>Category Name</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper className={classes.paper} elevation={3}>
                            <div className={classes.paperDiv}>
                                <img src={shoe3} alt="nike shoe"/>
                            </div>
                            <Button>Category Name</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper className={classes.paper} elevation={3}>
                            <div className={classes.paperDiv}>
                                <img src={shoe4} alt="nike shoe"/>
                            </div>
                            <Button>Category Name</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper className={classes.paper} elevation={3}>
                            <div className={classes.paperDiv}>
                                <img src={shoe5} alt="nike shoe"/>
                            </div>
                            <Button>Category Name</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper className={classes.paper} elevation={3}>
                            <div className={classes.paperDiv}>
                                <img src={shoe1} alt="nike shoe"/>
                            </div>
                            <Button>Category Name</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper className={classes.paper} elevation={3}>
                            <div className={classes.paperDiv}>
                                <img src={shoe2} alt="nike shoe"/>
                            </div>
                            <Button>Category Name</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper className={classes.paper} elevation={3}>
                            <div className={classes.paperDiv}>
                                <img src={shoe3} alt="nike shoe"/>
                            </div>
                            <Button>Category Name</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper className={classes.paper} elevation={3}>
                            <div className={classes.paperDiv}>
                                <img src={shoe4} alt="nike shoe"/>
                            </div>
                            <Button>Category Name</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper className={classes.paper} elevation={3}>
                            <div className={classes.paperDiv}>
                                <img src={shoe5} alt="nike shoe"/>
                            </div>
                            <Button>Category Name</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper className={classes.paper} elevation={3}>
                            <div className={classes.paperDiv}>
                                <img src={shoe1} alt="nike shoe"/>
                            </div>
                            <Button>Category Name</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper className={classes.paper} elevation={3}>
                            <div className={classes.paperDiv}>
                                <img src={shoe2} alt="nike shoe"/>
                            </div>
                            <Button>Category Name</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Categories;
