import React, { Component } from "react";


import "./komentari.scss";
export class Komentari extends Component {
  constructor(props) {
    super(props);
    this.state = {
      komentar:{
          ime:undefined,
          poruka:undefined
      }
    };
  }
  //   componentWillUpdate(prevProps) {
  //     console.log(this.props.match.params.ID);
  //     if (
  //       this.props.match.params.ID !== prevProps.match.params.ID ||
  //       this.props.match.params.IdAll !== prevProps.match.params.IdAll
  //     ) {
  //       fetch(
  //         `http://localhost:4000/korisnici/proizvod/${prevProps.match.params.IdAll}/${prevProps.match.params.ID}`
  //       )
  //         .then(response => response.json())
  //         .then(vrati => {
  //           this.setState({
  //             objekat: vrati.data[0]
  //           });
  //         });
  //     }
  //   }
  //   componentWillMount() {
  //     fetch(
  //       `http://localhost:4000/korisnici/proizvod/${this.props.match.params.IdAll}/${this.props.match.params.ID}`
  //     )
  //       .then(response => response.json())
  //       .then(vrati => {
  //         this.setState({
  //           objekat: vrati.data[0]
  //         });
  //       });
  //   }
dodajKomentar=()=>{
    console.log(this.state.komentar)
    console.log(this.props.product)
    if(this.state.komentar.ime!==undefined && this.state.komentar.poruka!==undefined )
    {
    fetch(`http://localhost:4000/korisnici/komentari/${this.props.product.ID}/$${this.props.product.IdAll}/${this.state.komentar.ime}/${this.state.komentar.poruka}`)
    alert("USPESNO STE DODALI KOMENTAR")
    }
}
  render() {
    const {komentar} = this.state
    console.log(this.props.kom)
    return (
            <div className="kom">
                <form className="forma">
                <label htmlFor={komentar.ime}>Vase ime</label><input required className="inp" id={komentar.ime} value={komentar.ime||''} placeholder="Unesite Vase ime..."  type="text" onChange={e=>this.setState({
                   komentar:{...komentar,ime:e.target.value}})}/><br/>
                <label htmlFor={komentar.poruka}>Komentar : </label><textarea rows="4" cols="50" required className="inp" id={komentar.poruka} value={komentar.poruka||''} placeholder="Unesite Vas komentar..."  type="text" onChange={e=>this.setState({
                   komentar:{...komentar,poruka:e.target.value}})}/><br/>
                 <button type="submit" onClick={this.dodajKomentar}>Dodaj komentar</button><br/><br/>
                </form>

                {this.props.kom!==null&&this.props.kom.length!==0?<><div className="listaKomentara"><div className="ime">Ime korisnika</div><div className="kom1">Komentar</div><div className="datumKomentar">Datum</div></div>{
                this.props.kom.map(komentar=>
                (<div key={komentar.IDK} className="listaKomentara"><hr/><div className="ime"><p>{komentar.Ime}</p></div><div className="kom1"><p>{komentar.Komentar}</p></div><div className="datumKomentar">{komentar.Datum}</div><br/></div>)
                )}</>
                :
                <></>
                }
            </div>
    );
  }
}

export default Komentari;
