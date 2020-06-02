import React, { Component } from "react";
import '../proizvodi.scss'
import {connect} from 'react-redux'
import { filteriDesktopRacunara } from "../../../actions/filteriDesktopRacunaraAkcija"

export class FilteriDesktopRacunari extends Component {
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
              <input type="checkbox" name="Intel" id="Intel" value="Intel" onChange={this.props.checkChanged}/>
               <label htmlFor="Intel">Intel</label><br/>
               <input type="checkbox" name="AMD" id="AMD" value="AMD" onChange={this.props.checkChanged}/>
               <label htmlFor="AMD">AMD</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">Tip procesora</label><br/>
              <input type="checkbox" name="Intel® Core™ i5 Processor" id="Intel® Core™ i5 Processor" value="Intel® Core™ i5 Processor" onChange={this.props.checkChanged}/>
               <label htmlFor="Intel® Core™ i5 Processor">Intel® Core™ i5</label><br/>
               <input type="checkbox" name="AMD Ryzen 7" id="AMD Ryzen 7" value="AMD Ryzen 7" onChange={this.props.checkChanged}/>
               <label htmlFor="AMD Ryzen 7">AMD Ryzen 7</label><br/>
               <input type="checkbox" name="Intel® Xeon® Processor" id="Intel® Xeon® Processor" value="Intel® Xeon® Processor" onChange={this.props.checkChanged}/>
               <label htmlFor="Intel® Xeon® Processor">Intel® Xeon®</label><br/>
               <input type="checkbox" name="Intel® Core™ i7 Processor" id="Intel® Core™ i7 Processor" value="Intel® Core™ i7 Processor" onChange={this.props.checkChanged}/>
               <label htmlFor="Intel® Core™ i7 Processor">Intel® Core™ i7</label><br/>
               <input type="checkbox" name="Intel® Core™ i3 Processor" id="Intel® Core™ i3 Processor" value="Intel® Core™ i3 Processor" onChange={this.props.checkChanged}/>
               <label htmlFor="Intel® Core™ i3 Processor">Intel® Core™ i3</label><br/>
               <input type="checkbox" name="Intel® Pentium® Processor" id="Intel® Pentium® Processor" value="Intel® Pentium® Processor" onChange={this.props.checkChanged}/>
               <label htmlFor="Intel® Pentium® Processor">Intel® Pentium®</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">Memorija </label><br/>
               <input type="checkbox" name="4GB DDR4" id="4GB DDR4" value="4GB DDR4" onChange={this.props.checkChanged}/>
               <label htmlFor="4GB DDR4">4GB DDR4</label><br/>
               <input type="checkbox" name="8GB DDR4" id="8GB DDR4" value="8GB DDR4" onChange={this.props.checkChanged}/>
               <label htmlFor="8GB DDR4">8GB DDR4</label><br/>
               <input type="checkbox" name="16GB DDR4" id="16GB DDR4" value="16GB DDR4" onChange={this.props.checkChanged}/>
               <label htmlFor="16GB DDR4">16GB DDR4</label><br/>
               <input type="checkbox" name="4GB DDR3" id="4GB DDR3" value="4GB DDR3" onChange={this.props.checkChanged}/>
               <label htmlFor="4GB DDR3">4GB DDR3</label><br/>
               <input type="checkbox" name="8GB DDR3" id="8GB DDR3" value="8GB DDR3" onChange={this.props.checkChanged}/>
               <label htmlFor="8GB DDR3">8GB DDR3</label><br/><br/><hr/>
               </div>
               <div className="inside">
             <label className="nazivCheckboxova">Graficka karta </label><br/>
               <input type="checkbox" name="GeForce GTX 1050" id="GeForce GTX 1050" value="GeForce GTX 1050" onChange={this.props.checkChanged}/>
               <label htmlFor="GeForce GTX 1050">GeForce GTX 1050</label><br/>
               <input type="checkbox" name="GeForce GT 720" id="GeForce GT 720" value="GeForce GT 720" onChange={this.props.checkChanged}/>
               <label htmlFor="GeForce GT 720">GeForce GT 720</label><br/>
               <input type="checkbox" name="Intel® UHD Graphics 630" id="Intel® UHD Graphics 630" value="Intel® UHD Graphics 630" onChange={this.props.checkChanged}/>
               <label htmlFor="Intel® UHD Graphics 630">Intel® UHD Graphics 630</label><br/>
               <input type="checkbox" name="GeForce GTX 1060" id="GeForce GTX 1060" value="GeForce GTX 1060" onChange={this.props.checkChanged}/>
               <label htmlFor="GeForce GTX 1060">GeForce GTX 1060</label><br/><br/><hr/>
               </div>
               <div className="inside">
                 <label className="nazivCheckboxova">Namena</label><br/>
                 <input type="checkbox" name="Multimedia" id="Multimedia" value="Multimedia" onChange={this.props.checkChanged}/>
               <label htmlFor="Multimedia">Multimedia</label><br/>
               <input type="checkbox" name="Gameplay" id="Gameplay" value="Gameplay" onChange={this.props.checkChanged}/>
               <label htmlFor="Gameplay">Gameplay</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">Operativni sistem</label><br/>
               <input type="checkbox" name="Bez" id="Bez" value="Nema operativni sistem" onChange={this.props.checkChanged}/>
               <label htmlFor="Bez">Bez operativnog sistema</label><br/>
               <input type="checkbox" name="Windows 10 Pro 64bit" id="Windows 10 Pro 64bit" value="Windows 10 Pro 64bit" onChange={this.props.checkChanged}/>
               <label htmlFor="Windows 10 Pro 64bit">Windows 10 Pro 64bit</label><br/>
               <input type="checkbox" name="FreeDOS 2.0" id="FreeDOS 2.0"  value="FreeDOS 2.0" onChange={this.props.checkChanged}/>
               <label htmlFor="FreeDOS 2.0">FreeDOS 2.0</label><br/><br/><hr/>
               </div>
               <div className="inside">
               <label className="nazivCheckboxova">HDD/SSD</label><br/>
               <input type="checkbox" name="500GB HDD" id="500GB HDD" value="500GB HDD" onChange={this.props.checkChanged}/>
               <label htmlFor="500GB HDD">500GB HDD</label><br/>
               <input type="checkbox" name="1TB HDD" id="1TB HDD" value="1TB HDD" onChange={this.props.checkChanged}/>
               <label htmlFor="1TB HDD">1TB HDD</label><br/>
               <input type="checkbox" name="256GB SSD" id="256GB SSD" value="256GB SSD" onChange={this.props.checkChanged}/>
               <label htmlFor="256GB SSD">256GB SSD</label><br/>
               <input type="checkbox" name="512GB SSD" id="512GB SSD"  value="512GB SSD" onChange={this.props.checkChanged}/>
               <label htmlFor="512GB SSD">512GB SSD</label><br/><br/><hr/>
               </div>
              </div>
             
          )
      }
      
    }
    export default (FilteriDesktopRacunari);
    
