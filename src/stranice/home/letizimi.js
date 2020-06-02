import React, { Component } from 'react'
import Card from '../kartice/card'
import './pametanizbor.scss'
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
    console.log("pozvalo se?")
    fetch(`http://localhost:4000/korisnici/monitori`)
    .then(response=>response.json())
    .then(json=>{
      if(this._isMounted)
      {
        console.log(json.data)
      this.setState({
        monitori: json.data
      })}}
    )
  }

  
  componentWillUnmount() {
    this._isMounted = false;
  }
    render() {
      console.log(this.state.monitori)
        return (
            <div>
            <div className="odeljak">
            <p className="podnaslov">Monitori sa TN panelom</p>
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
