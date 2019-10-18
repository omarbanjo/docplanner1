import React, { Component } from 'react';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bloc:[
                {   background:'#00CCB1',
                    para:"We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.",
                    titre:"For patients",
                    titree:"Find a doctor, book a visit and solve any health-related doubt",
                    image:"https://www.docplanner.com/img/screen-marketplace@2x.png"
                },
                {   
                    background:'#3D83DF',
                    para:"We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.",
                    titre:"For doctors",
                    titree:"Save time managing visits and cut no-shows by half",
                    image:"https://www.docplanner.com/img/screen-saas@2x.png"
                }   
            ],
            title:[
                {
                    image:"https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/jcmy9zzlqh682l0my9p3",
                    titre:"ZnanyLekarz"
                },
                {
                    image:"https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/jcmy9zzlqh682l0my9p3",
                    titre:"Doctoralia"
                },
                {
                    image:"https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/jcmy9zzlqh682l0my9p3",
                    titre:"MioDottore"
                },
                {
                    image:"https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/jcmy9zzlqh682l0my9p3",
                    titre:"DoktorTakvimi"
                },
                {
                    image:"https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/jcmy9zzlqh682l0my9p3",
                    titre:"ZnamyLekar"
                }
            ]
        
        }
        
    }
    render() { 
        return ( <div>
            <div className="main_1">

{this.state.bloc.map(el=>
    
<div>
    <div>
    <p className="paragraphes">{el.para}</p>
    </div>
    <div className="images" style={{background: el.background}}>
        <p className="categorie">{el.titre}</p>
        <p className="p_categorie">{el.titree}</p>
        <img className="screen" src={el.image}/>
    </div>
</div>
    )
}
 </div>
 <div className="global_campany">
     
     <div className="div_title_global_campany">
         <p className="title_global_campany"> We are a global company with local culture</p>
     </div>
     {this.state.title.map(el=>
     <div className ="img_global_campany">
<img className="screen_1" src={el.image}/>
<p className=" titre-svg">{el.titre}</p>
     </div>
     )}
 </div>
 </div>
         )
    }
    
}
 
export default Main;