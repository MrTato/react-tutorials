import React, {Component} from 'react';
import {withRouter} from 'react-router';

class PostEditPage extends Component {
    postId = this.props.match.params.postId;

    render() {
        return (
            <div className="text-center">
                <h1>Edit Post</h1>
                <p>Post Id: {this.postId}</p>
            </div>
        );
    }
}

export default withRouter(PostEditPage);