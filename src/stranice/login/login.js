import React,{Component} from 'react'
import './login.scss'
import {Link} from 'react-router-dom'
import fb from '../footer/mreze/fb.png'
import linkedin from '../footer/mreze/linkedin.png'
import twitter from '../footer/mreze/twitter.png'
import {connect} from 'react-redux'
import {uloguj} from "../../actions/uloguj"
import {uzmiTip} from "../../actions/tipAkcija"

class LogIn extends Component{
constructor(props) {
    super(props)

    this.state = {
         korisnik:{
             email:"",
             sifra:""
         },
    }
}
componentWillMount(){
    this.props.uzmiTip("");
    console.log("pozvano")
    console.log(this.props.tip);
    localStorage.setItem("tip","");
}
render(){
    const {korisnik} = this.state
    return(
            <div className="stil">
                <div className="levoL">
                <h2>Nemate nalog? Registrujte se</h2>
                <p>Kreiranjem naloga bićete u mogućnosti da:</p>
                <p><i className="far fa-check-circle"></i> prolazite brže kroz proces plaćanja,</p>
                <p><i className="far fa-check-circle"></i> da koristite više adresa za isporuku,</p>
                <p><i className="far fa-check-circle"></i> pregledate i pratite Vaše porudžbine itd.</p>
                <button type="submit" onClick={()=>{alert("REG")}}><Link className="reg" to="/register">Kreiraj korisnički nalog</Link></button>
            </div>
            <div className="desnoL">
                <h2>Registrovani korisnici</h2>
                <p>Ako kod nas imate korisnički nalog, molimo ulogujte se.</p>
            <form className="forma">
                <label htmlFor={korisnik.email}>Email adresa</label>
                <input placeholder="Unesite Vaš email..." className="inp" type="email" value={korisnik.email} onChange={e=>this.setState({
                   korisnik:{...korisnik,email:e.target.value}})}/><br/>
                 <label htmlFor={korisnik.sifra}>Lozinka</label>
                <input placeholder="Unesite Vašu lozinku..." className="inp" type="password" value={korisnik.sifra} onChange={e=>this.setState({
                   korisnik:{...korisnik,sifra:e.target.value}})}/><br/>
                  <Link className="lgn" to="/"><button type="submit" onClick={()=>this.props.uloguj(this.state.korisnik.email,this.state.korisnik.sifra)}>Prijavi se</button></Link><br/><br/>
            </form>
            <hr/>
            <div className="drm">
            <p>Prijavite se koristeći naloge društvenih mreža:</p>
            <Link to="#" className="mreza"><img src={fb}/></Link>
            <Link to="#" className="mreza"><img src={twitter}/></Link>
            <Link to="#" className="mreza"><img src={linkedin}/></Link>
            </div>
            </div>
            </div>
    );
}
}
const mapDispatchToProps = (dispatch) =>({
    uloguj:(email,lozinka)=>dispatch(uloguj(email,lozinka))
  })
export default connect(mapDispatchToProps,{uloguj, uzmiTip})(LogIn);