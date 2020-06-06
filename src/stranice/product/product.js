import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { dodajUKorpu, vratiBroj } from "../../actions/dodajUKorpu";
import { Opis } from './opis'
import { Komentari } from './komentari'
import "./product.scss";
import {uzmiTip} from '../../actions/tipAkcija'
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objekat: null,
      komentari:null,
      opis:true,
    };
  }
  componentWillUpdate(prevProps) {
    if (
      this.props.match.params.ID !== prevProps.match.params.ID ||
      this.props.match.params.IdAll !== prevProps.match.params.IdAll
    ) {
      fetch(
        `http://localhost:4000/korisnici/proizvod/${prevProps.match.params.IdAll}/${prevProps.match.params.ID}`
      )
        .then(response => response.json())
        .then(vrati => {
          this.setState({
            objekat: vrati.data[0]
          });
        });

        fetch(`http://localhost:4000/korisnici/komentari/${prevProps.match.params.ID}/${prevProps.match.params.IdAll}`)
        .then(response => response.json())
        .then(vrati => {
          this.setState({
            komentari: vrati.data
          });
        });
      }
  }
  componentWillMount() {
    localStorage.setItem("tip","");
    fetch(
      `http://localhost:4000/korisnici/proizvod/${this.props.match.params.IdAll}/${this.props.match.params.ID}`
    )
      .then(response => response.json())
      .then(vrati => {
        this.setState({
          objekat: vrati.data[0]
        });
      });
      fetch(`http://localhost:4000/korisnici/komentari/${this.props.match.params.ID}/${this.props.match.params.IdAll}`)
      .then(response => response.json())
      .then(vrati => {
        this.setState({
          komentari: vrati.data
        });
      });
  }
  dodaj = () => {
    this.props.dodajUKorpu(this.state.objekat, this.props.korpa);
    this.props.vratiBroj(this.props.korpa);
  };

ukljuciOpis=()=>{
  this.setState({
    opis:true

  })
}

ukljuciKomentare=()=>{
  this.setState({
    opis:false
  })
}


  render() {
    if (this.state.objekat !== undefined && this.state.objekat !== null) {
      return (
        <div className="proizvod">
          <div className="levaStrana">
            <div className="img">
              <img src={this.state.objekat.image} />
            </div>
          </div>
          <div className="desnaStrana">
            <p className="nazivpr">Naziv : {this.state.objekat.Naziv}</p>
            <p className="nazivpr">
              Proizvođač : {this.state.objekat.Proizvodjac}
            </p>
            <p className="nazivpr">
              Cena proizvoda : {this.state.objekat.Cena}RSD
            </p>
            <hr />
            <h1>
              <i className="fas fa-truck"></i>
            </h1>
            <p>
              <span id="besplatno">BESPLATNA ISPORUKA</span> na teritoriji cele
              SRBIJE svakim radnim danom
            </p>
            <hr />
            <div className="dugmesredina">
              <button
                type="submit"
                className="kupi"
                id={this.state.objekat.Naziv}
                onClick={this.dodaj}
              >
                DODAJ U KORPU
                <span id="korpa">
                  <i className="fas fa-cart-plus"></i>
                </span>
              </button>
            </div>{" "}
          </div>
          <div className="donjaSekcija">
              <button className="opis" onClick={this.ukljuciOpis}>OPIS</button><button className="komentari" onClick={this.ukljuciKomentare}>KOMENTARI</button>
              {this.state.opis?<Opis product={this.state.objekat}/>:<Komentari product={this.state.objekat} kom={this.state.komentari}/>}
              
              
          </div>
        </div>
      );
    } else {
      return (
        <div className="nema">
          <p>Poštovani korisniče, trenutno nemamo traženi proizvod u bazi!</p>
          <p>
            Molimo Vas da se
            <Link className="n" to="/">
              {" "}
              vratite na početnu stranu.{" "}
            </Link>
            Hvala
          </p>
        </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  korpa: state.korpa.korpa
});

export default connect(mapStateToProps, { dodajUKorpu, vratiBroj, uzmiTip })(Product);
