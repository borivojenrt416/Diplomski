import React, { Component } from "react";
import {Users} from './users'
import {Orders} from './orders'
import "./admin.scss";
import uuid from 'node-uuid'
import { connect } from "react-redux";
import {deleteUser,getUsers,getOrders,approveOrder} from '../../actions/admin'
export class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
        korisnici:true,
        _isMounted:false
    };
  }


  componentWillMount() {
    if(!this.state._isMounted)
    {
      this.setState({
        _isMounted:true
      })
      this.props.getUsers()  
      this.props.getOrders()
  }

 
  }


  changeUserCard=()=>{
      this.setState({
          korisnici:false
      })
      console.log("user")
  }
  changeOrderCard=()=>{
    this.setState({
        korisnici:true
    })
    console.log("order")
}

deleteUs=(e)=>{
  console.log(e.target.value)
  this.props.deleteUser(e.target.value,this.props.users)
}

approveOrder=(e)=>{
  this.props.approveOrder(e.target.value,this.props.orders)
}

  render() {
console.log(this.props.users)
console.log(this.props.orders)
        return (
        <div className="admin" key={uuid()}>
            <div className="buttonsForAdmin">
            <button className="Orders" onClick={this.changeOrderCard}>Narudžbenice</button>
            <button className="Users" onClick={this.changeUserCard}>Korisnici</button>
            </div>
            {!this.state.korisnici? <Users users={this.props.users} deleteUser={this.deleteUs} /> : <Orders  orders={this.props.orders} approve={this.approveOrder}/>} }
          
        </div>);
      }
    }
const mapStateToProps = state => ({
  users: state.users.users,
  orders: state.orders.orders
});
const mapDispatchToProps = dispatch => ({
  deleteUser: (id,niz) => dispatch(deleteUser(id,niz)),
  getUsers: id => dispatch(getUsers()),
  getOrders: id=>dispatch(getOrders()),
  approveOrder: (id,niz) => dispatch(approveOrder(id,niz))
});
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
