import React from "react";
import Avatar from "./Avatar";

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="UserInfo">
                <Avatar user={this.props.user}/>
                <div className="UserInfo-name">{this.props.user.name}</div>
            </div>
        );
    }
}

export default UserInfo;