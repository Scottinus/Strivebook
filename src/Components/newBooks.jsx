import React from "react";
import fantasy from '../Data/fantasy.json';
import MyBadge from "./BadgeBook.jsx";

const style ={
    margin: '10px', 
    marginBottom: '10px',
    backgroundColor: "#eee",
    borderRadius: '3px'
}


export default class NewBooks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cust-container">
      <h3>Top Books</h3>
        <div className="row d-flex mr-5">
        <div className="col-sm-12 col-lg-6 ml-4" style={style}>
            <div className="row mt-3">
                <div className="col-sm-12 col-lg-6">
                   <img className="cust-img mt-4 mb-4 mr-3" src={fantasy[0].img}/>
                </div>
                <div className="col-sm-12 col-lg-6 align-middle">
                    <div className="mt-5">
                   <MyBadge color={"danger"} numb={'1'}/>
                   <p><strong>
               {fantasy[0].title}
                   </strong><br/>
                    asin: {fantasy[0].asin}<br/>
                    <strong>price: </strong>
                    ${fantasy[0].price}
                   </p> 

                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm-12 col-lg-5">
            <div className="row">
                <div className="col-sm-12 col-lg-6">
                <img className="float-left mt-4 mb-4 mr-3 w-60" src={fantasy[12].img}/>
                   <MyBadge color={"danger"} numb={'2'}/>
                   <p><strong>
               {fantasy[12].title}
                   </strong><br/>
                    asin: {fantasy[2].asin}<br/>
                    <strong>price: </strong>
                    ${fantasy[12].price}
                   </p> 
                </div>
                <div className="col-sm-12 col-lg-6">
                <img className="float-left mt-4 mb-4 mr-3 w-40" src={fantasy[15].img}/>
                   <MyBadge color={"danger"} numb={'3'}/>
                   <p><strong>
               {fantasy[15].title}
                   </strong><br/>
                    asin: {fantasy[15].asin}<br/>
                    <strong>price: </strong>
                    ${fantasy[15].price}
                   </p> 
                </div>
            </div>
        </div>
        </div>
      </div>
    );
  }
}
