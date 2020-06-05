import React, { Component } from 'react'
import './card.scss'
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {filtriraj} from '../../actions/dodajUOmiljeno'
import {dodajUKorpu} from "../../actions/dodajUKorpu"
import {vratiBroj} from "../../actions/dodajUKorpu"
export class Omiljenocard extends Component {
    constructor(props){
        super(props)
    
        this.state = {
             
        }
    
    
    
    }
    dodaj=()=>{
        this.props.dodajUKorpu(this.props.product,this.props.korpa)
        this.props.vratiBroj(this.props.korpa)
        this.props.filtriraj(this.props.omiljeno,this.props.product)
    }
brisi=()=>{
    this.props.filtriraj(this.props.omiljeno,this.props.product)

}
    render() 
    {console.log(this.props.product)
        
        const {product} = this.props   
            return (
                <tbody>
                <tr>
                <td><div className="ArtikalSlika"><img src={product.image}/></div></td>
                <td><div className="ArtikalNaziv"><h5>{product.Naziv}</h5><h5>Proizvođač : {product.Proizvodjac}</h5>
                <button type="submit" className="dodajUKorpu" id={product.Naziv} onClick={this.dodaj}>DODAJ U KORPU<span id="korpa"><i className="fas fa-cart-plus"></i></span></button></div></td>
                <td><button type="button" id="" value="" className="brisi" onClick={this.brisi}><i className="far fa-window-close"></i></button></td>
                <td><div className="ArtikalCena"><p>Cena: {product.Cena.toLocaleString('en')}  RSD</p></div></td>
            </tr>
            </tbody>
            )
        }
         
    
}
const mapStateToProps = state =>({
   korpa:state.korpa.korpa,
   omiljeno:state.omiljeno.omiljeno
  })
export default connect(mapStateToProps,{vratiBroj,filtriraj,dodajUKorpu})(Omiljenocard);



