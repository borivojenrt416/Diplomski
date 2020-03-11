import React, { Component } from "react";
import Navigacija from "./navigacija";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./heder.scss";
import Searchbar from "./searchbar";
import Prijavanav from "./prijavanav";
import Ispodsearchbara from "./ispodsearchbara";
import { connect } from "react-redux";
class Heder extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    {
      if (this.props.korisnik !== undefined && this.props.korisnik !== null) {
        if (this.props.korisnik[0].Status === "admin") {
          return (
            <div className="hed">
              <div className="content">
                <div className="icon">
                  <Link to="/">
                    <img className="title" src={logo} />
                  </Link>
                </div>
              </div>
              <div className="prijava">
                <Prijavanav />
              </div>
            </div>
          );
        } else {
          return (
            <div className="hed">
              <div className="content">
                <div className="icon">
                  <Link to="/">
                    <img className="title" src={logo} />
                  </Link>
                </div>
              </div>
              <div className="nav">
                <Navigacija />
              </div>
              <div className="unos">
                <Searchbar />
              </div>
              <div className="prijava">
                <Prijavanav />
              </div>
              <div className="isp">
                <Ispodsearchbara />
              </div>
            </div>
          );
        }
      } else {
        return (
          <div className="hed">
            <div className="content">
              <div className="icon">
                <Link to="/home">
                  <img className="title" src={logo} />
                </Link>
              </div>
            </div>
            <div className="nav">
              <Navigacija />
            </div>
            <div className="unos">
              <Searchbar />
            </div>
            <div className="prijava">
              <Prijavanav />
            </div>
            <div className="isp">
              <Ispodsearchbara />
            </div>
          </div>
        );
      }
    }
  }
}
const mapStateToProps = state => ({
  korisnik: state.korisnik.korisnik
});
export default connect(mapStateToProps)(Heder);
