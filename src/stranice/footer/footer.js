import React, { Component } from 'react'
import Red1 from './red1'
import Red2 from './red2'
import Red3 from './red3'
import Red4 from './red4'
export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                 <Red2/>
                <Red1/>
                <Red3/>
                <Red4/>
            </div>
        )
    }
}

export default Footer;
