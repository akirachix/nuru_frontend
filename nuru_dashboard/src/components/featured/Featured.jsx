import Navbar from "../../components/navbar/Navbar";
// import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <Navbar />
        <div className="total-sms">
          <Widget type="total" />
          <Widget type="consumed" />
          <Widget type="balance" />

        </div>
        <div className="charts">
          <Featured />
          <Chart title="Registered Users" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Appointments</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
