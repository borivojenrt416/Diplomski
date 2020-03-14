import React,{Component} from 'react'
import {
    Link,
  } from "react-router-dom";
class Error extends Component{

    render(){
        return(
            <div>
            <div className="prazno">
              <p>Tražena stranica ne postoji!</p>
              <p><Link className="back" to="/home">Vrati se na pocetnu stranu</Link></p>
            </div>

          </div>
        );
    }
}

export default Error;