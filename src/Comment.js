import React from "react";
import UserInfo from "./Comment"
import ReactDOM from "react-dom";

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    formatDate() {
       return this.state.date.toLocaleTimeString()
    }


    render() {
        return (
            <div className="Comment">
                <UserInfo user={this.props.author}/>
                <div className="Comment-text">{this.props.text}</div>
                <div className="Comment-date">
                    {this.formatDate()}
                </div>
            </div>
        );
    }
}

export default Comment;