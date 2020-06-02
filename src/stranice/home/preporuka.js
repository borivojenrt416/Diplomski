import React, { Component } from 'react'
import Card from '../kartice/card'
import { connect } from "react-redux";
import { uzmiTip } from "../../actions/tipAkcija";
import './preporuka.scss'
export class Preporuka extends Component {
  _isMounted=false;
  constructor(props) {
    super(props);
    this.state = {
      desktop:[]
    };
  }

  componentDidMount(){
    this._isMounted=true;
    console.log("pozvalo se?")
    fetch(`http://localhost:4000/korisnici/desktop`)
    .then(response=>response.json())
    .then(json=>{
      if(this._isMounted)
      {
      this.setState({
        desktop: json.data
      })}}
    )
  }
  componentWillUnmount() {
    this._isMounted = false;
  }


    render() {
     console.log(this.state.desktop)
        return (
            <div className="odeljak">
            <p className="podnaslov">Najbolji dekstop računari</p>
            {this.state.desktop.map(d=>{
             
              if(d.Operativni==="Nema operativni sistem"||d.Operativni==="Windows 10 Pro 64bit")
              return (
              <div key={d.IdAll + d.ID} className="pored">
                <Card product = {d} />
                </div>
              )
            
            })}
            
            </div>
        )
    }
}
const mapStateToProps = state => ({
  tip: state.tip.tip
});
export default connect(mapStateToProps, {
  uzmiTip,
})(Preporuka);
