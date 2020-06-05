import React, { Component } from 'react'
import './red3.scss'
export class Red3 extends Component {
    render() {
        return (
            <div>
                <div className="red3">
                    <div className="k13">
                        <h2><i className="fas fa-phone-alt"></i>CALL CENTAR</h2>
                        <div className="levo1">
                            <h4>Fizička lica</h4>
                            <p>011 44 14 000</p>
                            <h4>Pozivi sa mobilne mreže</h4>
                            <p>066 6 67 67 67</p>
                        </div>
                        <div className="desno1">
                            <h4>Pravna lica</h4>
                            <p>011 44 14 010</p>
                        </div>
                    </div>
                    <div className="k23">
                        <h2>Prijavite se na Newsletter</h2>
                        <input type="email" placeholder="Unesite Vas email..." /><button type="submit">Prijavite se</button>
                    </div>
                    <div className="k33">
                        <h4>RADNO VREME CALL CENTRA</h4>
                        <p>Ponedeljak - Petak: od 08h do 20h</p>
                        <p>Subota: od 09h do 17h</p>
                        <p>Nedelja: neradni dan</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Red3
