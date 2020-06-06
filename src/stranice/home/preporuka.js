import React, { Component } from 'react'
import Card from '../kartice/card'
import { connect } from "react-redux";
import { uzmiTip } from "../../actions/tipAkcija";
import './preporuka.scss'
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
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tip:'desktop' })
      };
      trackPromise(
    fetch(`http://localhost:4000/vrstaProizvoda/`,request)
    .then(response=>response.json())
    .then(json=>{
      if(this._isMounted)
      {
      this.setState({
        desktop: json.data
      })}}
    ));
  }
  componentWillUnmount() {
    this._isMounted = false;
  }


    render() {
        return (
            <div className="odeljak">
            <p className="podnaslov">Najbolji dekstop računari</p>
            <LoadingIndicator />
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
