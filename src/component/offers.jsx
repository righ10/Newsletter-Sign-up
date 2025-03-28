
import Check from "../assets/image/icon-list.svg"

export default function Offers(props){
    return<>
    
    <div className="offerItems">
        
        <p><img src={Check} alt="chech-Icon" className="offerItems" />{props.updates.recieves}</p>
        
    </div>
    </>
}