import React,{Component} from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import './navigacija.scss'
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css"
import {connect} from 'react-redux'
import {Animated} from "react-animated-css";


class Navigacija extends Component{
    constructor(props) {
        super(props)
        
        this.state={
            show:false
        };
    

    }

    changeShow=()=>{
        // console.log(this.state.show)
        // this.setState({
        //     show:!this.state.show
        // })
        console.log(document.getElementById("p"))
        if(document.getElementById("p").style.height!=="465px")
        {
            document.getElementById("p").style.height="465px"
          
        }
        
        else
        {
            document.getElementById("p").style.height="0px"
          
        }
        
    }

    

    render(){
        return(<div>
            <div className="lista">
                <ul className="flex-container">
                    <Link to="/proizvodi/desktop" ><li className={localStorage.getItem("tip")=="desktop"?"act":""}>Desktop računari</li></Link>
                    <Link to="/proizvodi/monitori"  ><li className={localStorage.getItem("tip")=="monitori"?"act":""}>Monitori</li></Link> 
                    <Link to="/proizvodi/maticneploce"  ><li className={localStorage.getItem("tip")=="maticneploce"?"act":""}>Matične ploče</li></Link> 
                    <Link to="/proizvodi/procesori"  ><li className={localStorage.getItem("tip")=="procesori"?"act":""}>Procesor</li></Link> 
                    <Link to="/proizvodi/memorije" ><li className={localStorage.getItem("tip")=="memorije"?"act":""}>Memorije</li></Link> 
                    <Link to="/proizvodi/grafickekarte"  ><li className={localStorage.getItem("tip")=="grafickekarte"?"act":""}>Grafičke kartice</li></Link> 
                    <Link to="/proizvodi/hdd"  ><li className={localStorage.getItem("tip")=="hdd"?"act":""}>HDD</li></Link>
                    <Link to="/proizvodi/ssd"  ><li className={localStorage.getItem("tip")=="ssd"?"act":""}>SSD</li></Link>
                    <Link to="/proizvodi/napajanja"  ><li className={localStorage.getItem("tip")=="napajanja"?"act":""}>Napajanja</li></Link>
                    <Link to="/proizvodi/kucista"  ><li className={localStorage.getItem("tip")=="kucista"?"act":""}>Kućišta</li></Link>  
                </ul>
              
            </div>
            <div className="burger">
            <Link to="#" className="mobileLink" onClick={this.changeShow}><li><i className="fas fa-bars"></i></li></Link>
            <div id="p" className="innerBurger" >
           
                    <Link to="/proizvodi/desktop" className="mobileLink" ><li>Desktop računari</li></Link>
                    <Link to="/proizvodi/monitori"  className="mobileLink" ><li>Monitori</li></Link> 
                    <Link to="/proizvodi/maticneploce" className="mobileLink"><li>Matične ploče</li></Link> 
                    <Link to="/proizvodi/procesori" className="mobileLink"><li>Procesor</li></Link> 
                    <Link to="/proizvodi/memorije" className="mobileLink"><li>Memorije</li></Link> 
                    <Link to="/proizvodi/grafickekarte" className="mobileLink"><li>Grafičke kartice</li></Link> 
                    <Link to="/proizvodi/hdd" className="mobileLink"><li>HDD</li></Link>
                    <Link to="/proizvodi/ssd" className="mobileLink"><li>SSD</li></Link>
                    <Link to="/proizvodi/napajanja" className="mobileLink"><li>Napajanja</li></Link>
                    <Link to="/proizvodi/kucista" className="mobileLink"><li>Kućišta</li></Link>
      
                    </div>  
            </div>
            </div>
    );
    }
}
const mapStateToProps = state =>({
    tip:state.tip.tip
  })
  
  export default connect(mapStateToProps)(Navigacija);