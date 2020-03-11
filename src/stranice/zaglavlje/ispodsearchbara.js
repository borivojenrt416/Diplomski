import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './ispodsearchbara.scss'
export class Ispodsearchbara extends Component {
    render() {
        return (
            <div className="iss">
                <div className="i1">
                
                <h1><i className="fas fa-money-check-alt"></i></h1>
                <div className="op">
                <p>OSVOJITE I DO 50% POPUSTA</p>
                <Link to="#" className="l">Pogledajte i kako</Link>
                </div>
                </div>
                <div className="i1">
                <h1><i className="far fa-credit-card"></i></h1>
                <div className="op">
                <p>KUPOVINA NA RATE</p>
                <Link to="#" className="l">Saznajte više</Link>
                </div>
                </div>
                <div className="i1">
                <h1><i className="fas fa-truck"></i></h1>
                <div className="op">
                <p>ISPORUKA</p>
                <Link to="#" className="l">Saznajte više</Link>
                </div>
                </div>
               
            </div>
        )
    }
}

export default Ispodsearchbara;
