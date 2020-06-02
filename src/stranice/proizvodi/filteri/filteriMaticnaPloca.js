import React, { Component } from "react";
import '../proizvodi.scss'
import {connect} from 'react-redux'
import { filteriDesktopRacunara } from "../../../actions/filteriDesktopRacunaraAkcija"

export class FilteriMaticnaPloca extends Component {
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
               <input type="checkbox" name="MSI" id="MSI" value="MSI" onChange={this.props.checkChanged}/>
               <label htmlFor="MSI">MSI</label><br/>
               <input type="checkbox" name="Gigabyte" id="Gigabyte" value="Gigabyte" onChange={this.props.checkChanged}/>
               <label htmlFor="Gigabyte">Gigabyte</label><br/><br/><hr/>
               </div>
               <div className="inside">
                 <label className="nazivCheckboxova">Gaming</label><br/>
                 <input type="checkbox" name="Da" id="Da" value="Da" onChange={this.props.checkChanged}/>
               <label htmlFor="Da">Da</label><br/>
               <input type="checkbox" name="Ne" id="Ne" value="Ne" onChange={this.props.checkChanged}/>
               <label htmlFor="Ne">Ne</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">Podnožje</label><br/>
               <input type="checkbox" name="Intel® 2066" id="Intel® 2066" value="Intel® 2066" onChange={this.props.checkChanged}/>
               <label htmlFor="Intel® 2066">Intel® 2066</label><br/>
               <input type="checkbox" name="AMD® TR4" id="AMD® TR4" value="AMD® TR4" onChange={this.props.checkChanged}/>
               <label htmlFor="AMD® TR4">AMD® TR4</label><br/>
               <input type="checkbox" name="AMD® AM4" id="AMD® AM4" value="AMD® AM4" onChange={this.props.checkChanged}/>
               <label htmlFor="AMD® AM4">AMD® AM4</label><br/><br/><hr/>
               </div>
               <div className="inside">
             <label className="nazivCheckboxova">Čipset</label><br/>
               <input type="checkbox" name="Intel® X299" id="Intel® X299" value="Intel® X299" onChange={this.props.checkChanged}/>
               <label htmlFor="Intel® X299">Intel® X299</label><br/>
               <input type="checkbox" name="AMD® X399" id="AMD® X399" value="AMD® X399" onChange={this.props.checkChanged}/>
               <label htmlFor="AMD® X399">AMD® X399</label><br/>
               <input type="checkbox" name="AMD® B450" id="AMD® B450" value="AMD® B450" onChange={this.props.checkChanged}/>
               <label htmlFor="AMD® B450">AMD® B450</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">Tip procesora</label><br/>
               <input type="checkbox" name="Intel" id="Intel" value="Intel" onChange={this.props.checkChanged}/>
               <label htmlFor="Intel">Intel</label><br/>
               <input type="checkbox" name="AMD" id="AMD" value="AMD" onChange={this.props.checkChanged}/>
               <label htmlFor="AMD">AMD</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">Format ploče</label><br/>
               <input type="checkbox" name="ATX" id="ATX" value="ATX" onChange={this.props.checkChanged}/>
               <label htmlFor="ATX">ATX</label><br/>
               <input type="checkbox" name="E-ATX" id="E-ATX" value="E-ATX" onChange={this.props.checkChanged}/>
               <label htmlFor="E-ATX">E-ATX</label><br/>
               <input type="checkbox" name="Micro ATX" id="Micro ATX" value="Micro ATX" onChange={this.props.checkChanged}/>
               <label htmlFor="Micro ATX">Micro ATX</label><br/><br/><hr/>
               </div>
              </div>
             
          )
      }
      
    }
    export default (FilteriMaticnaPloca);
    
