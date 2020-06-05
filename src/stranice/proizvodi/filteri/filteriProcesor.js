import React, { Component } from "react";
import '../proizvodi.scss'
import {connect} from 'react-redux'
import { filteriDesktopRacunara } from "../../../actions/filteriDesktopRacunaraAkcija"

export class FilteriProcesor extends Component {
    constructor(props) {
      super(props);
      this.state = {
        filteri:[],
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
               <input type="checkbox" name="AMD" id="AMD" value="AMD" onChange={this.props.checkChanged}/>
               <label htmlFor="AMD">AMD</label><br/>
               <input type="checkbox" name="INTEL" id="INTEL" value="Intel" onChange={this.props.checkChanged}/>
               <label htmlFor="INTEL">INTEL</label><br/><br/><hr/>
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
               <input type="checkbox" name="AMD® sTRX4" id="AMD® sTRX4" value="AMD® sTRX4" onChange={this.props.checkChanged}/>
               <label htmlFor="AMD® sTRX4">AMD® sTRX4</label><br/>
               <input type="checkbox" name="Intel® 1151 (8. i 9. gen.)" id="Intel® 1151 (8. i 9. gen.)" value="Intel® 1151 (8. i 9. gen.)" onChange={this.props.checkChanged}/>
               <label htmlFor="Intel® 1151 (8. i 9. gen.)">Intel® 1151 (8. i 9. gen.)</label><br/>
               <input type="checkbox" name="AMD® AM4" id="AMD® AM4" value="AMD® AM4" onChange={this.props.checkChanged}/>
               <label htmlFor="AMD® AM4">AMD® AM4</label><br/>
               <input type="checkbox" name="Intel® 1151" id="Intel® 1151" value="Intel® 1151" onChange={this.props.checkChanged}/>
               <label htmlFor="Intel® 1151">Intel® 1151</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">Tip procesora</label><br/>
              <input type="checkbox" name="INTEL® Core™ i5" id="INTEL® Core™ i5" value="INTEL® Core™ i5" onChange={this.props.checkChanged}/>
               <label htmlFor="INTEL® Core™ i5">INTEL® Core™ i5</label><br/>
               <input type="checkbox" name="AMD® Ryzen 7" id="AMD® Ryzen 7" value="AMD® Ryzen 7" onChange={this.props.checkChanged}/>
               <label htmlFor="AMD® Ryzen 7">AMD® Ryzen 7</label><br/>
               <input type="checkbox" name="INTEL Procesor Celeron" id="INTEL Procesor Celeron" value="INTEL Procesor Celeron" onChange={this.props.checkChanged}/>
               <label htmlFor="INTEL Procesor Celeron">INTEL Procesor Celeron</label><br/>
               <input type="checkbox" name="AMD® Ryzen 5" id="AMD® Ryzen 5" value="AMD® Ryzen 5" onChange={this.props.checkChanged}/>
               <label htmlFor="AMD® Ryzen 5">AMD® Ryzen 5</label><br/>
               <input type="checkbox" name="Intel® Core™ i9" id="Intel® Core™ i9" value="Intel® Core™ i9" onChange={this.props.checkChanged}/>
               <label htmlFor="Intel® Core™ i9">Intel® Core™ i9</label><br/>
               <input type="checkbox" name="AMD® Ryzen™ Threadripper" id="AMD® Ryzen™ Threadripper" value="AMD® Ryzen™ Threadripper" onChange={this.props.checkChanged}/>
               <label htmlFor="AMD® Ryzen™ Threadripper">AMD® Ryzen™ Threadripper</label><br/>
               <input type="checkbox" name="Intel® Pentium" id="Intel® Pentium" value="Intel® Pentium" onChange={this.props.checkChanged}/>
               <label htmlFor="Intel® Pentium">Intel® Pentium</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">Broj jezgara</label><br/>
               <input type="checkbox" name="2" id="2" value="2b" onChange={this.props.checkChanged}/>
               <label htmlFor="2">2</label><br/>
               <input type="checkbox" name="4" id="4" value="4b" onChange={this.props.checkChanged}/>
               <label htmlFor="4">4</label><br/>
               <input type="checkbox" name="6" id="6" value="6b" onChange={this.props.checkChanged}/>
               <label htmlFor="6">6</label><br/>
               <input type="checkbox" name="8" id="8" value="8b" onChange={this.props.checkChanged}/>
               <label htmlFor="8">8</label><br/>
               <input type="checkbox" name="24" id="24" value="24b" onChange={this.props.checkChanged}/>
               <label htmlFor="24">24</label><br/>
               <input type="checkbox" name="32" id="32" value="32b" onChange={this.props.checkChanged}/>
               <label htmlFor="32">32</label><br/><br/><hr/>
               </div>
               <div className={this.state.hidden?"hidden":"visible"}>
                   <div className="hiddenButton">
               <button type="submit" onClick={this.changeHidden}>Još filtera...</button>
               </div>
               </div>
               <div className={!this.state.hidden?"hidden":"visible"}>
               <div className="inside">
               <label className="nazivCheckboxova">Threads</label><br/>
               <input type="checkbox" name="4" id="4" value="4t" onChange={this.props.checkChanged}/>
               <label htmlFor="4">4</label><br/>
               <input type="checkbox" name="8" id="8" value="8t" onChange={this.props.checkChanged}/>
               <label htmlFor="8">8</label><br/>
               <input type="checkbox" name="12" id="12" value="12t" onChange={this.props.checkChanged}/>
               <label htmlFor="12">12</label><br/>
               <input type="checkbox" name="16" id="16" value="16t" onChange={this.props.checkChanged}/>
               <label htmlFor="16">16</label><br/>
               <input type="checkbox" name="48" id="48" value="48t" onChange={this.props.checkChanged}/>
               <label htmlFor="48">48</label><br/>
               <input type="checkbox" name="64" id="64" value="64t" onChange={this.props.checkChanged}/>
               <label htmlFor="64">64</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">Radna frekvencija</label><br/>
               <input type="checkbox" name="350MHz" id="350MHz" value="350MHz" onChange={this.props.checkChanged}/>
               <label htmlFor="350MHz">350MHz</label><br/>
               <input type="checkbox" name="2.8GHz" id="2.8GHz" value="2.8GHz" onChange={this.props.checkChanged}/>
               <label htmlFor="2.8GHz">2.8GHz</label><br/>
               <input type="checkbox" name="3.1GHz" id="3.1GHz" value="3.1GHz" onChange={this.props.checkChanged}/>
               <label htmlFor="3.1GHz">3.1GHz</label><br/>
               <input type="checkbox" name="3.6GHz" id="3.6GHz" value="3.6GHz" onChange={this.props.checkChanged}/>
               <label htmlFor="3.6GHz">3.6GHz</label><br/>
               <input type="checkbox" name="3.7GHz" id="3.7GHz" value="3.7GHz" onChange={this.props.checkChanged}/>
               <label htmlFor="3.7GHz">3.7GHz</label><br/>
               <input type="checkbox" name="3.8GHz" id="3.8GHz" value="3.8GHz" onChange={this.props.checkChanged}/>
               <label htmlFor="3.8GHz">3.8GHz</label><br/>
               <input type="checkbox" name="3.9GHz" id="3.9GHz" value="3.9GHz" onChange={this.props.checkChanged}/>
               <label htmlFor="3.9GHz">3.9GHz</label><br/><br/><hr/>
               </div>
               <div className="hiddenButton">
               <button type="submit" onClick={this.changeHidden}>Sakrij filtere...</button>
               </div>
               </div>
              </div>
             
          )
      }
      
    }
    export default (FilteriProcesor);
    
