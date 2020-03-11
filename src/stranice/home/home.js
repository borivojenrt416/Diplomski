import React, { Component } from 'react'
import Preporuka from './preporuka'
import Pametanizbor from './pametanizbor'
import Letizimi from './letizimi'
import './home.scss'

import { connect } from 'react-redux'
import { dohvatiProizvode } from '../../actions/proizvodiAkcije'
import {uzmiTip} from '../../actions/tipAkcija'
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentWillMount() {

    // this.props.uzmiTip("");
    // console.log("pozvano")
    // console.log(this.props.tip);
    // localStorage.setItem("tip","");

  
  }

  render() {
    console.log(this.state.memorije)
    return (
      <div>
        <div className="preporuka">
          <Preporuka/>
          <Pametanizbor/>
          <Letizimi/>
        </div>

      </div>
    )
  }
}
const mapStateToProps = state => ({
  korisnik: state.korisnik.korisnik,
})
export default connect(mapStateToProps, { dohvatiProizvode, uzmiTip })(Home);
