import { Link } from "react-router-dom"
import "../assets/css/Missing.css"

const Missing = () => {
    return (
        
        <div>
            <div className="wrapper">
            <h1>Oops!</h1>
            <p>Page Not Found</p>
            <div className="flexGrow">
                <Link to="/">Visit Our Homepage</Link>
            </div>
            </div>
            
        </div>  
    )
}

export default Missing