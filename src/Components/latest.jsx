import React, { Component } from "react";
import MyBadge from "./BadgeBook";
import items from "../Data/fantasy.json";
import fantasy from "../Data/fantasy.json";
import horror from "../Data/horror.json";
import history from "../Data/history.json";
import romance from "../Data/romance.json";
import scifi from "../Data/scifi.json";
import Single from "./SingleBook";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookPagination from "./pagination";
import FilterBar from "./filterBar";

class Latest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageId: ""
    };
  }

  render() {
    return (
      <Router>
        <div class="container-fluid title-genres">
          <h2 className="mb-2">{this.state.pageId}</h2>
          <div class="row">
            {/* <Route path="/:id" exact component = {BookPagination}/> */}
            <Route
              path="/:id"
              render={routeProps => (
                <>
                  <div className="col-2">
                    <FilterBar />
                  </div>
                  <div className="col-10">
                    <BookPagination {...routeProps} />
                  </div>
                </>
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}
export default Latest;
