import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Home,
  Sukses,
  Dashboard,
  OrderCart,
  Konfirmasi,
  Setting,
  OrderDetail,
  Produk,
  Order,
  Kontak,
  Jaket,
  Celana,
  Pakaian,
  Appp,
  App3,
  App2,
} from "./pages";
import { Login } from "./components";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <NavbarComponent /> */}
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Sukses" component={Sukses} exact />
            <Route path="/OrderCart" component={OrderCart} exact />
            <Route path="/Konfirmasi" component={Konfirmasi} exact />
            <Route path="/OrderDetail" component={OrderDetail} exact />
            <Route path="/Home" component={Dashboard} exact />
            <Route path="/Login" component={Login} exact />
            <Route path="/Setting" component={Setting} exact />
            <Route path="/Kontak" component={Kontak} exact />
            <Route path="/Pakaian" component={Pakaian} exact />
            <Route path="/Jaket" component={Jaket} exact />
            <Route path="/Celana" component={Celana} exact />
            <Route path="/Produk" component={Produk} exact />
            <Route path="/DataPembeli" component={Appp} exact />
            <Route path="/Kategori" component={App3} exact />
            <Route path="/Formkat" component={App2} exact />
            <Route path="/Order" component={Order} exact />
          </Switch>
        </main>
        {/* <Footer /> */}
      </BrowserRouter>
    );
  }
}
