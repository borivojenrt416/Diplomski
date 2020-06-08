import React, { Component } from 'react'
import { connect } from 'react-redux'
import './dostava.scss'
import SimpleReactValidator from 'simple-react-validator';

export class Narucilac extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validate: true

        }

    }

    componentWillMount(){
      this.validator = new SimpleReactValidator({
        element: (message) => <div className="errorMessage">{message}</div>,
        autoForceUpdate: this,
        messages: { alpha:'Samo slova su dozvoljena!',required: 'Obavezno polje!', min: 'Minimum 3 karaktera!', max: 'Maksimum 40 karaktera!', email: 'Neispravan email!'}});
    
        this.validatorForTelephone = new SimpleReactValidator({
            element: (message) => <div className="errorMessage">{message}</div>,
            autoForceUpdate: this,
            messages: { numeric:'Dozvoljeni samo brojevi: XXXXXXXXX!',required: 'Obavezno polje!', min: 'Minimum 9 karaktera!', max: 'Maksimum 10 karaktera!'}});
    
            this.validator.showMessageFor('ime');
            this.validator.showMessageFor('prezime');
            this.validator.showMessageFor('email');
            this.validatorForTelephone.showMessageFor('telefon')
    }


    changeKupac=(e)=>{
        this.props.changeKupac(e.target.value,e.target.className)
    }

    isValid(){
        this.props.changeDisabled(true)
        if(this.validator.fieldValid('ime')&&this.validator.fieldValid('prezime')&&
        this.validator.fieldValid('email')&&this.validatorForTelephone.fieldValid('telefon'))
        {
           this.props.changeDisabled(false);
        }
    }

    twoCalls = e => {
        this.changeKupac(e)
        this.isValid()
      }
        render()
        {
            const { kupac } = this.props;
            const { validators } = this.props;
            if(kupac)
                return (
                    <div>
                        <div className="nazivKomponente"><h2 className="nazivKomponente">Naručilac</h2></div>
                        <div className="divForm">
                            <form className="forma">
                                <label htmlFor="ime">Vaše ime*</label><input required value={this.props.kupac.ime?this.props.kupac.ime:''} className="ime" id="ime" placeholder="Unesite Vaše ime..." type="text" onChange={this.twoCalls} />
                                {this.validator.message('ime', kupac.ime, 'required|min:3|max:40|alpha')}
                                <label htmlFor={kupac.prezime}>Vaše prezime*</label><input required className="prezime" value={this.props.kupac.prezime?this.props.kupac.prezime:''}  id={kupac.prezime}  placeholder="Unesite Vaše prezime..." type="text" onChange={this.twoCalls} />
                                {this.validator.message('prezime', kupac.prezime, 'required|min:3|max:40|alpha')}
                                <label htmlFor={kupac.email}>Vaš email*</label>
                                <input required className="email" id={kupac.email} value={this.props.kupac.email?this.props.kupac.email:''}  placeholder="Unesite Vaš email..." type="email" onChange={this.twoCalls}  />
                                {this.validator.message('email', kupac.email, 'required|min:3|max:40|email')}
                                <label htmlFor={kupac.telefon}>Vaš broj telefona*</label><input required value={this.props.kupac.telefon?this.props.kupac.telefon:''} className="telefon" id={kupac.telefon} placeholder="Unesite Vaš broj telefona..." type="text" onChange={this.twoCalls} />
                                {this.validatorForTelephone.message('telefon', kupac.telefon, 'required|numeric|min:9|max:10')}
                            </form>
                        </div>
                    </div>
    
                );
          
            }
           
        }

        const mapStateToProps = state => ({
            korisnik: state.korisnik.korisnik
        })
        
        export default connect(mapStateToProps)(Narucilac)