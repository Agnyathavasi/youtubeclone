import React from "react";
import "../css/suggestionbar.css";
import suggitems from "./suggestitems";

function SuggestionBar() {
  let arr = suggitems;
  return (
    <div className="suggestionbar">
      {arr.map((item, index) => {
        return (
          <div className="contents">
            <span>{item}</span>
          </div>
        );
      })}
    </div>
  );
}

export default SuggestionBar;
