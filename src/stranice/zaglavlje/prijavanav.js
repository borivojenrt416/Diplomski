import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './prijavanav.scss'
import { odjavi } from '../../actions/uloguj'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
export class Prijavanav extends Component {


    render() {
        if (this.props.korisnik === null || this.props.korisnik === undefined || this.props.korisnik[0] === undefined) {
            return (
                <div>
                    <div className="prijavanav">
                    <Link to="/kupovina" ><li>{this.props.cena? this.props.cena : 0}RSD<i className="fas fa-shopping-cart"></i></li></Link>
                        <Link to="/omiljeno"><li>{this.props.omiljeno.omiljeno.length>0?(<FavoriteIcon className="padding red"/>):(<FavoriteBorderIcon className="padding red"/>)}</li></Link>
                        <Link to="/login" ><li>Prijava</li></Link>
                    </div>
                </div>
            )
        }
        else {
            if(this.props.korisnik[0] !== undefined && this.props.korisnik[0] !== null)
            {
            if(this.props.korisnik[0].Status!=='admin')
            {
            return (
                <div>
                    <div className="prijavanav">
                        <Link to="/korisnik" ><li>{this.props.korisnik[0].ime}</li></Link>
                        <Link to="/kupovina"  ><li>{this.props.cena? this.props.cena : 0}RSD<i className="fas fa-shopping-cart"></i></li></Link>
                        <Link to="/omiljeno" ><li>{this.props.omiljeno.omiljeno.length>0?(<FavoriteIcon className="padding red"/>):(<FavoriteBorderIcon className="padding red"/>)}</li></Link>
                        <Link to="/login" ><li onClick={this.props.odjavi}>Odjava</li></Link>
                    </div>
                </div>
            )
            } 
            else
            {
                return(
                <div>
                <div className="prijavanav">
                    <Link to="/login" ><li onClick={this.props.odjavi}>Odjavi se</li></Link>
                </div>
            </div>
                );
            }        
           }

        }
    }
}
const mapStateToProps = state => ({
    korisnik: state.korisnik.korisnik,
    broj: state.broj.broj,
    cena: state.cena.cena,
    omiljeno: state.omiljeno
})

export default connect(mapStateToProps, {odjavi})(Prijavanav)
