import './card.css'
 
 
const Card = () => {
 return (
    <div>
        <div className='sms-container'>
            <div className='sms-content'>
               <p>Total SMS</p>
               <br />
               <p>2000</p>
            </div>

            <div className='consumed'>
               <p>Consumed SMS</p>
               <br />
               <p>2000</p>
            </div>

            <div className='total'>
               <p>Balance</p>
               <br />
               <p>2000</p>
            </div>
        </div>
    </div>
 )
}
 
export default Card