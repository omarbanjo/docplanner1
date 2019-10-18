import React, { Component } from 'react';
class Mainnn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bloc:[
                {
                    image:"https://www.docplanner.com/images/warsaw@2x.png",
                    titre:"Warsaw",
                    titree:"See openings"
                },
                {
                    image:"https://www.docplanner.com/images/barcelona@2x.png",
                    titre:"barcelone",
                    titree:"See openings"
                },
                {
                    image:"https://www.docplanner.com/images/istanbul@2x.png",
                    titre:"istanbul",
                    titree:"See openings"
                },
                {
                    image:"https://www.docplanner.com/images/rome@2x.png",
                    titre:"rome",
                    titree:"See openings"
                },
                {
                    image:"https://www.docplanner.com/images/mexico-city@2x.png",
                    titre:"mexico",
                    titree:"See openings"
                },
                {
                    image:"https://www.docplanner.com/images/curitiba@2x.png",
                    titre:"curitiba",
                    titree:"See openings"
                },

            ]
         }
    }
    render() { 
        return (<div className="improve">
                    <div className="bloc_improve">
                    <p className="title_improve">Improve the lives of millions.Change yours forever </p>

                    <p className="p_improve">More than 1000 team mates share our same vision, goals and passion With offices in
                                        Warsaw, Barcelona, Istanbul, Rome, Mexico City and, our search for great talent never stops.</p>
                    </div>
                    <div className="parent">
                    {this.state.bloc.map(el=><div className="innerParent">
                       <div className="image_improve_haut">
                           <img className="img1_improve" src={el.image}/>
                           <p className="text_improve">{el.titre}</p>
                           <span className="button">{el.titree}</span>
                       </div> 
                       </div>
                       
                        )}</div>
        </div>  );
    }
}
 
export default Mainnn;