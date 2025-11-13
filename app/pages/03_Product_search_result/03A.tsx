import React from "react";
import "./03A.scss";
import CheckboxLabels from "../../components/Checkbox_label";

export default function SearchPage() {
  return (
    <div className="search-page">
        <div>
            <h1>TOP BAR GOES HERE</h1>
        </div>
      <h1>Search Result</h1>
      <p>This is your product search result page.</p>
       <CheckboxLabels />
    </div>
  );
}
