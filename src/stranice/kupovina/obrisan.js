import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {vratiBroj} from '../../actions/dodajUKorpu'
import '../product/product.scss'
class Obrisan extends Component{
    constructor(props){
        super(props);
    
        this.state={
                objekat:null
        }
    }

    componentWillMount(){
        fetch(`http://localhost:4000/korisnici/proizvod/${this.props.match.params.id}`)
        .then(response=>response.json())
        .then(vrati=>{
            this.setState({
                objekat:vrati.data[0]
            })
        })
    }

render(){
    if(this.state.objekat!==undefined&&this.state.objekat!==null)
    {
    return(
<div className="proizvod">
    <div className="levaStrana">
    <p className="nazivpr">
        {this.state.objekat.naziv}
        </p>
    <div className="img">
        <img src={this.state.objekat.img} />
    </div>
    </div>
    <div className="desnaStrana">
        <p><span id="besplatno">Opis proizvoda : </span> {this.state.objekat.opis}</p>
        <p><span id="besplatno">Cena proizvoda : </span> {this.state.objekat.cena}<span>RSD</span></p>
        <hr/>
        <br/><br/>
                <div className="dugmesredina">
                <p>Uspešno ste uklonili proizvod iz korpe</p>
                <Link className="kr" to="/kupovina"><button type="submit" className="kupi" id={this.state.objekat.naziv} >VRATI SE U <i className="fas fa-shopping-cart"></i></button></Link>
                </div>   </div>
</div>
    );
    }
  else
  {
      return(
        <div className="nema">
        <p>Poštovani korisniče, trenutno nemamo traženi proizvod u bazi!</p>
        <p>Molimo Vas da se<Link className="n" to="/"> vratite na početnu stranu. </Link>Hvala</p>
        </div>)
  }
}
}
const mapStateToProps = state =>({
    korpa:state.korpa.korpa
   })

export default connect(mapStateToProps,{vratiBroj})(Obrisan);