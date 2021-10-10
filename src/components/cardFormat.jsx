import { FiberManualRecord } from "@material-ui/icons";
import React from "react";
import "../css/cardFormat.css";

function CardFormat(props) {
  return (
    <div className="cardformat col-lg-3 col-md-6 col-sm-12">
      <div className="head">
        <img
          className="thumbnail"
          src={props.thumbnail}
          alt="thumbnail"
          height="100%"
          width="100%"
        />
        <span className="duration">{props.duration}</span>
      </div>
      <div className="body row">
        <div className="col-2 avatar">
          <img
            src={props.avatar}
            alt="avatar"
            height="40px"
            width="40px"
          />
        </div>
        <div className="col-10 details">
          <h5 className="title">
            {props.title.length < 50
              ? props.title
              : props.title.substring(0, 50) + "..."}
          </h5>
          <p className="channelName">{props.channel}</p>
          <span className="viewsc">{props.views}</span><FiberManualRecord style={{ color: "grey", fontSize: "5" }} />
          <span className="upload">{props.uploadedOn}</span>
        </div>
      </div>
    </div>
  );
}

export default CardFormat;
