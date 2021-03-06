import React from 'react';
import './components/Font-Awesome_Icons/fonts';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NoMatch from './components/NoMatch';


import Welcome from './components/Welcome';
import SignIn from './components/SignIn';
import RecoverPassword from './components/RecoverPassword';
import SignUp from './components/SignUp';
import Navigation from './components/Navigation';
import NavigationBar from './components/NavigationBar';

import NavAfterLogin from './components/NavAfterLogin';

import Footerpage from './components/Footer';
import ProductCategory from './components/admin/ProductCategory';
import AddProducts from './components/admin/AddProducts';
import ViewProducts from './components/admin/ViewProducts';
import UpdateProduct from './components/admin/UpdateProduct';
import PictureWithSearchbar from './components/PictureWithSearchbar';


import MensProduct from './components/view-pages/Mens';
import WomensProduct from './components/view-pages/WomensProduct';
import KidsProduct from './components/view-pages/KidsProducts';

import AllProduct from './components/view-pages/AllProducts';

import Accessories from './components/view-pages/Accessories';
import Clothes from './components/view-pages/Clothes';
import Shoes from './components/view-pages/Shoes';

import ViewProductDetails from './components/view-pages/ViewProductDetails';

import ProductDetails from './components/view-pages/ProductDetail';
import SearchedProducts from './components/view-pages/SearchProducts';




import Cart from './components/orders/Cart'

import Update from './components/ProfileUpdate';

import Dashboard from './components/admin/Dashboard';
import NewItems from './components/admin/NewItems';

import PrivateRoute from './utils/PrivateRoute';

import Home from './components/Home';



import HotSales from './components/admin/HotSales';

import NewProducts from './components/view-pages/NewItems';
import HotSalesProducts from './components/view-pages/HotSales';

import AdminOrders from './components/admin/AdminOrders';




import FAQ from './components/FAQ';
import privacy from './components/privacy';

import ViewOrder from './components/admin/ViewOrder';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />

        <Route exact path='/productcategory' component={ProductCategory} />
        <PrivateRoute path='/addproduct' component={AddProducts} />
        <Route exact path='/viewproducts' component={ViewProducts} />
        <Route exact path='/updateproduct/:id' component={UpdateProduct} />

        <Route exact path='/mensProducts' component={MensProduct} />
        <Route exact path='/womensProducts' component={WomensProduct} />
        <Route exact path='/kidsProducts' component={KidsProduct} />

        <Route path='/allProducts' component={AllProduct} />

        <Route exact path='/accessories' component={Accessories} />
        <Route exact path='/clothes' component={Clothes} />
        <Route exact path='/shoes' component={Shoes} />

        <Route exact path='/productDetails/:id' component={ViewProductDetails}></Route>
        <Route exact path='/searchProducts/:id' component={SearchedProducts}></Route>

        <PrivateRoute exact path='/Cart' component={Cart}></PrivateRoute>
        <PrivateRoute exact path='/Cart/:id' component={Cart}></PrivateRoute>

        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <Route exact path='/newItems' component={NewItems} />
        <Route exact path='/hotSales' component={HotSales} />

        <Route exact path='/hotSalesProducts' component={HotSalesProducts} />
        <Route exact path='/NewProducts' component={NewProducts} />

        <PrivateRoute exact path='/adminOrders' component={ViewOrder} />


        <Route exact path='/recoverpassword' component={RecoverPassword} />
        <Route exact path='/navigation' component={Navigation} />
        <Route exact path='/navigationbar' component={NavigationBar} />
        <Route exact path='/navafterlogin' component={NavAfterLogin} />
        <Route exact path='/footer' component={Footerpage} />
        <Route exact path='/FAQ' component={FAQ} />
        <Route exact path='/privacy' component={privacy} />



        {/* <Route exact path='/home' component={Homepage} /> */}

        <Route exact path='/search' component={PictureWithSearchbar} />


        <PrivateRoute path='/home' component={Home} />



        <PrivateRoute exact path='/update' component={Update} />




        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;