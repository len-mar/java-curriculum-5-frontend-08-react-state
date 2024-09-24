import {Link} from "react-router-dom";

export default function NavBar() {
    return <ul style={{width:"100%", justifyContent:"space-evenly", display:"flex", marginLeft:"0px", padding:"0px 100px 0px 100px"}}>
        <li>Navigation: </li>
        <li><Link to={"/"}>Back Home</Link></li>
        <li><Link to={"/characters"}>Character Screen</Link></li>
    </ul>

}