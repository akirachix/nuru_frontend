import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Sent SMS</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={59} text={"59%"} strokeWidth={15} />
        </div>
        <p className="title">Total sms sent today</p>
        <p className="amount">1420</p>
        <div className="summary">

        </div>
      </div>
    </div>
  );
};

export default Featured;
