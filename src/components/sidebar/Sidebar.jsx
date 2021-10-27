import "./sidebar.css"
/*eslint-disable */
import {Timeline} from "@material-ui/icons/";
/*eslint-disable */
import { ImHome3 } from "react-icons/im";


export default function Sidebar(){
    return(
            <div className="sidebar">
                <div className="sidebarWrapper">
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">
                        Dashboard
                        </h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem active">
                            <ImHome3 className="sidebarIcon" />
                            Home
                            </li>
                            <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            analytics 
                            </li>
                        </ul>
        </div>
    </div>
</div>
    )
}
