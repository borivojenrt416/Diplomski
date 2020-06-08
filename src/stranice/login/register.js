import React,{Component} from 'react'
import './login.scss'
import {Link, Redirect} from 'react-router-dom'
import {oznaci} from "../../actions/tipAkcija"
import {connect} from 'react-redux'
import SimpleReactValidator from 'simple-react-validator';
import Popup from 'reactjs-popup';
class Register extends Component{
constructor(props) {
    super(props);
    this.state = {
        dodat:false,
        red:false,
         korisnik:{
             ime:undefined,
             prezime:undefined,
             email:undefined,
             sifra:undefined,
             datumRodjenja:undefined,
             telefon:undefined
         },
         vraceno:0,
         disabled:true
    }
}

componentWillMount(){
    this.props.oznaci("");
    this.validator = new SimpleReactValidator({
        element: (message) => <div className="errorMessageRegister">{message}</div>,
        autoForceUpdate: this,
        messages: { alpha:'Samo slova su dozvoljena!',required: 'Obavezno polje!', min: 'Minimum 4 karaktera!', max: 'Maksimum 25 karaktera!'}});
          
        this.validatorForEmail = new SimpleReactValidator({
            element: (message) => <div className="errorMessageRegister">{message}</div>,
            autoForceUpdate: this,
            messages: {required: 'Obavezno polje!', min: 'Minimum 5 karaktera!', max: 'Maksimum 50 karaktera!', email: 'Neispravan email!'}});
        
            this.validatorForPassword = new SimpleReactValidator({
                element: (message) => <div className="errorMessageRegister">{message}</div>,
                autoForceUpdate: this,
                messages: { alpha_num:'Samo brojevi i slova su dozvoljena!',required: 'Obavezno polje!', min: 'Minimum 4 karaktera!', max: 'Maksimum 25 karaktera!' }});

        this.validatorForTelephone = new SimpleReactValidator({
            element: (message) => <div className="errorMessageRegister">{message}</div>,
            autoForceUpdate: this,
            messages: { numeric:'Dozvoljeni samo brojevi: XXXXXXXXX!',required: 'Obavezno polje!', min: 'Minimum 9 karaktera!', max: 'Maksimum 10 karaktera!'}});
    
            this.validator.showMessageFor('ime');
            this.validator.showMessageFor('prezime');
            this.validatorForEmail.showMessageFor('email');
            this.validatorForPassword.showMessageFor('sifra');
            this.validatorForTelephone.showMessageFor('telefon')
    }
dodajKorisnika=e=>{
    e.preventDefault()
    const {korisnik} = this.state;
    if(korisnik !== undefined && korisnik !== null && korisnik.ime===""||korisnik.prezime===""||korisnik.sifra===""||korisnik.email===""||korisnik.telefon==="")
    {
            alert("POPUNITE SVA POLJA!")
    }
    else{
        if(this.state.korisnik.telefon.match("[0-9]{9,10}"))
                {
                    var requestEmail={
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                         body: JSON.stringify({ email:korisnik.email })
                    }
                    fetch(`http://localhost:4000/pretraziKorisnika/`,requestEmail)
                    .then(response=>response.json())
                    .then(broj=>{
                        if(broj.data===0)
                        {
                            var request={
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                 body: JSON.stringify({ ime:korisnik.ime, prezime:korisnik.prezime, email:korisnik.email, sifra:korisnik.sifra, telefon:korisnik.telefon })
                            }
                            fetch(`http://localhost:4000/korisnici/dodaj/`, request)
                            this.setState({
                                dodat:true
                            })
                        }
                        else
                        {
                            alert("Korisnik sa zadatom email adresom je već registrovan!")
                        }
                      })
                }    
                else{
                    alert("UNESITE PRAVILNO BROJ TELEFONA!")
                }  
      }
    }
    

    changeKorisnik=(e)=>{
        const {korisnik} = this.state;
        if(e.target.id=='ime')
        {
            this.setState({
                korisnik:{...korisnik,ime:e.target.value}
            })
        }
        if(e.target.id=='prezime')
        {
            this.setState({
                korisnik:{...korisnik,prezime:e.target.value}
            })
        }
        if(e.target.id=='email')
        {
            this.setState({
                korisnik:{...korisnik,email:e.target.value}
            })
        }
        if(e.target.id=='sifra')
        {
            this.setState({
                korisnik:{...korisnik,sifra:e.target.value}
            })
        }
        if(e.target.id=='telefon')
        {
            this.setState({
                korisnik:{...korisnik,telefon:e.target.value}
            })
        }
    }
    isValid(){
        if(this.validator.fieldValid('ime')&&this.validator.fieldValid('prezime')&&
        this.validatorForEmail.fieldValid('email')&&this.validatorForTelephone.fieldValid('telefon')&&this.validatorForPassword.fieldValid('sifra'))
        {
            this.setState({
                disabled:false
            })
                   
        }
        else{
            this.setState({
                disabled:true
            })
        }
    }

    twoFunctions=(e)=>{
        this.changeKorisnik(e);
        this.isValid();
    }

render(){
 const{korisnik} = this.state;
if(this.state.dodat==true )
{
    return(
        <div>
        <Popup open={this.state.dodat} closeOnDocumentClick={false} modal>
        {close => (
          <div className="modal">
            <div> REGISTRACIJA </div><br/>
            <div className="content">
              {" "}
            Poštovani,<br/>
            Uspešno ste se registrovali na sajt!
            </div><br/>
            <div className="actions">
    
              <button
                className="button"
                onClick={() => {this.setState({
                    red:true,
                    dodat:false
                })
                  close();
                }}
              >
               OK
              </button>
            </div>
          </div>
        )}
      </Popup></div>
    )
}
else if(this.state.red==true)
{
    return( <Redirect to="/" />)
   
}
{
    return(
        <div className="stil">
            
        <div className="levoL">
        <h2>Registracija fizičkog lica</h2>
        <p>Electroshop se obavezuje na privatnost Vaših ličnih podataka koji će biti korišćeni isključivo u svrhe kupovine na našem web sajtu.</p>
        <p>Upoznajte se sa<Link className="uk" to="#"> uslovima korišćenja.</Link></p>
        <h5>Šta dobijam registracijom?</h5>
        <p><i className="far fa-check-circle"></i> Omogućavate sebi brzu i jednostavnu kupovinu.</p>
        <p><i className="far fa-check-circle"></i> Možete pratiti istorijat kupovine.</p>
        <p><i className="far fa-check-circle"></i> Možete ostvaljati komentare.</p>
        <p><i className="far fa-check-circle"></i> Dobijate povremene pogodnosti za registrovane kupce.</p>
    </div>
    <div className="desnoL">
    <form className="forma">
               <label htmlFor={korisnik.ime}>Vaše ime</label><input required className="inp" id="ime" placeholder="Unesite Vaše ime..."  type="text" onChange={this.twoFunctions}/> {this.validator.message('ime', korisnik.ime, 'required|min:3|max:25|alpha')}<br/>
                   <label htmlFor={korisnik.prezime}>Vaše prezime</label><input required className="inp"  id="prezime" placeholder="Unesite Vaše prezime..." type="text" onChange={this.twoFunctions}/>{this.validator.message('prezime', korisnik.prezime, 'required|min:3|max:25|alpha')}<br/>
                <label htmlFor={korisnik.email}>Vaš email</label>
                <input required className="inp"  id="email" placeholder="Unesite Vaš email..." type="email" onChange={this.twoFunctions}/>{this.validatorForEmail.message('email', korisnik.email, 'required|min:5|max:50|email')}<br/>
               <label htmlFor={korisnik.sifra}>Vaša sifra</label><input required className="inp"  id="sifra" placeholder="Unesite lozinku..." type="text" onChange={this.twoFunctions}/>{this.validatorForPassword.message('sifra', korisnik.sifra, 'required|min:4|max:25|alpha_num')}<br/>
               <label htmlFor={korisnik.telefon}>Vaš telefon</label><input required className="inp"  id="telefon" placeholder="Unesite Vaš broj telefona..." type="text" onChange={this.twoFunctions}/>{this.validatorForTelephone.message('telefon', korisnik.telefon, 'required|min:9|max:10|numeric')}<br/>
               <Link className={this.state.disabled?"registrationDisabled":"lgn"} to="#"><button disabled={this.state.disabled} id="registracija" className={this.state.disabled?"btnDsbld":""} type="submit" onClick={this.dodajKorisnika}>Registruj se</button></Link><br/><br/>
               {/* <button type="submit" onClick={this.dodajKorisnika}><Link className="lgn register" to="/register">Registruj se</Link></button><br/><br/> */}
    </form>
    </div>
    </div>
    );
}
}
}

const mapDispatchToProps = (dispatch) =>({
    oznaci:(tip)=>dispatch(oznaci(tip))
  })

export default  connect(mapDispatchToProps,{oznaci})(Register);