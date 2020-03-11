import React, { Component } from "react";
import "./admin.scss";
export class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  

  render() {
      console.log(this.props.orders)
    return (
        <table className="opisnaTabela">
        <thead>
          <tr>
            <th>ID NARUDZBINE</th><th>ID Adrese</th><th className="hideUser">Datum</th><th>Status</th><th className="hideUser">ID Korisnika</th><th>Racun</th><th className="hideUser">Nacin placanja</th><th>Odobriti?</th>
          </tr>
        </thead>
        <tbody>
        {this.props.orders.map(o=>(
          <tr>
            <td>{o.IDN}</td>
            <td>{o.IDA!=null?o.IDA:"Nema adrese"}</td>
            <td  className="hideUser">{o.Datum}</td>
            <td>{o.Status?"Odobreno":"Neodobreno"}</td>
            <td className="hideUser">{o.IDK}</td>
            <td>{o.Racun}</td>
            <td className="hideUser">{o.NacinPlacanja}</td>
            <td>{o.Status==false?<button className="removeUser" value={o.IDN} type="submit" onClick={this.props.approve}>OK</button>:<button disabled className="removeUser" value={o.IDN} type="submit" onClick={this.props.approve}>OK</button>}</td>
          </tr>
        ))}
        </tbody>
        </table>
    );
  }
}

export default Orders;
