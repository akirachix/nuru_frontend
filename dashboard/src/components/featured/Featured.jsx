import "./feature.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        {/* <h1 className="title">Sent SMS</h1>
        <MoreVertIcon fontSize="small" /> */}
      </div>
      <div className="bottom">
      <p className="amount1">Sent Sms</p>
     <hr className="hr" />
        <div className="featuredChart">
          <CircularProgressbar value={59} text={"4.213%"} strokeWidth={15} />
        </div>
        <p className="strong"><strong>.</strong> sms</p>
        <div className="summary">
        </div>
      </div>
      
    
    </div>
  );
};
export default Featured;