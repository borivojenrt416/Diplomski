import React, { Component } from 'react'
import { connect } from 'react-redux'
import { vratiBroj, racunaj } from "../../actions/dodajUKorpu"
import {
    Link,
} from "react-router-dom";

import './dostava.scss'
export class NacinPlacanja extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

     changeNacinPlacanja=(e)=>{
        console.log(e.target.value)
         this.props.changeNacinPlacanja(e.target.value)
     }

    render() {
        const {korisnik} = this.state
                    return (
   <div>
                    <div className="nazivKomponente"><h2 className="nazivKomponente">Način plaćanja</h2></div>
                    <div className="divForm">
                    <div className="inputRadio">
                        <input type="radio" id="Kešom u prodavnici" name="NacinPlacanja" defaultChecked value="Kešom u prodavnici" onClick={this.changeNacinPlacanja}/>
                        <label htmlFor="Kešom u prodavnici">Kešom u prodavnici</label><br/><br/>
                        <input type="radio" id="Uplatnica / Faktura" name="NacinPlacanja" value="Uplatnica Faktura" onClick={this.changeNacinPlacanja}/>
                        <label htmlFor="Uplatnica / Faktura">Uplatnica / Faktura</label><br/><br/>
                        <input type="radio" id="Pouzećem, dostavljaču kurirske službe" name="NacinPlacanja" value="Pouzećem, dostavljaču kurirske službe" onClick={this.changeNacinPlacanja}/>
                        <label htmlFor="Pouzećem, dostavljaču kurirske službe">Pouzećem, dostavljaču kurirske službe</label><br/><br/>
                        <input type="radio" id="Na 12 rata karticom Banke Intesa" name="NacinPlacanja" value="Na 12 rata karticom Banke Intesa" onClick={this.changeNacinPlacanja}/>
                        <label htmlFor="Na 12 rata karticom Banke Intesa">Na 12 rata karticom Banke Intesa</label><br/><br/>
                        </div>
                    </div>
                    </div>

            );

        }

    }




export default NacinPlacanja;