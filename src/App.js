import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import AppNavBar from './components/appbar/AppNavBar';
import Products from './pages/products/Products';
import LandingPage from './pages/landingPage';
import Categories from './pages/categories/Categories';
import ProductPage from './pages/products/ProductPage';
import Footer from './components/footer/Footer';
import Cart from './pages/cart/Cart';
import { Paper, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {GlobalProvider} from './context/GlobalState'


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
    <GlobalProvider>
    <Router>
    <Container>
      <Paper elevation={3} className={classes.paper}>
      <AppNavBar />
      <Routes>
      <Route path="/" element= {<LandingPage />} />
      <Route path="products" element= {<Products />} >

      <Route path=":name" element= {<ProductPage />} />
      </Route>
      <Route path="categories" element= {<Categories />} />
      <Route path="cart" element= {<Cart />} />
      </Routes>
      <Footer />
       </Paper>
    </Container>
    </Router>
    </GlobalProvider>
  );
}

export default App;
