import React, { Component } from "react";
import Card from "../kartice/card";
import "./pametanizbor.scss";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';
import { trackPromise } from 'react-promise-tracker';
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
      trackPromise(
    fetch(`http://localhost:4000/vrstaProizvoda/`,request)
      .then(response => response.json())
      .then(json => {
        if(this._isMounted)
        {
        this.setState({
          memorije: json.data
        })}}
      ));
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <div>
        <div className="pametanizbor">
          <p className="podnaslov">Brze memorije</p>
          <LoadingIndicator />
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
