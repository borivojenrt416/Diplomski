import React,{Component} from 'react'
import './login.scss'
import {Link} from 'react-router-dom'
class Register extends Component{
constructor(props) {
    super(props);
    this.state = {
         korisnik:{
             ime:undefined,
             prezime:undefined,
             email:undefined,
             sifra:undefined,
             datumRodjenja:undefined,
             telefon:undefined
         },
         vraceno:0
    }
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
                    fetch(`http://localhost:4000/korisnici/pretrazi/${korisnik.email}`)
                    .then(response=>response.json())
                    .then(broj=>{
                        if(broj.data===0)
                        {
                            fetch(`http://localhost:4000/korisnici/dodaj/${korisnik.ime}/${korisnik.prezime}/${korisnik.email}/${korisnik.sifra}/${korisnik.telefon}`)
                            alert("USPESNO STE SE REGISTROVALI NA SAJT")
                        }
                        else
                        {
                            alert("KORISNIK VEĆ POSTOJI")
                        }
                      })
                }    
                else{
                    alert("UNESITE PRAVILNO BROJ TELEFONA!")
                }  
      }
    }
    


render(){
 const{korisnik} = this.state;

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
               <label htmlFor={korisnik.ime}>Vase ime</label><input required className="inp" id={korisnik.ime} value={korisnik.ime||''} placeholder="Unesite Vase ime..."  type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,ime:e.target.value}})}/><br/>
                   <label htmlFor={korisnik.prezime}>Vase prezime</label><input required className="inp" id={korisnik.prezime} value={korisnik.prezime||''} placeholder="Unesite Vase prezime..." type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,prezime:e.target.value}
               })}/><br/>
                <label htmlFor={korisnik.email}>Vas email</label>
                <input required className="inp" id={korisnik.email} value={korisnik.email||''} placeholder="Unesite Vas email..." type="email" onChange={e=>this.setState({
                   korisnik:{...korisnik,email:e.target.value}
               })}/>
               <label htmlFor={korisnik.sifra}>Vasa sifra</label><input required className="inp" id={korisnik.sifra} value={korisnik.sifra||''} placeholder="Unesite lozinku..." type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,sifra:e.target.value}
               })}/>
               <label htmlFor={korisnik.telefon}>Vas telefon</label><input required className="inp" id={korisnik.telefon} value={korisnik.telefon||''} placeholder="Unesite Vas broj telefona..." type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,telefon:e.target.value}
               })}/><br/>
               <button type="submit" onClick={this.dodajKorisnika}><Link className="lgn" to="/register">Registruj se</Link></button><br/><br/>
    </form>
    </div>
    </div>
    );
}
}
export default Register;