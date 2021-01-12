import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "../style/Banner.css";
import Search from "./Search";
import { useHistory } from "react-router-dom";

const Banner = () => {
  const history = useHistory();

  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          variant="outlined"
          className="banner_searchButton"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Get out and strech your imangination</h1>
        <h5>
          Plan a different kind of gateway to uncover the hidden gems near you.
        </h5>
        <Button onClick={() => history.push('/search')} variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
