import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import fantasy from "../Data/fantasy.json";
import horror from "../Data/horror.json";
import history from "../Data/history.json";
import romance from "../Data/romance.json";
import scifi from "../Data/scifi.json";
import GetB from "./ToggleComments.jsx";
import { type } from "os";
import { throwStatement } from "@babel/types";
import BookPagination from "./pagination.jsx";

let shows;
let lat;

class Single extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      nComments: 0,
      asin: "",
      pageId: this.props.match.params.id
    };
  }

  loadComment = async id => {
    var getId = id;
    console.log(getId);
    var response = await fetch(
      "https://strive-school-testing-apis.herokuapp.com/api/comments/" + getId,
      {
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: "basic dXNlcjM6blo0dUZkOWhCcDNkdktMdQ=="
        })
      }
    );
    var json = await response.json();
    this.setState({
      nComments: json.length
    });
    this.setState({
      comments: json
    });
    console.log(json);
    return json;
  };

  render() {
    console.log(this.state.pageId);
    switch (this.state.pageId) {
      case "fantasy":
        shows = fantasy.map(item => {
          return (
            <>
            <div className="row mb-2 pb-1">
              <div className="col-4 col-sm-4">
                  <div class="">
                    <img class="" src={item.img} alt={item.title} />
                  </div>
              </div>
                  <div className="col-8 col-sm-8 info-book">

                    <h3>{item.title}</h3>
                    <p>
                      <strong>Price: </strong>$ {item.price}
                    </p>
                  <Button onClick={() => this.loadComment(item.asin)}>
                    Buy Now
                  </Button>  
                  {/*  <GetB comments={this.state.comments}
                            numbComments={this.state.nComments}
                            idToggle = {item.asin}
                      /> */}
                  </div>
              </div>
              <hr/>
            </>
          );
        });
        lat = shows.slice(this.props.min, this.props.max);
        return lat;
        break;
      case "horror":
        shows = horror.map(item => {
          return (
            <>
            <div className="row mb-2 pb-1">
              <div className="col-4 col-sm-4">
                  <div class="">
                    <img class="" src={item.img} alt={item.title} />
                  </div>
              </div>
                  <div className="col-8 col-sm-8 info-book">

                    <h3>{item.title}</h3>
                    <p>
                      <strong>Price: </strong>$ {item.price}
                    </p>
                  <Button onClick={() => this.loadComment(item.asin)}>
                    Buy Now
                  </Button>  
                  {/*  <GetB comments={this.state.comments}
                            numbComments={this.state.nComments}
                            idToggle = {item.asin}
                      /> */}
                  </div>
              </div>
              <hr/>
            </>
          );
        });
        lat = shows.slice(this.props.min, this.props.max);
        return lat;
        break;

      case "history":
        shows = history.map(item => {
          return (
            <>
            <div className="row mb-2 pb-1">
              <div className="col-4 col-sm-4">
                  <div class="">
                    <img class="" src={item.img} alt={item.title} />
                  </div>
              </div>
                  <div className="col-8 col-sm-8 info-book">

                    <h3>{item.title}</h3>
                    <p>
                      <strong>Price: </strong>$ {item.price}
                    </p>
                  <Button onClick={() => this.loadComment(item.asin)}>
                    Buy Now
                  </Button>  
                  {/*  <GetB comments={this.state.comments}
                            numbComments={this.state.nComments}
                            idToggle = {item.asin}
                      /> */}
                  </div>
              </div>
              <hr/>
            </>
          );
        });
        lat = shows.slice(this.props.min, this.props.max);
        return lat;
        break;

      case "romance":
        shows = romance.map(item => {
          return (
            <>
            <div className="row mb-2 pb-1">
              <div className="col-4 col-sm-4">
                  <div class="">
                    <img class="" src={item.img} alt={item.title} />
                  </div>
              </div>
                  <div className="col-8 col-sm-8 info-book">

                    <h3>{item.title}</h3>
                    <p>
                      <strong>Price: </strong>$ {item.price}
                    </p>
                  <Button onClick={() => this.loadComment(item.asin)}>
                    Buy Now
                  </Button>  
                  {/*  <GetB comments={this.state.comments}
                            numbComments={this.state.nComments}
                            idToggle = {item.asin}
                      /> */}
                  </div>
              </div>
              <hr/>
            </>
          );
        });
        lat = shows.slice(this.props.min, this.props.max);
        return lat;
        break;

      case "scifi":
        shows = scifi.map(item => {
          return (
            <>
            <div className="row mb-2 pb-1">
              <div className="col-4 col-sm-4">
                  <div class="">
                    <img class="" src={item.img} alt={item.title} />
                  </div>
              </div>
                  <div className="col-8 col-sm-8 info-book">

                    <h3>{item.title}</h3>
                    <p>
                      <strong>Price: </strong>$ {item.price}
                    </p>
                  <Button onClick={() => this.loadComment(item.asin)}>
                    Buy Now
                  </Button>  
                  {/*  <GetB comments={this.state.comments}
                            numbComments={this.state.nComments}
                            idToggle = {item.asin}
                      /> */}
                  </div>
              </div>
              <hr/>
            </>
          );
        });
        lat = shows.slice(this.props.min, this.props.max);
        return lat;
        break;
    }
  }
}

export default Single;
