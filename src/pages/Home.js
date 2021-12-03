import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/icons-material/AccountCircle";
import Search from "../components/Search";

function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <Link to="/about">About</Link>
          <a href="https://chrome.google.com/webstore/category/extensions?utm_source=chrome-ntp-icon">
            Store
          </a>
        </div>
        <div className="home_headerRight">
          <a href="https://www.google.com/intl/en-GB/gmail/about/">Gmail</a>
          <a href="https://www.google.co.in/imghp?hl=en&ogbl">Images</a>
          <Link to="/apps">
            <AppsIcon style={{ fontSize: "30", color: "#414040de" }} />
          </Link>
          <Link to="/apps">
            <Avatar style={{ fontSize: "39", color: "#414040de" }} />
          </Link>
        </div>
      </div>
      <div className="home_body">
        <img
          src="https://lh3.googleusercontent.com/d_S5gxu_S1P6NR1gXeMthZeBzkrQMHdI5uvXrpn3nfJuXpCjlqhLQKH_hbOxTHxFhp5WugVOEcl4WDrv9rmKBDOMExhKU5KmmLFQVg"
          alt="Google logo"
        />
        <div className="input_container">
          <Search hidebuttons={false} />
        </div>
      </div>
    </div>
  );
}

export default Home;
