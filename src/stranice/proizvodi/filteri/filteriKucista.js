import React, { Component } from "react";
import '../proizvodi.scss'
import {connect} from 'react-redux'
import { filteriDesktopRacunara } from "../../../actions/filteriDesktopRacunaraAkcija"

export class FilteriKucista extends Component {
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
               <input type="checkbox" name="COOLER MASTER" id="COOLER MASTER" value="COOLER MASTER" onChange={this.props.checkChanged}/>
               <label htmlFor="COOLER MASTER">COOLER MASTER</label><br/>
               <input type="checkbox" name="LC-POWER" id="LC-POWER" value="LC-POWER" onChange={this.props.checkChanged}/>
               <label htmlFor="LC-POWER">LC-POWER</label><br/>
               <input type="checkbox" name="NZXT" id="NZXT" value="NZXT" onChange={this.props.checkChanged}/>
               <label htmlFor="NZXT">NZXT</label><br/><br/><hr/>
               </div>
               <div className="inside">
             <label className="nazivCheckboxova">Tip kućišta</label><br/>
               <input type="checkbox" name="Midi Tower" id="Midi Tower" value="Midi Tower" onChange={this.props.checkChanged}/>
               <label htmlFor="Midi Tower">Midi Tower</label><br/>
               <input type="checkbox" name="Mini Tower" id="Mini Tower" value="Mini Tower" onChange={this.props.checkChanged}/>
               <label htmlFor="Mini Tower">Mini Tower</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">Napajanje</label><br/>
               <input type="checkbox" name="Bez napajanja" id="Bez napajanja" value="Bez napajanja" onChange={this.props.checkChanged}/>
               <label htmlFor="Bez napajanja">Bez napajanja</label><br/>
              <input type="checkbox" name="200W" id="200W" value="200W" onChange={this.props.checkChanged}/>
               <label htmlFor="200W">200W</label><br/><br/><hr/>
               </div>
               <div className="inside">
             <label className="nazivCheckboxova">Maksimalna dužina grafičke kartice</label><br/>
             <input type="checkbox" name="245mm" id="245mm" value="245mm" onChange={this.props.checkChanged}/>
               <label htmlFor="245mm">245mm</label><br/>
               <input type="checkbox" name="360mm" id="360mm" value="360mm" onChange={this.props.checkChanged}/>
               <label htmlFor="360mm">360mm</label><br/>
               <input type="checkbox" name="380mm" id="380mm" value="380mm" onChange={this.props.checkChanged}/>
               <label htmlFor="380mm">380mm</label><br/>
               <input type="checkbox" name="381mm" id="381mm" value="381mm" onChange={this.props.checkChanged}/>
               <label htmlFor="381mm">381mm</label><br/>
               <input type="checkbox" name="399mm" id="399mm" value="399mm" onChange={this.props.checkChanged}/>
               <label htmlFor="399mm">399mm</label><br/>
               <input type="checkbox" name="410mm" id="410mm" value="410mm" onChange={this.props.checkChanged}/>
               <label htmlFor="410mm">410mm</label><br/>
               <input type="checkbox" name="411mm" id="411mm" value="411mm" onChange={this.props.checkChanged}/>
               <label htmlFor="411mm">411mm</label><br/>
               <input type="checkbox" name="412mm" id="412mm" value="412mm" onChange={this.props.checkChanged}/>
               <label htmlFor="412mm">412mm</label><br/><br/><hr/>
               </div>
               <div className="inside">
             <label className="nazivCheckboxova">Maksimalna visina CPU kulera</label><br/>
             <input type="checkbox" name="75mm" id="75mm" value="75mm" onChange={this.props.checkChanged}/>
               <label htmlFor="75mm">75mm</label><br/>
               <input type="checkbox" name="155mm" id="155mm" value="155mm" onChange={this.props.checkChanged}/>
               <label htmlFor="155mm">155mm</label><br/>
               <input type="checkbox" name="157mm" id="157mm" value="157mm" onChange={this.props.checkChanged}/>
               <label htmlFor="157mm">157mm</label><br/>
               <input type="checkbox" name="164mm" id="164mm" value="164mm" onChange={this.props.checkChanged}/>
               <label htmlFor="164mm">164mm</label><br/>
               <input type="checkbox" name="165mm" id="165mm" value="165mm" onChange={this.props.checkChanged}/>
               <label htmlFor="165mm">165mm</label><br/>
               <input type="checkbox" name="190mm" id="190mm" value="190mm" onChange={this.props.checkChanged}/>
               <label htmlFor="190mm">190mm</label><br/><br/><hr/>
               </div>
               <div className={this.state.hidden?"hidden":"visible"}>
                   <div className="hiddenButton">
               <button type="submit" onClick={this.changeHidden}>Još filtera...</button>
               </div>
               </div>
               <div className={!this.state.hidden?"hidden":"visible"}>
               <div className="inside">
               <label className="nazivCheckboxova">Mesta za PCI kartice</label><br/>
               <input type="checkbox" name="4" id="4" value="4" onChange={this.props.checkChanged}/>
               <label htmlFor="4">4</label><br/>
              <input type="checkbox" name="7" id="7" value="7" onChange={this.props.checkChanged}/>
               <label htmlFor="7">7</label><br/>
               <input type="checkbox" name="7+2" id="7+2" value="7+2" onChange={this.props.checkChanged}/>
               <label htmlFor="7+2">7+2</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">Boja</label><br/>
               <input type="checkbox" name="Bela" id="Bela" value="Bela" onChange={this.props.checkChanged}/>
               <label htmlFor="Bela">Bela</label><br/>
              <input type="checkbox" name="Crna" id="Crna" value="Crna" onChange={this.props.checkChanged}/>
               <label htmlFor="Crna">Crna</label><br/>
               <input type="checkbox" name="Tamno siva" id="Tamno siva" value="Tamno siva" onChange={this.props.checkChanged}/>
               <label htmlFor="Tamno siva">Tamno siva</label><br/><br/><hr/>
               </div>
               <div className="hiddenButton">
               <button type="submit" onClick={this.changeHidden}>Sakrij filtere...</button>
               </div>
              </div>
              </div>

          )
      }
      
    }
    export default (FilteriKucista);
    
