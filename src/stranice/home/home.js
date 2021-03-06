import React, { Component } from 'react'
import Preporuka from './preporuka'
import Pametanizbor from './pametanizbor'
import Letizimi from './letizimi'
import './home.scss'

import { connect } from 'react-redux'
import { dohvatiProizvode } from '../../actions/proizvodiAkcije'
import {uzmiTip,oznaci} from '../../actions/tipAkcija'
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentWillMount() {
    this.props.oznaci("")
  }

  render() {
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
export default connect(mapStateToProps, { dohvatiProizvode, uzmiTip, oznaci })(Home);
