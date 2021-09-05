import React from "react";
import "./Post.css";
import {Avatar} from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function  Post({displayName, username, verified,text,image,avatar
}) {
    return (<div className = "post">
        
     <div className="post__avatar">
         <Avatar src ="https://lh3.googleusercontent.com/YWln0WLdaBKkRwZpkMlZ_LmSSXqIS9wPEDWn5HcwyGM5PNxs9SpZgZgGsjrASRzlm53a_LfNM-Lik6u_6QIuW2un0Q=w640-h400-e365-rj-sc0x00ffffff"/>
     </div>
     <div className ="post__body">
          <div className ="post__header">
              <div className ="post__headerText">
                  <h3> 
                    Sonnie gee{""} <span className ="post__headerSpecial">
                        <VerifiedUserIcon className="post__badge" />@sonniegee                        </span>  
                  </h3>
              </div>
              <div className ="post__headerDescription">
                  <p>I challenge you to build a twitter clone with React js</p>
                   </div>
          </div>
          <img src="https://media0.giphy.com/media/LHZyixOnHwDDy/200.webp?cid=ecf05e477qi6v4tthm0oewaijfgslisuvbgzmrvqbqg2h7ca&rid=200.webp&ct=g" alt=""/>
        <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small"/>
            <RepeatIcon fontSize="small"/>
            <FavoriteBorderIcon fontSize="small"/>
            <PublishIcon fontSize ="small"/>
        </div>
    
    </div>
     
    </div>
    

    

    );   
}
export default Post;