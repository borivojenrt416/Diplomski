import React, { Component } from "react";
import '../proizvodi.scss'
import {connect} from 'react-redux'
import { filteriDesktopRacunara } from "../../../actions/filteriDesktopRacunaraAkcija"

export class FilteriGrafickaKartica extends Component {
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
               <input type="checkbox" name="ASUS" id="ASUS" value="ASUS" onChange={this.props.checkChanged}/>
               <label htmlFor="ASUS">ASUS</label><br/>
               <input type="checkbox" name="MSI" id="MSI" value="MSI" onChange={this.props.checkChanged}/>
               <label htmlFor="MSI">MSI</label><br/>
              <input type="checkbox" name="ASRock" id="ASRock" value="ASRock" onChange={this.props.checkChanged}/>
               <label htmlFor="ASRock">ASRock</label><br/><br/><hr/>
               </div>
               <div className="inside">
                 <label className="nazivCheckboxova">Gaming</label><br/>
                 <input type="checkbox" name="Da" id="Da" value="Da" onChange={this.props.checkChanged}/>
               <label htmlFor="Da">Da</label><br/>
               <input type="checkbox" name="Ne" id="Ne" value="Ne" onChange={this.props.checkChanged}/>
               <label htmlFor="Ne">Ne</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">GPU</label><br/>
               <input type="checkbox" name="Nvidia GeForce RTX 2070 SUPER" id="Nvidia GeForce RTX 2070 SUPER" value="Nvidia GeForce RTX 2070 SUPER" onChange={this.props.checkChanged}/>
               <label htmlFor="Nvidia GeForce RTX 2070 SUPER">Nvidia GeForce RTX 2070 SUPER</label><br/>
               <input type="checkbox" name="AMD Radeon RX 570" id="AMD Radeon RX 570" value="AMD Radeon RX 570" onChange={this.props.checkChanged}/>
               <label htmlFor="AMD Radeon RX 570">AMD Radeon RX 570</label><br/>
               <input type="checkbox" name="AMD Radeon R7 240" id="AMD Radeon R7 240" value="AMD Radeon R7 240" onChange={this.props.checkChanged}/>
               <label htmlFor="AMD Radeon R7 240">AMD Radeon R7 240</label><br/>
               <input type="checkbox" name="AMD Radeon RX 590" id="AMD Radeon RX 590" value="AMD Radeon RX 590" onChange={this.props.checkChanged}/>
               <label htmlFor="AMD Radeon RX 590">AMD Radeon RX 590</label><br/>
               <input type="checkbox" name="AMD Radeon R5 230" id="AMD Radeon R5 230" value="AMD Radeon R5 230" onChange={this.props.checkChanged}/>
               <label htmlFor="AMD Radeon R5 230">AMD Radeon R5 230</label><br/>
               <input type="checkbox" name="Nvidia GeForce GTX 1660" id="Nvidia GeForce GTX 1660" value="Nvidia GeForce GTX 1660" onChange={this.props.checkChanged}/>
               <label htmlFor="Nvidia GeForce GTX 1660">Nvidia GeForce GTX 1660</label><br/>
               <input type="checkbox" name="Nvidia GeForce RTX 1660 SUPER" id="Nvidia GeForce RTX 1660 SUPER" value="Nvidia GeForce RTX 1660 SUPER" onChange={this.props.checkChanged}/>
               <label htmlFor="Nvidia GeForce RTX 1660 SUPER">Nvidia GeForce RTX 1660 SUPER</label><br/><br/><hr/>
               </div>
              
               <div className={this.state.hidden?"hidden":"visible"}>
                   <div className="hiddenButton">
               <button type="submit" onClick={this.changeHidden}>Još filtera...</button>
               </div>
               </div>
               <div className={!this.state.hidden?"hidden":"visible"}>
               <div className="inside">
             <label className="nazivCheckboxova">Količina memorije</label><br/>
               <input type="checkbox" name="2GB" id="2GB" value="2GB" onChange={this.props.checkChanged}/>
               <label htmlFor="2GB">2GB</label><br/>
               <input type="checkbox" name="4GB" id="4GB" value="4GB" onChange={this.props.checkChanged}/>
               <label htmlFor="4GB">4GB</label><br/>
               <input type="checkbox" name="6GB" id="6GB" value="6GB" onChange={this.props.checkChanged}/>
               <label htmlFor="6GB">6GB</label><br/>
               <input type="checkbox" name="8GB" id="8GB" value="8GB" onChange={this.props.checkChanged}/>
               <label htmlFor="8GB">8GB</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">Tip memorije</label><br/>
               <input type="checkbox" name="GDDR3" id="GDDR3" value="GDDR3" onChange={this.props.checkChanged}/>
               <label htmlFor="GDDR3">GDDR3</label><br/>
               <input type="checkbox" name="GDDR5" id="GDDR5" value="GDDR5" onChange={this.props.checkChanged}/>
               <label htmlFor="GDDR5">GDDR5</label><br/>
               <input type="checkbox" name="GDDR6" id="GDDR6" value="GDDR6" onChange={this.props.checkChanged}/>
               <label htmlFor="GDDR6">GDDR6</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">Interfejs</label><br/>
               <input type="checkbox" name="PCI Express 2.1" id="PCI Express 2.1" value="PCI Express 2.1" onChange={this.props.checkChanged}/>
               <label htmlFor="PCI Express 2.1">PCI Express 2.1</label><br/>
               <input type="checkbox" name="PCI Express 3.0" id="PCI Express 3.0" value="PCI Express 3.0" onChange={this.props.checkChanged}/>
               <label htmlFor="PCI Express 3.0">PCI Express 3.0</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">Magistrala memorije</label><br/>
               <input type="checkbox" name="64bit" id="64bit" value="64bit" onChange={this.props.checkChanged}/>
               <label htmlFor="64bit">64bit</label><br/>
               <input type="checkbox" name="128bit" id="128bit" value="128bit" onChange={this.props.checkChanged}/>
               <label htmlFor="128bit">128bit</label><br/>
               <input type="checkbox" name="192bit" id="192bit" value="192bit" onChange={this.props.checkChanged}/>
               <label htmlFor="192bit">192bit</label><br/>
               <input type="checkbox" name="256bit" id="256bit" value="256bit" onChange={this.props.checkChanged}/>
               <label htmlFor="256bit">256bit</label><br/><br/><hr/>
               </div>
               <div className="hiddenButton">
               <button type="submit" onClick={this.changeHidden}>Sakrij filtere...</button>
               </div>
               </div>
              </div>
             
          )
      }
      
    }
    export default (FilteriGrafickaKartica);
    
