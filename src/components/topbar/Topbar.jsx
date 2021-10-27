import React from 'react'; 
import "./topbar.css"
/*eslint-disable */
import {NotificationsNone,Language,Settings} from "@material-ui/icons/";




export default function Topbar(){
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                <span className="logo">DashboardAPP</span>
                </div>
                <div className="topRight">
                <div className="topbarIconContainer">
                <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
            <img src="images/mas.jpg" alt="" className="topAvatar"/>
          </div>
                </div>
            </div>
        </div>
    )
}
