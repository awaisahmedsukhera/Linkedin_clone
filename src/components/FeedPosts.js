import React,{ forwardRef } from "react";
import {Avatar} from "@material-ui/core"
import "../assets/styles/Feeds.css"
import Feedsinputoption from "./Feedsinputoption"
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";


const FeedPosts= forwardRef(
    ({AvatarURL,Description,Message,Name}, ref)=>{
    return (
        <div ref={ref} className="feedPostContainer">
            <div className="feedPostHeader">
                {AvatarURL==""? <Avatar /> : <Avatar src={AvatarURL} />}
                <div className="feedPostHeading">
                    <h5>{Name}</h5>
                    <p>{Description}</p>
                </div>
            </div>        
            <p>{Message}</p>
            <div className="feeds_option">
                <Feedsinputoption Title="Like" Icon={ThumbUpAltIcon} color="A9A9A9" />
                <Feedsinputoption Title="Comment" Icon={CommentIcon} color="A9A9A9" />
                <Feedsinputoption Title="Share" Icon={ShareIcon} color="A9A9A9" />
                <Feedsinputoption Title="Send" Icon={SendIcon} color="A9A9A9" />
            </div>
        </div>
    )
}
)

export default FeedPosts;