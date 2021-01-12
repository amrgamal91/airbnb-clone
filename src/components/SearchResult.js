import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import '../style/SearchResult.css'
const SearchResult = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total
}) => {
  return (
    <div className="searchResult">
      <img src={img} alt="searchResult-img" />
      <FavoriteBorderIcon className="searchResult-heart" />

      <div className="searchResult-info">
        <div className="searchResult-infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>___</p>
          <p>{description}</p>
        </div>
        <div className="searchResult-infoBottom">
          <div className="searchResult-stars">
            <StarIcon className="searchResult-star">
              <p>
                <strong>{star}</strong>
              </p>
            </StarIcon>
          </div>
          <div className="searchResults-price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
