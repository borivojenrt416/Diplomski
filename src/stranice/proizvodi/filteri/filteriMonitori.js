import React, { Component } from "react";
import '../proizvodi.scss'
import {connect} from 'react-redux'
import { filteriDesktopRacunara } from "../../../actions/filteriDesktopRacunaraAkcija"

export class FilteriMonitori extends Component {
    constructor(props) {
      super(props);
      this.state = {
        filteri:[]
      };

    
    }
    render()
      {
          return(
              <div>
            
            <div className="inside">
              
               <label className="nazivCheckboxova">Proizvođač</label><br/>
               <input type="checkbox" name="ASUS" id="ASUS" value="ASUS" onChange={this.props.checkChanged}/>
               <label htmlFor="ASUS">ASUS</label><br/>
               <input type="checkbox" name="DELL" id="DELL" value="DELL" onChange={this.props.checkChanged}/>
               <label htmlFor="DELL">DELL</label><br/>
               <input type="checkbox" name="PHILIPS" id="PHILIPS" value="PHILIPS" onChange={this.props.checkChanged}/>
               <label htmlFor="PHILIPS">PHILIPS</label><br/>
              <input type="checkbox" name="SAMSUNG" id="ESAMSUNG" value="ESAMSUNG" onChange={this.props.checkChanged}/>
               <label htmlFor="ESAMSUNG">SAMSUNG</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">Dijagonala</label><br/>
               <input type="checkbox" name="21&quot;" id="21&quot;" value="21&quot;" onChange={this.props.checkChanged}/>
               <label htmlFor="21&quot;">21&quot;</label><br/>
              <input type="checkbox" name="23&quot;" id="23&quot;" value="23&quot;" onChange={this.props.checkChanged}/>
               <label htmlFor="23&quot;">23&quot;</label><br/>
               <input type="checkbox" name="24&quot;" id="24&quot;" value="24&quot;" onChange={this.props.checkChanged}/>
               <label htmlFor="24&quot;">24&quot;</label><br/>
               <input type="checkbox" name="27&quot;" id="27&quot;" value="27&quot;" onChange={this.props.checkChanged}/>
               <label htmlFor="27&quot;">27&quot;</label><br/>
               <input type="checkbox" name="42&quot;" id="42&quot;" value="42&quot;" onChange={this.props.checkChanged}/>
               <label htmlFor="42&quot;">42&quot;</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">Tip panela </label><br/>
               <input type="checkbox" name="IPS" id="IPS" value="IPS" onChange={this.props.checkChanged}/>
               <label htmlFor="IPS">IPS</label><br/>
               <input type="checkbox" name="TN" id="TN" value="TN" onChange={this.props.checkChanged}/>
               <label htmlFor="TN">TN</label><br/>
               <input type="checkbox" name="VA" id="VA" value="VA" onChange={this.props.checkChanged}/>
               <label htmlFor="VA">VA</label><br/><br/><hr/>
               </div>
               <div className="inside">
             <label className="nazivCheckboxova">Rezolucija </label><br/>
               <input type="checkbox" name="1920 x 1080 Full HD" id="1920 x 1080 Full HD" value="1920 x 1080 Full HD" onChange={this.props.checkChanged}/>
               <label htmlFor="1920 x 1080 Full HD">1920 x 1080 Full HD</label><br/>
               <input type="checkbox" name="3840 x 2160 4K UHD" id="3840 x 2160 4K UHD" value="3840 x 2160 4K UHD" onChange={this.props.checkChanged}/>
               <label htmlFor="3840 x 2160 4K UHD">3840 x 2160 4K UHD</label><br/><br/><hr/>
               </div>
               <div className="inside">
                 <label className="nazivCheckboxova">Touch screen</label><br/>
                 <input type="checkbox" name="Da" id="Da" value="Da" onChange={this.props.checkChanged}/>
               <label htmlFor="Da">Da</label><br/>
               <input type="checkbox" name="Ne" id="Ne" value="Ne" onChange={this.props.checkChanged}/>
               <label htmlFor="Ne">Ne</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">Odziv</label><br/>
               <input type="checkbox" name="1ms" id="1ms" value="1ms" onChange={this.props.checkChanged}/>
               <label htmlFor="1ms">1ms</label><br/>
               <input type="checkbox" name="2ms" id="2ms" value="2ms" onChange={this.props.checkChanged}/>
               <label htmlFor="2ms">2ms</label><br/>
               <input type="checkbox" name="3ms" id="3ms"  value="3ms" onChange={this.props.checkChanged}/>
               <label htmlFor="3ms">3ms</label><br/><br/><hr/>
               </div>
              </div>
             
          )
      }
      
    }
    export default (FilteriMonitori);
    
