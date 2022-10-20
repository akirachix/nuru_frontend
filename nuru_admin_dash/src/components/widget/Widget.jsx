import "./widget.scss";
import { MessageRounded, SmsRounded } from "@mui/icons-material";

const Widget = ({ type }) => {
  let data;


  switch (type) {
    case "total":
      data = {
        title: "Total SMS",
        totals: 2000,
        icon: (
          <MessageRounded
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "consumed":
      data = {
        title: "Consumed SMS",
        totals : 2000,
        icon: (
          <MessageRounded
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "  Balance",
        totals : 4000,
        icon: (
          <SmsRounded
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    default:
      break;
  }


  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
        </span>
        <span className="link">{data.totals}</span>
      </div>
      <div className="right">
        {data.icon}
      </div>
     </div>
  );
};

export default Widget;
