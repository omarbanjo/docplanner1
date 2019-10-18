import React, { Component } from 'react';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="style">
           <p className="fin">We are leaders in 10 countries:<span> Poland</span>,<span> Turkey</span>,<span> Spain</span>,<span> Italy</span>, <span>Czech Republic</span>,<span> Mexico</span>, <span>Colombia</span>,<span> Brazil</span>, <span>Argentina </span>and <span>Chile </span></p>
            <p className="fin">This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.</p>
           <p className="fin"> www.docplanner.com &copy; 2019</p>


        </div> );
    }
}
 
export default  Footer;