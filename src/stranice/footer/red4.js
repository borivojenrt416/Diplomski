import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import visa from './placanje/visa.png'
import mastercard from './placanje/mastercard.png'
import maestrocard from './placanje/maestrocard.png'
import dinacard from './placanje/dinacard.png'
import komercijalnabanka from './placanje/komercijalnabanka.png'
import raiffeisen from './placanje/raiffeisen.jpg'
import bancaintesa from './placanje/bancaintesa.png'
import wspay from './placanje/wspay.png'
import verifiedbyvisa from './placanje/verifiedbyvisa.jpg'
import mastercardsecurecode from './placanje/mastercardsecurecode.png'
import fb from './mreze/fb.png'
import instagram from './mreze/instagram.png'
import youtube from './mreze/youtube.png'
import twitter from './mreze/twitter.png'
import linkedin from './mreze/linkedin.png'

import './red4.scss'
export class Red4 extends Component {
    render() {
        return (
            <div className="red4">
                <div className="pl">
                    <Link to="#" className="placanje"><img src={visa} /></Link>
                    <Link to="#" className="placanje"><img src={mastercard} /></Link>
                    <Link to="#" className="placanje"><img src={maestrocard} /></Link>
                    <Link to="#" className="placanje"><img src={dinacard} /></Link>
                    <Link to="#" className="placanje"><img src={komercijalnabanka} /></Link>
                    <Link to="#" className="placanje"><img src={raiffeisen} /></Link>
                    <Link to="#" className="placanje"><img src={bancaintesa} /></Link>
                    <Link to="#" className="placanje"><img src={wspay} /></Link>
                    <Link to="#" className="placanje"><img className="veliko" src={verifiedbyvisa} /></Link>
                    <Link to="#" className="placanje"><img src={mastercardsecurecode} /></Link>
                    <div className="tekst">
                        <p>
                            Sve cene na ovom sajtu iskazane su u dinarima. PDV je uračunat u cenu.
                            Gigatron maksimalno koristi sve svoje resurse da Vam svi artikli na ovom sajtu
                             budu prikazani sa ispravnim nazivima specifikacija, fotografijama i cenama.
                             Ipak, ne možemo garantovati da su sve navedene informacije i
                             fotografije artikala na ovom sajtu u potpunosti ispravne
                    </p>
                    </div>
                </div>
                <div className="mreze">
                    <p>Pratite nas na društvenim mrežama :</p>
                    <Link to="#" className="mreza"><img src={fb} /></Link>
                    <Link to="#"className="mreza"><img src={instagram} /></Link>
                    <Link to="#" className="mreza"><img className="spec" src={youtube} /></Link>
                    <Link to="#" className="mreza"><img src={twitter} /></Link>
                    <Link to="#" className="mreza"><img src={linkedin} /></Link>
                </div>
                <div className="copyright">
                    <p>Copyright ©2019. Sva prava su zadržana.</p>
                </div>
            </div>
        )
    }
}

export default Red4
