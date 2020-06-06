import React, { Component } from "react";
import "./admin.scss";
import uuid from 'node-uuid'
export class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  

  render() {
    return (
        <table className="opisnaTabela">
        <thead>
          <tr>
            <th>ID KORISNIKA</th><th>Ime</th><th>Prezime</th><th>Email</th><th className="hideUser">Šifra</th><th className="hideUser">Broj telefona</th><th>Remove user</th>
          </tr>
        </thead>
        <tbody>
        {this.props.users.map(u=>u.Status!=='admin'?(
          <tr key={u.id}>
            <td>{u.id}</td><td>{u.ime}</td><td>{u.prezime}</td><td>{u.email}</td><td className="hideUser">{u.sifra}</td><td className="hideUser">{u.telefon}</td><td><button className="removeUser" value={u.id} type="submit" onClick={this.props.deleteUser}>X</button></td>
          </tr>
        ):<tr key={u.id}></tr>)}
        </tbody>
        </table>
    );
  }
}

export default Users;
