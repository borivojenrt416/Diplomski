import React, { Component } from "react";
import '../proizvodi.scss'
import {connect} from 'react-redux'
import { filteriDesktopRacunara } from "../../../actions/filteriDesktopRacunaraAkcija"

export class FilteriMemorija extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hidden:false
    };
  }


  changeHidden=()=>{
      let b = this.state.hidden;
      this.setState({
          hidden: !b
        });
      }
    render()
      {
          return(
              <div>
            
            <div className="inside">
              
               <label className="nazivCheckboxova">Proizvođač</label><br/>
               <input type="checkbox" name="CRUCIAL" id="CRUCIAL" value="CRUCIAL" onChange={this.props.checkChanged}/>
               <label htmlFor="CRUCIAL">CRUCIAL</label><br/>
               <input type="checkbox" name="HYPERX" id="HYPERX" value="HYPERX" onChange={this.props.checkChanged}/>
               <label htmlFor="HYPERX">HYPERX</label><br/>
               <input type="checkbox" name="KINGSTON" id="KINGSTON" value="KINGSTON" onChange={this.props.checkChanged}/>
               <label htmlFor="KINGSTON">KINGSTON</label><br/>
              <input type="checkbox" name="TRANSCEND" id="TRANSCEND" value="TRANSCEND" onChange={this.props.checkChanged}/>
               <label htmlFor="TRANSCEND">TRANSCEND</label><br/><br/><hr/>
               </div>
               <div className="inside">
                 <label className="nazivCheckboxova">Gaming</label><br/>
                 <input type="checkbox" name="Da" id="Da" value="Da" onChange={this.props.checkChanged}/>
               <label htmlFor="Da">Da</label><br/>
               <input type="checkbox" name="Ne" id="Ne" value="Ne" onChange={this.props.checkChanged}/>
               <label htmlFor="Ne">Ne</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">Tip memorije</label><br/>
               <input type="checkbox" name="DDR2" id="DDR2" value="DDR2" onChange={this.props.checkChanged}/>
               <label htmlFor="DDR2">DDR2</label><br/>
               <input type="checkbox" name="DDR3" id="DDR3" value="DDR3" onChange={this.props.checkChanged}/>
               <label htmlFor="DDR3">DDR3</label><br/>
               <input type="checkbox" name="DDR4" id="DDR4" value="DDR4" onChange={this.props.checkChanged}/>
               <label htmlFor="DDR4">DDR4</label><br/><br/><hr/>
               </div>
               <div className="inside">
             <label className="nazivCheckboxova">Kapacitet</label><br/>
               <input type="checkbox" name="1GB" id="1GB" value="1GB" onChange={this.props.checkChanged}/>
               <label htmlFor="1GB">1GB</label><br/>
               <input type="checkbox" name="2GB" id="2GB" value="2GB" onChange={this.props.checkChanged}/>
               <label htmlFor="2GB">2GB</label><br/>
               <input type="checkbox" name="4GB" id="4GB" value="4GB" onChange={this.props.checkChanged}/>
               <label htmlFor="4GB">4GB</label><br/>
               <input type="checkbox" name="8GB" id="8GB" value="8GB" onChange={this.props.checkChanged}/>
               <label htmlFor="8GB">8GB</label><br/>
               <input type="checkbox" name="16GB" id="16GB" value="16GB" onChange={this.props.checkChanged}/>
               <label htmlFor="16GB">16GB</label><br/>
               <input type="checkbox" name="64GB" id="64GB" value="64GB" onChange={this.props.checkChanged}/>
               <label htmlFor="64GB">64GB</label><br/><br/><hr/>
               </div>
               <div className={this.state.hidden?"hidden":"visible"}>
                   <div className="hiddenButton">
               <button type="submit" onClick={this.changeHidden}>Još filtera...</button>
               </div>
               </div>
               <div className={!this.state.hidden?"hidden":"visible"}>
               <div className="inside">
                 <label className="nazivCheckboxova">Maksimalna frekvencija</label><br/>
                 <input type="checkbox" name="800MHz" id="800MHz" value="800MHz" onChange={this.props.checkChanged}/>
               <label htmlFor="800MHz">800MHz</label><br/>
               <input type="checkbox" name="1333MHz" id="1333MHz" value="1333MHz" onChange={this.props.checkChanged}/>
               <label htmlFor="1333MHz">1333MHz</label><br/>
               <input type="checkbox" name="1600MHz" id="1600MHz" value="1600MHz" onChange={this.props.checkChanged}/>
               <label htmlFor="1600MHz">1333MHz</label><br/>
               <input type="checkbox" name="2666MHz" id="2666MHz" value="2666MHz" onChange={this.props.checkChanged}/>
               <label htmlFor="2666MHz">2666MHz</label><br/>
               <input type="checkbox" name="3000MHz" id="3000MHz" value="3000MHz" onChange={this.props.checkChanged}/>
               <label htmlFor="3000MHz">3000MHz</label><br/>
               <input type="checkbox" name="3333MHz" id="3333MHz" value="3333MHz" onChange={this.props.checkChanged}/>
               <label htmlFor="3333MHz">3333MHz</label><br/>
               <input type="checkbox" name="3600MHz" id="3600MHz" value="3600MHz" onChange={this.props.checkChanged}/>
               <label htmlFor="3600MHz">3600MHz</label><br/><br/><hr/>
               </div>
               <div className="hiddenButton">
               <button type="submit" onClick={this.changeHidden}>Sakrij filtere...</button>
               </div>
               </div>
              </div>
             
          )
      }
      
    }
    export default (FilteriMemorija);
    
