import React, { Component } from 'react';
class Header extends Component {
   
    
    render() { 
        return ( 
            <div className="header">
<div className="nav-bar">
            <div class="img-logo">
                <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" width="268 px" height="35 px"
                    alt="doc_planner_logo"/>
            </div>
            <nav>
                <ul className="li-style">
                    <li className= "color">About us </li>
                    <li>Carrer</li>
                    <li>Department</li>
                </ul>
            </nav>

        </div>
        <section className="star_title">
            <div className="star">
                <img src="https://www.docplanner.com/img/sygnet.png" alt="star"/>
            </div>
            <div className="first_title">
                <h1>Making the healthcare experience more human</h1>
            </div>
        </section>

            </div>
            
         );
    }
}
 
export default Header ;