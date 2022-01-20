import img from './user.png'
import './user.css'

function user (props) {
    
    return (
        <div>
            <div className="cardUser">
                <div className="topCard">
                    <img src={img} alt="" className='imageUser' />
                    <p className="titleTopCard">Report for</p>
                    <p className="nameCard">Jeremy Robson</p>
                </div>
                <p onClick={props.daily} className="daily">Daily</p>
                <p onClick={props.weekly} className="weekly">Weekly</p>
                <p onClick={props.monthly} className="monthly">Monthly</p>
            </div>
        </div>
    )
}

export default user;