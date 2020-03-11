import React, { Component } from 'react'
import './red1.scss'
export class Red1 extends Component {
    render() {
        return (
            <div className="red">
                <div className="k1">
                <h1>📻</h1>
                <h2>ONLINE RADIO</h2>
                <p>Svakim danom 00-24h</p>
                </div>
                <div className="k2">
                <h1><i className="fas fa-truck"></i></h1>
                <h2>ISPORUKA</h2>
                <p>Na teritoriji cele SRBIJE svakim radnim danom</p>
                </div>
                <div className="k3">
                <h1><i className="fas fa-book-open"></i></h1>
                <h2>KATALOG</h2>
                <p>Novi katalog svakih 15 dana</p>
                </div>
               
            </div>
        )
    }
}

export default Red1;
