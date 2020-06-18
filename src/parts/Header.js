import React from "react";
import Button from "elements/Button";
import BrandIcon from "parts/iconText";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    console.log(path, "props path ");
    console.log(props.location.pathname, "location name");
    return props.location.pathname === path ? " active" : "";
  };
  // <header className="spacing-sm">
  //   <div className="container">
  //     <nav className="navbar navbar-expand-lg navbar-light">
  //       <Button className="brand-text-icon mx-auto " href="" type="link">

  //       </Button>
  //     </nav>
  //   </div>
  // </header>
  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon />
          <div className=" collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-items${getNavLinkClass("/")}`}>
                <Button className="nav-link" href="/" type="link">
                  Home
                </Button>
              </li>
              <li className={`nav-items${getNavLinkClass("/browse-by")}`}>
                <Button className="nav-link" href="/browse-by" type="link">
                  Browse By
                </Button>
              </li>
              <li className={`nav-items${getNavLinkClass("/stories")}`}>
                <Button className="nav-link" href="/stories" type="link">
                  Stories
                </Button>
              </li>
              <li className={`nav-items${getNavLinkClass("/agents")}`}>
                <Button className="nav-link" href="/agents" type="link">
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
