import React from 'react';
import summer from '../Images/summer.png';
import school from '../Images/school.jpg';
import old from '../Images/old.jpg';
import rand from '../Images/rand.jpg';



export default class NewsBox extends React.Component{

   render(){

    return(
        <div className="text-center row">
            <div className="col-3 newsimg">
            <a href="">
                <img className="image" src={summer}></img> 
                </a>
            </div>
            <div className="col-3 newsimg">
            <a href="">
                <img className="image" src={school}></img> 
                </a>
            </div>
            <div className="col-3 newsimg">
            <a href="">
                <img className="image" src={old}></img> 
                </a>
            </div>
            <div className="col-3 newsimg">
            <a href="">
                <img className="image" src={rand}></img> 
                </a>
            </div>
        </div>
    )
   }



}
