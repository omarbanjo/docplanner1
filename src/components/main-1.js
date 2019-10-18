 import React, { Component } from 'react';
class Mainn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
               bloc:[
                   {
                       image:"https://www.docplanner.com/img/flag.png",
                       titre:"Leader in 10 countries",
                       para:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"

                   },
                   {
                       image:"https://www.docplanner.com/img/visits.png",
                       titre:"1.5 million appointments",
                       para:"booked last month"
                   },
                   {
                    image:"https://www.docplanner.com/img/patients.png",
                    titre:"30 million unique patients",
                    para:"visit us every month"
                },
                {
                    image:"https://www.docplanner.com/img/doctors.png",
                    titre:"2 million active doctors",
                    para:"trust in our solutions"
                },

               ]


         }
    }
    render() { 
        return ( <div className="healcare_platform">
            <div className="text_platform">
             <p className="title_platform">The world's biggest healthcare platform </p>
                <p className="p_platform" >We work from 6 offices all over the world, bringing
                    Docplanner Group to life in almost 20 countries. </p>
                <img className="big_star" src="https://www.docplanner.com/img/logo.png" alt="big_star"/>
                </div>
                <div className="cadress">
            {this.state.bloc.map(el=>
                  <div className="cadres">
                <img className="image" src={el.image}/>
                <p className="title_cadre"> {el.titre}</p>
                <p className="p_cadre">{el.para}</p>
                </div>  
                )}</div>
        </div> );
    }
}
 
export default Mainn;