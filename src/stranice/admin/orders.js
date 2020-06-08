import React, { Component } from "react";
import "./admin.scss";
import Popup from 'reactjs-popup'
import { trackPromise } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import { usePromiseTracker } from "react-promise-tracker";

const LoadingIndicator = props => {
const { promiseInProgress } = usePromiseTracker();
  return (
      promiseInProgress && 
      <div
      style={{
      width: "100%",
      height: "100",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
      }}
      >
      <Loader type="TailSpin" color="#ad0000" height="100" width="100" />
      </div>
  );  
  }
export class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kupljeniProizvodi:[],
      show:false
    };
  }

  detalji=e=>{
    if(this.state.show==true)
    {
      this.setState({
        show:false
      })
    }
    var idn = e.target.value;
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idn:e.target.value })
  };
  trackPromise(
    fetch(`http://localhost:4000/kupljeniProizvodi/`,request)
    .then(response=>response.json())
    .then(json=>{
      {
      this.setState({
        kupljeniProizvodi: json.data,
        show:true
      })}}
    ))
  }
  

  render() {
    return (
      <div>
      <Popup open={this.state.show} >
      {close => (
        <div className="modal">
          <div className="header"> Detalji porudžbine </div><br/><br/>
          <LoadingIndicator />
          <div className="content">
            {" "}
            <table className="tabelaDetalji">
            <thead>
              <tr>
                <th>Naziv proizvoda</th><th>Slika proizvoda</th><th>Količina</th><th className="hideUser">Datum</th><th>Cena</th>
              </tr>
            </thead>
         {this.state.kupljeniProizvodi.map(k=>(
           <tbody  key={k.IDKP}>
            <tr>
            <td>{k.Naziv.toString().split("\"")}</td>
            <td><img className="detaljiSlika" src={k.Slika}/></td>
            <td>{k.Kolicina}</td>
            <td className="hideUser">{new Date(k.Datum).toLocaleDateString()}</td>
            <td>{k.UkupnaCena.toString().replace(",",".")}</td>
          </tr>
          </tbody>
         ))}
         </table>
          </div>
          <div className="actions">
  
            <button
              className="button"
              onClick={() => {
                this.setState({
                  show:false
                })
                close();
              }}
            >
             Cancel
            </button>
          </div>
        </div>
      )}
    </Popup>
        <table className="opisnaTabela">
        <thead>
          <tr>
            <th>ID NARUDZBINE</th><th className="hideUser">ID Adrese</th><th className="hideUser">Datum</th><th>Status</th><th className="hideUser">ID Korisnika</th><th>Racun</th><th className="hideUser">Nacin placanja</th><th>Odobriti?</th><th>Detalji</th>
          </tr>
        </thead>
        <tbody>
        {this.props.orders.map(o=>(
          
          <tr key={o.ID}>
            <td>{o.ID}</td>
            <td className="hideUser">{o.IDA!=null?o.IDA:"Nema adrese"}</td>
            <td  className="hideUser">{new Date(o.Datum).toLocaleDateString()}</td>
            <td>{o.Status?"Odobreno":"Neodobreno"}</td>
            <td className="hideUser">{o.IDK}</td>
            <td>{o.Racun}</td>
            <td className="hideUser">{o.NacinPlacanja}</td>
            <td>{o.Status==true?<button disabled={true} className="disabledApprove" value={o.ID} type="submit" onClick={this.props.approve}>OK</button>:<button className="removeUser" value={o.ID} id={o.IDN} type="submit" onClick={this.props.approve}>OK</button>}</td>
            <td>
              <button className="removeUser" value={o.IDN} type="submit" onClick={this.detalji}>Detalji</button></td>
          </tr>
        ))}
        </tbody>
        </table>
        </div>
    );
  }
}

export default Orders;
