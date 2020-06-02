import React, { Component } from "react";
import '../proizvodi.scss'
import {connect} from 'react-redux'
import { filteriDesktopRacunara } from "../../../actions/filteriDesktopRacunaraAkcija"

export class FilteriSSD extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hidden:false
    };
  }


  changeHidden=()=>{
      console.log(this.state.hidden)
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
               <input type="checkbox" name="SAMSUNG" id="SAMSUNG" value="SAMSUNG" onChange={this.props.checkChanged}/>
               <label htmlFor="SAMSUNG">SAMSUNG</label><br/>
               <input type="checkbox" name="A-DATA" id="A-DATA" value="A-DATA" onChange={this.props.checkChanged}/>
               <label htmlFor="A-DATA">A-DATA</label><br/>
               <input type="checkbox" name="KINGSTON" id="KINGSTON" value="KINGSTON" onChange={this.props.checkChanged}/>
               <label htmlFor="KINGSTON">KINGSTON</label><br/><br/><hr/>
               </div>
               <div className="inside">
             <label className="nazivCheckboxova">Kapacitet</label><br/>
               <input type="checkbox" name="240GB" id="240GB" value="240GB" onChange={this.props.checkChanged}/>
               <label htmlFor="240GB">240GB</label><br/>
               <input type="checkbox" name="250GB" id="250GB" value="250GB" onChange={this.props.checkChanged}/>
               <label htmlFor="250GB">250GB</label><br/>
               <input type="checkbox" name="256GB" id="256GB" value="256GB" onChange={this.props.checkChanged}/>
               <label htmlFor="256GB">256GB</label><br/>
               <input type="checkbox" name="500GB" id="500GB" value="500GB" onChange={this.props.checkChanged}/>
               <label htmlFor="500GB">500GB</label><br/>
               <input type="checkbox" name="1TB" id="1TB" value="1TB" onChange={this.props.checkChanged}/>
               <label htmlFor="1TB">1TB</label><br/>
               <input type="checkbox" name="2TB" id="2TB" value="2TB" onChange={this.props.checkChanged}/>
               <label htmlFor="2TB">2TB</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">Interfejs</label><br/>
               <input type="checkbox" name="PCIe" id="PCIe" value="pCIe" onChange={this.props.checkChanged}/>
               <label htmlFor="PCIe">PCIe</label><br/>
              <input type="checkbox" name="SATA III" id="SATA III" value="sATA III" onChange={this.props.checkChanged}/>
               <label htmlFor="SATA III">SATA III</label><br/><br/><hr/>
               </div>
               <div className="inside">
             <label className="nazivCheckboxova">Brzina čitanja</label><br/>
             <input type="checkbox" name="Do 335MB" id="Do 335MB" value="Do 335MB/s" onChange={this.props.checkChanged}/>
               <label htmlFor="Do 335MB">Do 335MB</label><br/>
               <input type="checkbox" name="Do 520MB" id="CDo 520MB/s" value="CDo 520MB/s" onChange={this.props.checkChanged}/>
               <label htmlFor="CDo 520MB/s">Do 520MB</label><br/>
               <input type="checkbox" name="Do 550MB" id="Do 550MB" value="Do 550MB/s" onChange={this.props.checkChanged}/>
               <label htmlFor="Do 550MB">Do 550MB</label><br/>
               <input type="checkbox" name="Do 2100MB" id="Do 2100MB" value="Do 2100MB/s" onChange={this.props.checkChanged}/>
               <label htmlFor="Do 2100MB">Do 2100MB</label><br/>
               <input type="checkbox" name="Do 2200MB" id="Do 2200MB" value="Do 2200MB/s" onChange={this.props.checkChanged}/>
               <label htmlFor="Do 2200MB">Do 2200MB</label><br/>
               <input type="checkbox" name="Do 3350MB" id="Do 3350MB" value="Do 3350MB/s" onChange={this.props.checkChanged}/>
               <label htmlFor="Do 3350MB">Do 3350MB</label><br/>
               <input type="checkbox" name="Do 3500MB" id="Do 3500MB" value="Do 3500MB/s" onChange={this.props.checkChanged}/>
               <label htmlFor="Do 3500MB">Do 3500MB</label><br/><br/><hr/>
               </div><div className={this.state.hidden?"hidden":"visible"}>
                   <div className="hiddenButton">
               <button type="submit" onClick={this.changeHidden}>Još filtera...</button>
               </div>
               </div>
               <div className={!this.state.hidden?"hidden":"visible"}>
               <div className="inside">
             <label className="nazivCheckboxova">Brzina pisanja</label><br/>
             <input type="checkbox" name="Do 500MB" id="Do 500MB" value="Do 500MB/s" onChange={this.props.checkChanged}/>
               <label htmlFor="Do 500MB">Do 500MB</label><br/>
               <input type="checkbox" name="Do 520MB" id="PDo 520MB" value="PDo 520MB/s" onChange={this.props.checkChanged}/>
               <label htmlFor="PDo 520MB">Do 520MB</label><br/>
               <input type="checkbox" name="Do 1150MB" id="Do 1150MB" value="Do 1150MB/s" onChange={this.props.checkChanged}/>
               <label htmlFor="Do 1150MB">Do 1150MB</label><br/>
               <input type="checkbox" name="Do 1200MB" id="Do 1200MB" value="Do 1200MB/s" onChange={this.props.checkChanged}/>
               <label htmlFor="Do 1200MB">Do 1200MB</label><br/>
               <input type="checkbox" name="Do 2000MB" id="Do 2000MB" value="Do 2000MB/s" onChange={this.props.checkChanged}/>
               <label htmlFor="Do 2000MB">Do 2000MB</label><br/>
               <input type="checkbox" name="Do 2300MB" id="Do 2300MB" value="Do 2300MB/s" onChange={this.props.checkChanged}/>
               <label htmlFor="Do 2300MB">Do 2300MB</label><br/>
               <input type="checkbox" name="Do 2800MB" id="Do 2800MB" value="Do 2800MB/s" onChange={this.props.checkChanged}/>
               <label htmlFor="Do 2800MB">Do 2800MB</label><br/><br/><hr/>
               </div>
               <div className="hiddenButton">
               <button type="submit" onClick={this.changeHidden}>Sakrij filtere...</button>
               </div>
              </div>
              </div>
             
          )
      }
      
    }
    export default (FilteriSSD);
    
