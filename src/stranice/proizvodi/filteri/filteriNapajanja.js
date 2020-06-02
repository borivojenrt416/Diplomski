import React, { Component } from "react";
import '../proizvodi.scss'
import {connect} from 'react-redux'
import { filteriDesktopRacunara } from "../../../actions/filteriDesktopRacunaraAkcija"

export class FilteriNapajanja extends Component {
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
               <input type="checkbox" name="ANTEC" id="ANTEC" value="ANTEC" onChange={this.props.checkChanged}/>
               <label htmlFor="ANTEC">ANTEC</label><br/>
               <input type="checkbox" name="LC-POWER" id="LC-POWER" value="LC-POWER" onChange={this.props.checkChanged}/>
               <label htmlFor="LC-POWER">LC-POWER</label><br/>
               <input type="checkbox" name="FSP" id="FSP" value="FSP" onChange={this.props.checkChanged}/>
               <label htmlFor="FSP">FSP</label><br/><br/><hr/>
               </div>
               <div className="inside">
                 <label className="nazivCheckboxova">Gaming</label><br/>
                 <input type="checkbox" name="Da" id="Da" value="QDa" onChange={this.props.checkChanged}/>
               <label htmlFor="Da">Da</label><br/>
               <input type="checkbox" name="Ne" id="Ne" value="Ne" onChange={this.props.checkChanged}/>
               <label htmlFor="Ne">Ne</label><br/><br/><hr/>
               </div>
               <div className="inside">
             <label className="nazivCheckboxova">Izlazna snaga</label><br/>
               <input type="checkbox" name="350W" id="350W" value="350W" onChange={this.props.checkChanged}/>
               <label htmlFor="350W">350W</label><br/>
               <input type="checkbox" name="450W" id="450W" value="450W" onChange={this.props.checkChanged}/>
               <label htmlFor="450W">450W</label><br/>
               <input type="checkbox" name="550W" id="550W" value="550W" onChange={this.props.checkChanged}/>
               <label htmlFor="550W">550W</label><br/>
               <input type="checkbox" name="600W" id="600W" value="600W" onChange={this.props.checkChanged}/>
               <label htmlFor="600W">600W</label><br/>
               <input type="checkbox" name="700W" id="700W" value="700W" onChange={this.props.checkChanged}/>
               <label htmlFor="700W">700W</label><br/>
               <input type="checkbox" name="750W" id="750W" value="750W" onChange={this.props.checkChanged}/>
               <label htmlFor="750W">750W</label><br/>
               <input type="checkbox" name="1000W" id="1000W" value="1000W" onChange={this.props.checkChanged}/>
               <label htmlFor="1000W">1000W</label><br/>
               <input type="checkbox" name="1200W" id="1200W" value="1200W" onChange={this.props.checkChanged}/>
               <label htmlFor="1200W">1200W</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">Tip napajanja</label><br/>
               <input type="checkbox" name="Modularno" id="Modularno" value="Modularno" onChange={this.props.checkChanged}/>
               <label htmlFor="Modularno">Modularno</label><br/>
               <input type="checkbox" name="Standardno" id="Standardno" value="QStandardno" onChange={this.props.checkChanged}/>
               <label htmlFor="Standardno">Standardno</label><br/>
               <input type="checkbox" name="Semi-Modularno" id="Semi-Modularno" value="QSemi-Modularno" onChange={this.props.checkChanged}/>
               <label htmlFor="Semi-Modularno">Semi-Modularno</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">Oblik</label><br/>
               <input type="checkbox" name="ATX (PS2)" id="ATX (PS2)" value="ATX (PS2)" onChange={this.props.checkChanged}/>
               <label htmlFor="ATX (PS2)">ATX (PS2)</label><br/>
               <input type="checkbox" name="SFX" id="SFX" value="QSFX" onChange={this.props.checkChanged}/>
               <label htmlFor="SFX">SFX</label><br/><br/><hr/>
               </div>
              </div>
             
          )
      }
      
    }
    export default (FilteriNapajanja);
    
