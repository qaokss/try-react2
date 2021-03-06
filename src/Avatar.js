import React from "react";
import Comment from "./Comment";


class Avatar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <img
                className="Avatar"
                src={this.props.user.avatarUrl}
                alt={this.props.user.name}
            />
        );
    }
}

export default Avatar;