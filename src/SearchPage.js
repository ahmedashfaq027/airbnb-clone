import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays • 26 august to 30 august • 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usgp=CAU"
        location="Private room in Secunderabad"
        title="Yoga Retreat"
        description="1 guests • 1 bedroom • 0 beds • 1.5 bathrooms • Kitchen • Free parking • Washing Machine"
        star={4.73}
        price="$30 / night"
        total="117 total"
      />
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usgp=CAU"
        location="Private room in Secunderabad"
        title="Yoga Retreat"
        description="1 guests • 1 bedroom • 0 beds • 1.5 bathrooms • Kitchen • Free parking • Washing Machine"
        star={4.73}
        price="$30 / night"
        total="117 total"
      />
    </div>
  );
}

export default SearchPage;
