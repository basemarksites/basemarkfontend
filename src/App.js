import React from 'react';
import './components/Font-Awesome_Icons/fonts';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NoMatch from './components/NoMatch';
import PrivateRoute from './components/PrivateRoute';

import Welcome from './components/Welcome';
import Login from './components/Login';
import RecoverPassword from './components/RecoverPassword';
import Registration from './components/Registration';
import Navigation from './components/Navigation';
import NavigationBar from './components/NavigationBar';

import Footerpage from './components/Footer';


import ProductCategory from './components/admin/ProductCategory';
import AddProducts from './components/admin/AddProducts';
import ViewProducts from './components/admin/ViewProducts';
import UpdateProduct from './components/admin/UpdateProduct';

import MensProduct from './components/view-pages/Mens';
import WomensProduct from './components/view-pages/WomensProduct';
import KidsProduct from './components/view-pages/KidsProducts';

import AllProduct from './components/view-pages/AllProducts';

import Accessories from './components/view-pages/Accessories';
import Clothes from './components/view-pages/Clothes';
import Shoes from './components/view-pages/Shoes';
import Update from './components/ProfileUpdate';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Registration} />

        <Route exact path='/productcategory' component={ProductCategory} />
        <Route exact path='/addproduct' component={AddProducts} />
        <Route exact path='/viewproducts' component={ViewProducts} />
        <Route exact path='/updateproduct/:id' component={UpdateProduct} />

        <Route exact path='/mensProducts' component={MensProduct} />
        <Route exact path='/womensProducts' component={WomensProduct} />
        <Route exact path='/kidsProducts' component={KidsProduct} />

        <Route exact path='/allProducts' component={AllProduct} />

        <Route exact path='/accessories' component={Accessories} />
        <Route exact path='/clothes' component={Clothes} />
        <Route exact path='/shoes' component={Shoes} />

        <Route exact path='/recoverpassword' component={RecoverPassword} />
        <Route exact path='/navigation' component={Navigation} />
        <Route exact path='/navigationbar' component={NavigationBar} />
        <Route exact path='/footer' component={Footerpage} />

        <PrivateRoute exact path= '/update' component={Update} />



        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;