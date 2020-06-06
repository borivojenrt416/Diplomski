import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import history from './stranice/history'
import { connect } from "react-redux";
import { dohvatiProizvode } from "./actions/proizvodiAkcije";

import Obrisan from "./stranice/kupovina/obrisan";
import Error from "./stranice/Error/error";
import Proizvodi from "./stranice/proizvodi/proizvodi";
import { Switch } from "react-router/esm/react-router";
import Heder from "./stranice/zaglavlje/heder";
import Fav from "./stranice/fav/fav";
import Product from "./stranice/product/product";
import Kupovina from "./stranice/kupovina/kupovina";
import LogIn from "./stranice/login/login";
import Register from "./stranice/login/register";
import Korisnik from "./stranice/login/korisnik";
import Admin from "./stranice/admin/admin";
import Footer from "./stranice/footer/footer";
import Narucivanje from "./stranice/dostava/narucivanje";
import Home from "./stranice/home/home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proizvodi: [],
      izbor: [],
      tip: [],
      korisnik: {
        email: "",
        sifra: ""
      }
    };
  }

  // componentWillMount() {
  //   this.props.dohvatiProizvode();
  // }
  // napuni = () => {
  //   fetch("http://localhost:4000/korisnici/sviproizvodi")
  //     .then(response => response.json())
  //     .then(response => {
  //       this.setState({
  //         proizvodi: response.data
  //       });
  //     });
  // };
  // componentDidMount() {
  //   this.napuni();
  // }

  render() {
    if (this.props.korisnik !== undefined && this.props.korisnik !== null && this.props.korisnik[0] !== undefined) {
      if (this.props.korisnik[0].Status === "admin") {

        return (
          <div className="App">
            <Heder />
            <div>
              <Switch>
                <Route exact path="/" render={props => <Admin />} />
                <Route exact path="/login" render={props => <LogIn />} />
                <Route component={Error} />
              </Switch>
            </div>
            <div className="fut">
              <Footer />
            </div>
          </div>
        );
      } else {
  
        return (
          <div className="App">
            <Heder />
            <div>
              <Switch>
                <Route exact path="/" render={props => <Home />} />
                <Route exact path="/home" render={props => <Home />} />
                <Route exact path="/proizvodi/:tip" component={Proizvodi} />
                <Route exact path="/login" render={props => <LogIn />} />
                {/* <Route exact path="/register" component={Register} /> */}
                <Route exact history = {history} path="/korisnik" render={props => <Korisnik />} />
                <Route exact history = {history} path="/kupovina" render={props => <Kupovina />} />
                <Route exact history = {history} path="/product/:IdAll/:ID" component={Product} />
                <Route exact history = {history} path="/ukloniti/:id" component={Obrisan} />
                <Route exact history = {history} path="/omiljeno" component={Fav} />
                <Route
                  exact
                  path="/dostava"
                  render={props => <Narucivanje />}
                />
                <Route component={Error} />
              </Switch>
            </div>
            <div className="fut">
              <Footer />
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="App">
          <Heder />
          <div>
            <Switch>
              <Route exact path="/" render={props => <Home />} />
              <Route exact path="/home" render={props => <Home />} />
              <Route exact path="/proizvodi/:tip" component={Proizvodi} />
              <Route exact path="/login" render={props => <LogIn />} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/korisnik" render={props => <Korisnik />} />
              <Route exact path="/kupovina" render={props => <Kupovina />} />
              <Route exact path="/product/:IdAll/:ID" component={Product} />
              <Route exact path="/ukloniti/:id" component={Obrisan} />
              <Route exact path="/omiljeno" component={Fav} />
              <Route exact path="/dostava" render={props => <Narucivanje />} />
              <Route component={Error} />
            </Switch>
          </div>
          <div className="fut">
            <Footer />
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  proizvodi: state.proizvodi.proizvod,
  korisnik: state.korisnik.korisnik,
  korpa: state.korpa.korpa
});
export default connect(mapStateToProps, { dohvatiProizvode })(App);
