import React, { Component } from 'react'
import './card.scss'
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { dodajUOmiljeno } from "../../actions/dodajUOmiljeno"
import { vratiBroj, dodajUKorpu } from "../../actions/dodajUKorpu"
export class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    dodaj = () => {
        this.props.dodajUKorpu(this.props.product, this.props.korpa)
        this.props.vratiBroj(this.props.korpa)
    }
    omiljeno = () => {
        this.props.dodajUOmiljeno(this.props.product, this.props.omiljeno)
    }
    render() {
        const { product } = this.props
        return (
            <div>
                <div className="card" >
                    <div className="buttonForFav">
                        <button type="button" id="" value="" className="omiljeno" onClick={this.omiljeno}><i className="far fa-heart"></i></button>
                    </div>
                    <Link className="linkud" to={"/product/" + product.IdAll + "/" + product.ID}>
                        <div className="bezfloat">
                            <img src={product.image} />
                            <div className="Naziv">
                                <h6>{product.Naziv}</h6>
                            </div>
                        </div>
                    </Link>
                    <div className="linija">
                        <hr />
                        <p className="cena">Cena: {product.Cena}  RSD</p>
                    </div>
                    <button type="submit" className="dodajUKorpu" id={product.naziv} onClick={this.dodaj}>
                        DODAJ U KORPU
                        <span id="korpa">
                            <i className="fas fa-cart-plus"></i>
                        </span>
                    </button>
                </div>
            </div>
        )
    }


}
const mapStateToProps = state => ({
    korpa: state.korpa.korpa,
    poruka: state.poruka,
    omiljeno: state.omiljeno.omiljeno
})
export default connect(mapStateToProps, { dodajUKorpu, vratiBroj, dodajUOmiljeno })(Card);