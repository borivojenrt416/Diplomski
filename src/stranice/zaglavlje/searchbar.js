import React, { Component } from 'react'
import './searchbar.scss'
import {Link,withRouter} from 'react-router-dom'

export class Searchbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             niz:[],
             nizTabela:[],
             vrednost:'',
             focused:false
        }
    }
    pretrazi=(e)=>{
        if(e.target.value.length>=3)
        {
        this.setState({
            niz:[]
        })
      this.setState({
          vrednost:e.target.value
      })
        fetch(`http://localhost:4000/korisnici/pretraga`)
        .then(response=>response.json())
        .then(response=>{
            console.log(this.state.vrednost,response.data)
            this.pretraziProizvode(response.data,this.state.vrednost)
        })
        }
    }

   pretraziProizvode(niz,naziv){
    var nizProizvoda = []
    console.log("pre for petlje")
    console.log(niz)
    for(let i = 0;i < niz.length;i++)
    {
        console.log("usao u for petlju")
        console.log(naziv)
        console.log(niz[i])
        var niz3 = []
        fetch(`http://localhost:4000/korisnici/pretragaProizvoda/${niz[i]}/${naziv}`)
        .then(response2=>response2.json())
        .then(response2=>{
        //   console.log(response2.data)
        //   console.log(nizProizvoda)
        //   console.log(response2.data)
          nizProizvoda=response2.data
            
          for(let i=0;i<nizProizvoda.length;i++)
          {
              if(nizProizvoda[i].IdAll!=='')
              niz3.push(nizProizvoda[i])
          }
          console.log(niz3)
        //   for(let r = 0;r < response2.data.length;r++)
        //   {
        //     //   console.log(response2.data[i])
        //       nizProizvoda.push(response2.data[i])
        //   }
        //   console.log(nizProizvoda)
        //   var noviNiz = nizProizvoda.filter(n=>n!==undefined)
        //   console.log(noviNiz)
        //   nizProizvoda.push(response2.data)
          this.setState({
             niz:niz3
          })
        //   console.log(nizProizvoda)
      })
    }
    }

    isprazni=(a,s)=>{
        console.log(a,s)
        this.props.history.push("/product/"+a+"/"+s)
        this.setState({
            niz:[]
        })
    }
    focusChange=()=>{
            this.setState({
                focused:true
            })
    }

    focusFalse=()=>{
        this.setState({
            focused:false,
            niz:[]
        })
document.getElementById("pr1").value=""

    }
    render() {
        return (
            <div><div>
{/*  */}
          <input type="text" placeholder="Unesite naziv proizvoda..." id="pr1" onBlur={this.focusFalse}  onFocus={this.focusChange}  onChange={this.pretrazi}/>
            <div className="sp">
          </div>

            <div className={(this.state.focused!==true)?'skriveno':'vidljivaPretraga'}>
            {/* <input type="text" placeholder="Unesite naziv proizvoda..." id="pr2" onChange={this.pretrazi}/>
            <div className="sp"> */}
                {this.state.niz.map(n=>(  
                    <Link className="trazeno" onMouseDown={() => this.isprazni(n.IdAll,n.ID)}>
                    <div className="unutraLink">
                     <div id="naziv">{n.Naziv}</div> <div id="cena">{n.Cena} RSD</div>
                     </div><br/></Link>
                   
                ),(n)=> console.log(n.Naziv))}
            </div>
            </div>
            {/* <button type="submit" id="pr"><i className="fas fa-search"></i></button> */}
            </div>

        )
    }
}
//withRouter omogucava this.props.history.push(...)
export default  withRouter(Searchbar);
