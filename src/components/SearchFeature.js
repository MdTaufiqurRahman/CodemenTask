import React, { useState } from "react";
import { sampleData } from "../data/sampleData";
import "./SearchFeature.css";

const SearchFeature = ({ setSearchData }) => {
  const [searchName, setSearchName] = useState("");

  const handleSearch = () => {
    const filteredData = sampleData?.filter((item) => {
      return item?.name.toLowerCase().includes(searchName.toLowerCase());
    });
    setSearchData(filteredData);
  };

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            id="input_text"
            placeholder="Search by name"
            onChange={(e) => setSearchName(e.target.value)}
          ></input>
          <button onClick={handleSearch} className="searchButton">
            <h6 className="text-search">Search</h6>
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchFeature;
