import React, { Component } from 'react'
import Card from '../kartice/card'
import './pametanizbor.scss'
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
export class Letizimi extends Component {
  _isMounted=false;
  constructor(props) {
    super(props);
    this.state = {
     monitori:[]
    };
  }
  componentDidMount(){
    this._isMounted=true;
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tip:'monitori' })
      };
      trackPromise(
    fetch(`http://localhost:4000/vrstaProizvoda/`,request)
    .then(response=>response.json())
    .then(json=>{
      if(this._isMounted)
      {
      this.setState({
        monitori: json.data
      })}}
    ))
  }

  
  componentWillUnmount() {
    this._isMounted = false;
  }
    render() {
        return (
            <div>
            <div className="odeljak">
            <p className="podnaslov">Monitori sa TN panelom</p>
            <LoadingIndicator />
            {this.state.monitori.map(m => {
            if (m.Tip_panela=="TN")
              return (
                <div key={m.IdAll + m.ID} className="pored">
                  <Card product={m} />
                </div>
              );
          })}
            </div>
            </div>
        )
    }
}

export default Letizimi;
