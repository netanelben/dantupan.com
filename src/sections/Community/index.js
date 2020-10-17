import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../../api';
import './style.scss';

const Community = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts(setPosts);
    }, []);

    return (
        <div className="section">
            {posts.map(({ id, createdAt, title, richy }) => (
                <div className="postitem" key={id}>
                    <div className="header">
                        <b>{title}</b>
                        <span>{(new Date(createdAt).toLocaleDateString())}</span>
                    </div>
                    <p dangerouslySetInnerHTML={createMarkup(richy)}/>
                </div>
            ))}
        </div>
    );
};

const createMarkup = (markup = {}) => ({ __html: markup && markup.html })

export default Community;
