import React from "react";


const Navbar = ({ totalCounter }) => {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Navbar{" "}
            <span className="badge badge-pill badge-secondary">
              {totalCounter}
            </span>
          </a>
        </nav>
      </React.Fragment>
    );
}
 
export default Navbar;


