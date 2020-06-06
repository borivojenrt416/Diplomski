import React, { Component } from 'react'
import './dostava.scss'
import {Link} from 'react-router-dom'
export class LicnoPreuzimanje extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prodavnica:'Dalmatinska 17, Beograd'

        };
    }

    changeDostava = (e) => {
        this.setState({
            dostava: e.target.value
        })
    }

    updateState=(e)=>{
        this.setState({
            prodavnica:e.target.value
        })
    }

    render() {
        return (
            <div>
                {/* <div className="divForm"> */}
                <form className="forma">
                    <label htmlFor="Prodavnica">Izaberite prodavnicu*</label>
                    <Link to="#" className="slct"><select id="Prodavnica" onChange={this.updateState}>
                        <option value="Dalmatinska 17, Beograd" >Dalmatinska 17, Beograd</option>
                    </select></Link><br /><br />
                </form>
                {/* </div> */}
            </div>

        );

    }

}




export default LicnoPreuzimanje;