import React, { Component } from 'react';
import ListPosts from './ListPosts'; 
import httpService from '../services/HttpService';

class PostsListPage extends Component {
    state = {
        posts: null
    };

    componentDidMount() {
        const postsUrl = "http://myjson.dit.upm.es/api/bins/qs3";
        httpService.get(postsUrl).then(posts => this.setState({
            posts: posts
        }));
    }

    render() {
        const {posts} = this.state;

        const headerStyle = { textAlign: "center" };
        if (!posts) return <h1 style={headerStyle}>Loading...</h1>
        return (
            <div>
                <h1 className="text-center">Posts (2/{posts.length})</h1>
                <ListPosts posts={posts} limit={2} />
            </div>
        );
    }
}
export default PostsListPage;