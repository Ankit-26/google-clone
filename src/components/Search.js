import React from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import "./Search.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = (props) => {
  const [input, setInput] = useState("");
  const [{}, dispatch] = useStateValue();

  const search = (e) => {
    //e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    console.log("input", input);
  };

  const inputHandler = (val) => {
    setInput(val.target.value);
    //console.log("submitted input", input);
  };

  //

  return (
    <form className="search" onSubmit={(event) => event.preventDefault()}>
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={(event) => inputHandler(event)} />
        <MicIcon className="search_micIcon" />
      </div>
      {!props.hidebuttons ? (
        <div className="search_buttons">
          <Link to="/search">
            <Button type="submit" variant="outlined" onClick={search}>
              Google Search
            </Button>
          </Link>

          <Button variant="outlined">I'm felling Lucky</Button>
        </div>
      ) : (
        <div className="search_buttonsHidden">
          <Link to="/search">
            <Button type="submit" variant="outlined" onClick={search}>
              Google Search
            </Button>
          </Link>

          <Button variant="outlined">I'm felling Lucky</Button>
        </div>
      )}
    </form>
  );
};

export default Search;
