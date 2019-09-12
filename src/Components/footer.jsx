import React from 'react';

export default class Footer extends React.Component{


    render(){
        return(
            <>
<footer className="page-footer font-small unique-color-dark pt-4 bg-footer">
  <div className="container">
    <ul className="list-unstyled list-inline text-center py-2">
      <li className="list-inline-item">
        <h5 className="mb-1">Register for free</h5>
      </li>
      <li className="list-inline-item">
        <a href="#!" class="btn btn-outline-white btn-rounded">Sign up!</a>
      </li>
    </ul>
  </div>
  <div className="footer-copyright text-center py-3">© 2018 Copyright:
    <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
  </div>
</footer>
            </>
        )
    }

}