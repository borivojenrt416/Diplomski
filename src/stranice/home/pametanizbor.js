import React, { Component } from "react";
import Card from "../kartice/card";
import { connect } from "react-redux";
import { uzmiTip } from "../../actions/tipAkcija";
import "./pametanizbor.scss";
export class Pametanizbor extends Component {
  _isMounted=false;
  constructor(props) {
    super(props);
    this.state = {
     memorije:[]
    };
  }
  componentDidMount(){
    this._isMounted=true;
    console.log("pozvalo se?");
    fetch(`http://localhost:4000/korisnici/memorije`)
      .then(response => response.json())
      .then(json => {
        if(this._isMounted)
        {
        this.setState({
          memorije: json.data
        })}}
      );
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <div>
        <div className="pametanizbor">
          <p className="podnaslov">Pametan izbor</p>
          {this.state.memorije.map(m => {
            if (m.Kapacitet === "8GB" || m.Kapacitet === "16GB")
              return (
                <div className="pored">
                  <Card product={m} />
                </div>
              );
          })}
        </div>
      </div>
    );
  }
}

export default Pametanizbor;
