import React from 'react';
import { posts } from '../data/Posts';
import { Table, Container } from 'reactstrap';
import PropTypes from 'prop-types';

const ListFacts = ({limit}) => {
    return (
        <Container>
            <Table>
                <thead><tr><th>User ID</th><th>ID</th><th>Title</th><th>Body</th></tr></thead>
                <tbody>
                    {
                        posts.slice(0, limit).map(post => (
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
};
ListFacts.propTypes = {
    limit: PropTypes.number
};

export default ListFacts;