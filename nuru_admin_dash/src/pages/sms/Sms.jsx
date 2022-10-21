import "./sms.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"



const Sms = () => {
  return (
    <div className="sms">
        <Sidebar/>
        <div className="smsContainer">
            <Navbar/>
            <p className="para">Notification type <span>Reciepient</span> </p>        
        <div className="total">
          <Widget type="total" />
          <Widget type="consumed" />
          <Widget type="balance" />
        </div>
        <div className="allCharts">
        <div className="charts">
          <Featured />
        </div>
        <div className="charts">
          <Featured />
        </div>
        </div>
        <div className="allCharts">
        <div className="charts">
          <Featured />
        </div>
        <div className="charts">
          <Featured />
        </div>
        </div>
        </div>
    </div>
  )
}

export default Sms