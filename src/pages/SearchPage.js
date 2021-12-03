import React from "react";
import { useStateValue } from "../StateProvider";
import "./SearchPage.css";
import useGoogleSearch from "../useGoogleSearch";
//import Response from "../response";
import { Link } from "react-router-dom";
//import SearchIcon from "@mui/icons-material/Search";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { dividerClasses } from "@mui/material";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  //console.log(term);
  //debugger;

  const { data } = useGoogleSearch(term); // live API call

  //const data = Response;
  console.log(term);

  console.log("data", data);

  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="searchPage_logo"
            src="https://lh3.googleusercontent.com/d_S5gxu_S1P6NR1gXeMthZeBzkrQMHdI5uvXrpn3nfJuXpCjlqhLQKH_hbOxTHxFhp5WugVOEcl4WDrv9rmKBDOMExhKU5KmmLFQVg"
            alt="Google logo"
          />
        </Link>
        <div className="searchPage_headerBody">
          <Search hidebuttons={true} />
          <div className="searchPage_options">
            <div className="searchPage_optionsLeft">
              <div className="searchPage_option">
                <SearchIcon className="optionicons" />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage_option">
                <DescriptionIcon className="optionicons" />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage_option">
                <ImageIcon className="optionicons" />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage_option">
                <LocalOfferIcon className="optionicons" />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage_option">
                <RoomIcon className="optionicons" />
                <Link to="/maps">maps</Link>
              </div>
              <div className="searchPage_option">
                <MoreVertIcon className="optionicons" />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="searchPage_optionsRight">
              <div className="searchPage_option">
                <Link to="/settings">settings</Link>
              </div>
              <div className="searchPage_option">
                <Link to="/tools">tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {data ? (
        <div className="searchPage_results">
          <p className="searchPage_resultCount">
            About {data.searchInformation.formattedTotalResults} results{" "}
            {data.searchInformation.formattedSearchTime} seconds for {term}
          </p>
          {data.items.map((item) => (
            <div className="searchPage_result">
              <a href={item.link}>{item.displayLink}</a>
              <a className="searchPage_resultTitle" href={item.link}>
                <h3>{item.title}</h3>
              </a>
              <p className="searchPage_resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SearchPage;
