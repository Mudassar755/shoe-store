import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import AppNavBar from './components/appbar/AppNavBar';
import Products from './pages/products/Products';
import LandingPage from './pages/landingPage';
import Categories from './pages/categories/Categories';
import ProductPage from './pages/products/ProductPage';
import Footer from './components/footer/Footer';
import Cart from './pages/cart/Cart';
import { Paper, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import store from './Redux/Store';
import {Provider} from 'react-redux';


const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexGrow: 1,
  },

  paper: {
      backgroundColor: "#FFF",
      boxShadow: "10px 10px 50px 10px #ddd",
      width:"100%",
      // margin: "10px 0"
  },


}));

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
    <Router>
    <Container>
      <Paper elevation={3} className={classes.paper}>
      <AppNavBar />
      <Switch>
      <Route exact path="/" component= {LandingPage} />
      <Route exact path="/products" component= {Products} />
      <Route exact path="/categories" component= {Categories} />
      <Route exact path="/products/:name" component= {ProductPage} />
      <Route exact path="/cart" component= {Cart} />
      </Switch>
      <Footer />
       </Paper>
    </Container>
    </Router>
    </Provider>
  );
}

export default App;
