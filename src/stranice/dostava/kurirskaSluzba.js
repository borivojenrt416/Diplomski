import React, { Component } from 'react'
import './dostava.scss'
export class KurirskaSluzba extends Component {
    constructor(props) {
        super(props);

    }

    changeDostava=(e)=>{
        console.log(e.target.value,e.target.className)
        this.props.changeNacinDostave(e.target.value,e.target.className)

    }

    render() {
        return (
            <div>
                    {/* <div className="divForm"> */}
                        <form className="forma">
                            <label htmlFor="adresa">Adresa*</label><input required className="adresa" id="adresa"  placeholder="Unesite adresu..." type="text" onChange={this.changeDostava} /><br />
                            <label htmlFor="grad">Grad*</label><input required className="grad" id="grad"  placeholder="Unesite grad..." type="text" onChange={this.changeDostava} /><br />
                          <label htmlFor="postanskiBroj">Poštanski broj*</label><input required className="postanskiBroj" id="postanskiBroj"  placeholder="Unesite poštanski broj..." type="text" onChange={this.changeDostava} /><br /><br/>
                        </form>
                    {/* </div> */}
            </div>

        );

    }

}




export default KurirskaSluzba;