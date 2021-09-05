import React from 'react'
import "./TweetBox.css";
import { Avatar,Button} from "@material-ui/core";

function TweetBox() {
    return <div className ="tweetBox">
        <form>
            <div className ="tweetBox__input">
             <Avatar src="https://lh3.googleusercontent.com/YWln0WLdaBKkRwZpkMlZ_LmSSXqIS9wPEDWn5HcwyGM5PNxs9SpZgZgGsjrASRzlm53a_LfNM-Lik6u_6QIuW2un0Q=w640-h400-e365-rj-sc0x00ffffff"/>
             <input placeholder ="What's happening?" type ="text"/>   
             
            </div>
            <div className ="tweetBox__imageInput">
            <input placeholder =" Optional:  Enter image URL" type ="text"/> 
            </div>
            <Button className ="tweetBox__tweetButton">Tweet</Button>
        </form>

        </div>;
     
}
export default TweetBox;