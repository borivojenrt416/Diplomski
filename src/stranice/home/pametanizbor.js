import React, { Component } from "react";
import Card from "../kartice/card";
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
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tip:'memorije' })
      };
    fetch(`http://localhost:4000/vrstaProizvoda/`,request)
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
          <p className="podnaslov">Brze memorije</p>
          {this.state.memorije.map(m => {
            if (m.Kapacitet === "8GB" || m.Kapacitet === "16GB")
              return (
                <div key={m.IdAll + m.ID} className="pored">
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
