import React, { Component } from 'react';
import NavBook from "./navbar";
import JumbBook from "./jumbotron";
import Latest from './latest';
import Warn from './warningSign';
import InfoNav from './infoNav';
import NewsBox from './newsBox';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewBooks from './newBooks';
import Footer from './footer';


class MyBook extends Component {
  render() {
    return (
      <Router>

        <>
      {/*     <NavBook/> */}
          <InfoNav/>
          <Route exact path="/"  render={() => (
            <>
                    <div class="container">
                    <JumbBook/>
                    <hr/>
                   {/*  <Warn name="OFFERS EXPIRE IN 3 DAYS"/> */}
                   <NewsBox/>
                   <hr/>
                   <NewBooks/>
                   <hr/>
                   
                      </div>

                          <Footer/>
   
                      </>
          )}/>
        <Latest/>

      </>
      </Router>
    );
  }
}
export default MyBook;