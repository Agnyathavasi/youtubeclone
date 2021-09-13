import React from "react";
import "../css/leftBar.css";
import HomeIcon from "@material-ui/icons/Home";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@material-ui/icons/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@material-ui/icons/HistoryOutlined";
import OndemandVideoOutlinedIcon from "@material-ui/icons/OndemandVideoOutlined";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TheatersOutlinedIcon from "@material-ui/icons/TheatersOutlined";
import SportsEsportsOutlinedIcon from "@material-ui/icons/SportsEsportsOutlined";
import SettingsInputAntennaIcon from "@material-ui/icons/SettingsInputAntenna";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import SportsCricketOutlinedIcon from "@material-ui/icons/SportsCricketOutlined";
import {
  FeedbackOutlined,
  FlagOutlined,
  HelpOutline,
  SettingsOutlined,
} from "@material-ui/icons";

function LeftBar() {
  return (
    <div className="leftBar">
      <dl className="list">
        <dt className="listitem">
          <HomeIcon style={{ color: "white", fontSize: "24px" }} />
          <span className="text">Home</span>
        </dt>
        <dt className="listitem">
          <ExploreOutlinedIcon style={{ color: "white", fontSize: "24px" }} />
          <span className="text">Explore</span>
        </dt>
        <dt className="listitem">
          <SubscriptionsOutlinedIcon
            style={{ color: "white", fontSize: "24px" }}
          />
          <span className="text">Subscriptions</span>
        </dt>
      </dl>
      <dl className="list">
        <dt className="listitem">
          <VideoLibraryOutlinedIcon
            style={{ color: "white", fontSize: "24px" }}
          />
          <span className="text">Library</span>
        </dt>
        <dt className="listitem">
          <HistoryOutlinedIcon style={{ color: "white", fontSize: "24px" }} />
          <span className="text">History</span>
        </dt>
        <dt className="listitem">
          <OndemandVideoOutlinedIcon
            style={{ color: "white", fontSize: "24px" }}
          />
          <span className="text">Your videos</span>
        </dt>
        <dt className="listitem">
          <WatchLaterOutlinedIcon
            style={{ color: "white", fontSize: "24px" }}
          />
          <span className="text">Watch later</span>
        </dt>
        <dt className="listitem">
          <ThumbUpOutlinedIcon style={{ color: "white", fontSize: "24px" }} />
          <span className="text">Liked videos</span>
        </dt>
      </dl>
      <dl className="list">
        <h6>SUBSCRIPTIONS</h6>
        <dt className="listitem">
          <AccountCircleOutlinedIcon
            style={{ color: "white", fontSize: "24px" }}
          />
          <span className="text">Round2Hell</span>
        </dt>
        <dt className="listitem">
          <AccountCircleOutlinedIcon
            style={{ color: "white", fontSize: "24px" }}
          />
          <span className="text">BB Ki Vines</span>
        </dt>
        <dt className="listitem">
          <AccountCircleOutlinedIcon
            style={{ color: "white", fontSize: "24px" }}
          />
          <span className="text">CarryMinati</span>
        </dt>
        <dt className="listitem">
          <AccountCircleOutlinedIcon
            style={{ color: "white", fontSize: "24px" }}
          />
          <span className="text">sdridertube</span>
        </dt>
        <dt className="listitem">
          <AccountCircleOutlinedIcon
            style={{ color: "white", fontSize: "24px" }}
          />
          <span className="text">Raghu Vine Store</span>
        </dt>
        <dt className="listitem">
          <AccountCircleOutlinedIcon
            style={{ color: "white", fontSize: "24px" }}
          />
          <span className="text">RJ Abhinav</span>
        </dt>
        <dt className="listitem">
          <AccountCircleOutlinedIcon
            style={{ color: "white", fontSize: "24px" }}
          />
          <span className="text">Angry Prash</span>
        </dt>
        <dt className="listitem">
          <ExpandMoreOutlinedIcon
            style={{ color: "white", fontSize: "24px" }}
          />
          <span className="text">Show 10 more</span>
        </dt>
      </dl>
      <dl className="list">
        <h6>MORE FROM YOUTUBE</h6>
        <dt className="listitem">
          <YouTubeIcon style={{ color: "white", fontSize: "24px" }} />
          <span className="text">Youtube premium</span>
        </dt>
        <dt className="listitem">
          <TheatersOutlinedIcon style={{ color: "white", fontSize: "24px" }} />
          <span className="text">Movies</span>
        </dt>
        <dt className="listitem">
          <SportsEsportsOutlinedIcon
            style={{ color: "white", fontSize: "24px" }}
          />
          <span className="text">Gaming</span>
        </dt>
        <dt className="listitem">
          <SettingsInputAntennaIcon
            style={{ color: "white", fontSize: "24px" }}
          />
          <span className="text">Live</span>
        </dt>
        <dt className="listitem">
          <EmojiObjectsOutlinedIcon
            style={{ color: "white", fontSize: "24px" }}
          />
          <span className="text">Learning</span>
        </dt>
        <dt className="listitem">
          <SportsCricketOutlinedIcon
            style={{ color: "white", fontSize: "24px" }}
          />
          <span className="text">Sports</span>
        </dt>
      </dl>
      <dl className="list">
        <dt className="listitem">
          <SettingsOutlined style={{ color: "white", fontSize: "24px" }} />
          <span className="text">Settings</span>
        </dt>
        <dt className="listitem">
          <FlagOutlined style={{ color: "white", fontSize: "24px" }} />
          <span className="text">Report history</span>
        </dt>
        <dt className="listitem">
          <HelpOutline style={{ color: "white", fontSize: "24px" }} />
          <span className="text">Help</span>
        </dt>
        <dt className="listitem">
          <FeedbackOutlined style={{ color: "white", fontSize: "24px" }} />
          <span className="text">Feedback</span>
        </dt>
      </dl>
      <div className="bottomspace"></div>
    </div>
  );
}

export default LeftBar;
