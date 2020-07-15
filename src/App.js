import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import AppNavBar from './components/appbar/AppNavBar';
import ImageSlider from './components/imageSlider/ImageSlider';
import Products from './pages/products/Products';
import LandingPage from './pages/landingPage';
import Categories from './pages/categories/Categories';
import ProductPage from './pages/products/ProductPage';
import Footer from './components/footer/Footer';
import Cart from './pages/cart/Cart'

import store from './Redux/Store';
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div >
      <AppNavBar />
      <Switch>
      {/* <ImageSlider /> */}
      {/* <Products /> */}
      <Route exact path="/" component= {LandingPage} />
      <Route exact path="/products" component= {Products} />
      <Route exact path="/categories" component= {Categories} />
      <Route exact path="/products/:name" component= {ProductPage} />
      <Route exact path="/cart" component= {Cart} />
      </Switch>
      <Footer />

    </div>
    </Router>
    </Provider>
  );
}

export default App;
