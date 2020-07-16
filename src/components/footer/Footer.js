import React from 'react';
import { 
     Grid, 
     Typography, 
    } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Facebook, Instagram, Twitter, GitHub} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
        backgroundColor: "#F4F4F4" 
    },

   divider: {
    width:"90%", 
    height:"1px",
    backgroundColor:"#CECECE", 
    margin:"10px 5%"
   },
 
}));



const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* <Container className={classes.root}> */}
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={4} md={2} style={{ textAlign: "left", padding:"3%" }}>

                        <Typography variant="h6" gutterBottom>
                            Text only
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Text only
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Text only
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Text only
                        </Typography>
                      

                    </Grid>
                    <Grid item xs={6} sm={4} md={2} style={{ textAlign: "left" }}>
                        <div style={{margin:"10% 0"}}>
                        <Typography variant="h6" gutterBottom>
                            Address
                        </Typography>
                        <Typography variant="body2">
                            Street, Town , CIty, Country
                        </Typography>
                        </div>
                        <Typography variant="h6">
                            Phone Number
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                           +92 (041) 123456
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                           +92 (041) 123456
                        </Typography>
                      
                    </Grid>
                    <Grid item xs={6} sm={4} md={2} style={{ textAlign: "left", padding:"3%" }}>
                    <Typography variant="h6" gutterBottom>
                            E-mail
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                       <strong> mudasar.se@gmail.com </strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={4} md={6} style={{ textAlign: "right", padding: "3%" }}>
                    <Typography variant="h6" gutterBottom>
                            Social Media
                        </Typography>
                        <Facebook />
                        <Instagram />
                        <Twitter />
                        <GitHub />
                    </Grid>

                </Grid>
                <div className={classes.divider}></div>
                <Grid container spacing={3} style ={{margin:"1px 15%"}}>
                <Grid item xs={4} sm={4} md={4}>
                <Typography variant="body2" gutterBottom>
                           &copy; BootCamp | 2020
                        </Typography>
                    </Grid>
                <Grid item xs={4} sm={4} md={4}>
                <Typography variant="body2" gutterBottom>
                           All right reserved
                        </Typography>
                    </Grid>
                <Grid item xs={4} sm={4} md={4}>
                <Typography variant="body2" gutterBottom>
                           &copy; mudasar.se@gmail.com
                        </Typography>
                    </Grid>
                    </Grid>
            {/* </Container> */}
        </div>
    )
}

export default Footer
