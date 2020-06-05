import React, { Component } from 'react'
import './kupovinaCard.scss'
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {filtriraj} from '../../actions/dodajUKorpu'
import {vratiBroj,kolicinaputacena} from '../../actions/dodajUKorpu'
import {dodajUOmiljeno} from '../../actions/dodajUOmiljeno'
export class Kupovinacard extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          
        }
    }

brisi=()=>{
    
    // var s1 = document.getElementById("1".concat(JSON.stringify(this.props.product.naziv))).value
    // var s = this.props.product.cena
    // var a = JSON.stringify(s)
    // var d = a.replace('.','')
    // var k = JSON.parse(d)
    // var novac = parseInt(k)*parseInt(s1)
    this.props.remove(this.props.product.proizvod)
    // this.props.poz()
    
  
}
omiljeno=()=>{
    this.props.dodajUOmiljeno(this.props.product.proizvod,this.props.omiljeno)
}
ok=(e)=>{
this.props.kolicinaputacena(this.props.product.proizvod.Naziv,e.target.value,this.props.korpa)
this.props.poz()
}
    render() 
    
    {
        const {product} = this.props   
            return (
                <tbody>
                <tr>
                    <td><div className="ArtikalSlika"><img src={product.proizvod.image}/></div></td>
                    <td><div className="ArtikalNaziv"><h5>{product.proizvod.Naziv}</h5><h5>Proizvođač : {product.proizvod.Proizvodjac}</h5></div></td>
                    <td><div className="ArtikalKolicina"> <input id={"1".concat(JSON.stringify(product.proizvod.Naziv))} className="kolic" type="number"  value={this.props.product.kolicina} onChange={this.ok} min="1"/></div></td>
                    <td><button type="button" id="" value="" className="brisi" onClick={this.brisi}><i className="far fa-window-close"></i></button></td>
                    <td><div className="ArtikalCena"><p>Cena: {(product.proizvod.Cena*product.kolicina).toLocaleString().replace(',','.')}  RSD</p></div></td>
                </tr>
                </tbody>
            )
        }
         
    
}
const mapStateToProps = state =>({
   korpa:state.korpa.korpa,
   poruka:state.poruka,
   omiljeno:state.omiljeno.omiljeno,
   cena:state.cena.cena
  })
export default connect(mapStateToProps,{filtriraj,vratiBroj,dodajUOmiljeno,kolicinaputacena})(Kupovinacard);