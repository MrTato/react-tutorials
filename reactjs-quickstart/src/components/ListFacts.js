import React, { Component } from 'react';
import { posts } from '../data/Posts';
import { Table, Container } from 'reactstrap';

class ListFacts extends Component {
    render() {
        return (
            <Container>
                <Table>
                    <thead><tr><th>User ID</th><th>ID</th><th>Title</th><th>Body</th></tr></thead>
                    <tbody>
                        {
                            posts.map(post => (
                                <tr key={post.id}>
                                    <td>{post.userId}</td>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        );
    }
};

export default ListFacts;