import React, { Component } from "react";
import '../proizvodi.scss'
import {connect} from 'react-redux'
import { filteriDesktopRacunara } from "../../../actions/filteriDesktopRacunaraAkcija"

export class FilteriHDD extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };

    
    }
    render()
      {
          return(
              <div>
            
            <div className="inside">
              
               <label className="nazivCheckboxova">Proizvođač</label><br/>
               <input type="checkbox" name="SEAGATE" id="SEAGATE" value="ESEAGATE" onChange={this.props.checkChanged}/>
               <label htmlFor="SEAGATE">SEAGATE</label><br/>
               <input type="checkbox" name="WD" id="WD" value="WD" onChange={this.props.checkChanged}/>
               <label htmlFor="WD">WD</label><br/>
               <input type="checkbox" name="TOSHIBA" id="TOSHIBA" value="TOSHIBA" onChange={this.props.checkChanged}/>
               <label htmlFor="TOSHIBA">TOSHIBA</label><br/><br/><hr/>
               </div>
               <div className="inside">
             <label className="nazivCheckboxova">Kapacitet</label><br/>
               <input type="checkbox" name="1TB" id="1TB" value="1TB" onChange={this.props.checkChanged}/>
               <label htmlFor="1TB">1TB</label><br/>
               <input type="checkbox" name="2TB" id="2TB" value="2TB" onChange={this.props.checkChanged}/>
               <label htmlFor="2TB">2TB</label><br/>
               <input type="checkbox" name="3TB" id="3TB" value="3TB" onChange={this.props.checkChanged}/>
               <label htmlFor="3TB">3TB</label><br/>
               <input type="checkbox" name="4TB" id="4TB" value="4TB" onChange={this.props.checkChanged}/>
               <label htmlFor="4TB">4TB</label><br/>
               <input type="checkbox" name="14TB" id="14TB" value="14TB" onChange={this.props.checkChanged}/>
               <label htmlFor="14TB">14TB</label><br/>
               <input type="checkbox" name="16TB" id="16TB" value="16TB" onChange={this.props.checkChanged}/>
               <label htmlFor="16TB">16TB</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">Format</label><br/>
               <input type="checkbox" name="2.5&quot;" id="2.5&quot;" value="2.5&quot;" onChange={this.props.checkChanged}/>
               <label htmlFor="2.5&quot;">2.5&quot;</label><br/>
              <input type="checkbox" name="3.5&quot;" id="3.5&quot;" value="3.5&quot;" onChange={this.props.checkChanged}/>
               <label htmlFor="3.5&quot;">3.5&quot;</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">Tip</label><br/>
               <input type="checkbox" name="Interni" id="Interni" value="Interni" onChange={this.props.checkChanged}/>
               <label htmlFor="Interni">Interni</label><br/>
               <input type="checkbox" name="Interni SSHD" id="Interni SSHD" value="Interni SSHD" onChange={this.props.checkChanged}/>
               <label htmlFor="Interni SSHD">Interni SSHD</label><br/><br/><hr/>
               </div>
               <div className="inside">
             <label className="nazivCheckboxova">Buffer</label><br/>
             <input type="checkbox" name="64MB" id="64MB" value="64MB" onChange={this.props.checkChanged}/>
               <label htmlFor="64MB">64MB</label><br/>
               <input type="checkbox" name="128MB" id="128MB" value="128MB" onChange={this.props.checkChanged}/>
               <label htmlFor="128MB">128MB</label><br/>
               <input type="checkbox" name="256MB" id="256MB" value="256MB" onChange={this.props.checkChanged}/>
               <label htmlFor="256MB">256MB</label><br/>
               <input type="checkbox" name="512MB" id="512MB" value="512MB" onChange={this.props.checkChanged}/>
               <label htmlFor="512MB">512MB</label><br/><br/><hr/>
               </div>
              </div>
             
          )
      }
      
    }
    export default (FilteriHDD);
    
