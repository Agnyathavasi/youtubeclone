import React from "react";
import "../css/rightSection.css";
import CardFormat from "./cardFormat";
import SuggestionBar from "./suggestionbar";
import content from "./contentItems";

function RightSection() {
  let arr = content.sort(() => Math.random() - 0.5);
  return (
    <div className="rightSection">
      <SuggestionBar />
      <div className="row items">
        {arr.map((it, index) => {
          return (
            <CardFormat
              key={index}
              id={it.id}
              title={it.title}
              channel={it.channel}
              views={it.views}
              uploadedOn={it.uploadedOn}
              avatar={it.avatar}
              thumbnail={it.thumbnail}
              duration={it.duration}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RightSection;
