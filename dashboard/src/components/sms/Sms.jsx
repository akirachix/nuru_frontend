import Featured from "../featured/Featured";
import "./sms.css"

function Sms (){
    return (
        <div className="sms">
            <div className="container">
            <div className="sms-container">
            <p class="para">Notification type <span>Receipient</span></p>
            </div>
            <div className="smss">
                <div className="sms1">
                    <p>Total SMS</p>
                    <br />
                    <p>2000</p>
                </div>
                <div className="sms2">
                    <p>Consumed SMS</p>
                    <br />
                    <p>2000</p>
                </div>
                <div className="sms3">
                    <p>Balance</p>
                    <br />
                    <p>2000</p>
                </div>
            </div>
            <div className="allCharts">
        <div className="charts">
          <Featured/>
        </div>
        {/* <div className="charts">
          <Featured/>
        </div> */}
        </div>
        <br />
        <div className="allCharts">
        <div className="charts">
          <Featured/>
        </div>
        {/* <div className="charts">
          <Featured/>
        </div> */}
        </div>
        </div>
            
        </div>
        
    )
}

export default Sms;

