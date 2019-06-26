import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, NavList } from "./Navbar.styles";
import Search from "../Search/Search";

const Navbar = () => {
  return (
    <Nav>
      {/* Company logo routed to home page */}
      <Link to="/" role="link" aria-label="Cruisey Movie Monday">
        <span className="brand" aria-hidden="true">
          <img src="/logo.jpg" width="40" height="40" alt="Tom Cruise Logo" />{" "}
          <span>Cruisey Movie Monday</span>
        </span>
      </Link>

      <NavList>
        <Search />
      </NavList>
    </Nav>
  );
};

export default withRouter(Navbar);
