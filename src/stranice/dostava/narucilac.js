import React, { Component } from 'react'
import { connect } from 'react-redux'
import './dostava.scss'
export class Narucilac extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //     korisnik: {
            //         ime: undefined,
            //         prezime: undefined,
            //         email: undefined,
            //         sifra: undefined,
            //         datumRodjenja: undefined,
            //         telefon: undefined
            //     },
            //     kolicine: []
            // };
        }

    }

    changeKupac=(e)=>{
        console.log(e.target.value)
        console.log(e.id)
        console.log(e.target)
        console.log(e.target.className)
        this.props.changeKupac(e.target.value,e.target.className)
    }

        render()
        {
            const { kupac } = this.props;
            if(kupac)
            console.log(kupac)
            // if(kupac.ime===undefined||kupac.prezime===undefined||kupac.email===undefined||kupac.telefon===undefined)
            // {
                return (
                    <div>
                        <div className="nazivKomponente"><h2 className="nazivKomponente">Narucilac</h2></div>
                        <div className="divForm">
                            <form className="forma">
                                <label htmlFor={kupac.ime}>Vase ime*</label><input required className="ime" id={kupac.ime}  placeholder="Unesite Vase ime..." type="text" onChange={this.changeKupac} /><br />
                                <label htmlFor={kupac.prezime}>Vase prezime*</label><input required className="prezime" id={kupac.prezime}  placeholder="Unesite Vase prezime..." type="text" onChange={this.changeKupac} /><br /><br />
                                <label htmlFor={kupac.email}>Vas email*</label>
                                <input required className="email" id={kupac.email}  placeholder="Unesite Vas email..." type="email" onChange={this.changeKupac}  />
                                <label htmlFor={kupac.telefon}>Vas broj telefona*</label><input required className="telefon" id={kupac.telefon}  placeholder="Unesite Vas broj telefona..." type="text" onChange={this.changeKupac} /><br /><br />
                            </form>
                        </div>
                    </div>
    
                );
            // }
            // else
            //     {
            //         return(
                    
            //             <div>
            //             <div className="nazivKomponente"><h2 className="nazivKomponente">Narucilac</h2></div>
            //             <div className="divForm">
            //                 <form className="forma">
            //                 <h4>Ime : {kupac.ime}</h4>
            //                 <h4>Prezime : {kupac.prezime}</h4>
            //                 <h4>Email : {kupac.email}</h4>
            //                 <h4>Telefon : {kupac.telefon}</h4>
            //                 </form>
            //             </div>
            //         </div>
    
            //         );
            //     }
            }
           
        }

        const mapStateToProps = state => ({
            korisnik: state.korisnik.korisnik
        })
        
        export default connect(mapStateToProps)(Narucilac)