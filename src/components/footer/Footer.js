import React from 'react';
import { Paper, Grid, Container, Button, Typography, Checkbox, Divider, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Facebook, Instagram, Twitter, GitHub, Copyright} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
    },
    gridContainer: {
        marginTop: "10px",
        marginBottom: "10px"
    },

    paper1: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        backgroundColor: "#F4F4F4",
        width: "100%",
        height: "85%",
    },
    demo: {
        marginLeft:"-13px"
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

function generate(element) {
    return [0, 1, 2, 3, 4, 5].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Footer = () => {
    const classes = useStyles();
    return (
        <div style={{ backgroundColor: "#F4F4F4" }}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={4} sm={2} md={2} style={{ textAlign: "left", padding:"3%" }}>

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
                        {/* <div className={classes.demo}>
                            <List dense={true}>
                                {generate(
                                    <ListItem>
                                        <ListItemText
                                            primary="Single-line item"
                                        />
                                    </ListItem>,
                                )}
                            </List>
                        </div> */}

                    </Grid>
                    <Grid item xs={4} sm={2} md={2} style={{ textAlign: "left" }}>
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
                        {/* <List dense={true}>
                            <ListItem>
                                <ListItemText>+92 (041) 123456</ListItemText>

                            </ListItem>
                            <ListItem>
                                <ListItemText>+92 (041) 123456</ListItemText>

                            </ListItem>
                        </List> */}
                    </Grid>
                    <Grid item xs={4} sm={2} md={2} style={{ textAlign: "left", padding:"3%" }}>
                    <Typography variant="h6" gutterBottom>
                            E-mail
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            abc@email.com
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} style={{ textAlign: "right", padding: "3%" }}>
                    <Typography variant="h6" gutterBottom>
                            Social Media
                        </Typography>
                        <Facebook />
                        <Instagram />
                        <Twitter />
                        <GitHub />
                    </Grid>

                </Grid>
                <Divider />
                <Grid container spacing={3}>
                <Grid item xs={4} sm={4} md={4}>
                <Typography variant="body2" gutterBottom>
                           &copy; abc@email.com
                        </Typography>
                    </Grid>
                <Grid item xs={4} sm={4} md={4}>
                <Typography variant="body2" gutterBottom>
                           &copy; abc@email.com
                        </Typography>
                    </Grid>
                <Grid item xs={4} sm={4} md={4}>
                <Typography variant="body2" gutterBottom>
                           &copy; abc@email.com
                        </Typography>
                    </Grid>
                    </Grid>
            </Container>
        </div>
    )
}

export default Footer
