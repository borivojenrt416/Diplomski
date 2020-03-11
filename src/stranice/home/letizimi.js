import React, { Component } from 'react'
import Card from '../kartice/card'
import './pametanizbor.scss'
export class Letizimi extends Component {
    render() {
        return (
            <div>
            <div className="odeljak">
            <p className="podnaslov">Uživanje i leti i zimi</p>
            {/* {this.props.proizvodi.map(proizvod=>{
              var a = JSON.stringify(proizvod.cena).replace('.','')
              var b = parseInt(JSON.parse(a))
              if(b>45000 && proizvod.tip==="klima")
              return (
              <div className="pored">
                <Card product = {proizvod} />
                </div>
              )
            
            })}  */}
            </div>
            </div>
        )
    }
}

export default Letizimi
