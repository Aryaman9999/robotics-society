// src/Blog.js
import React, { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import client from '../contentfulClient';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [expandedPost, setExpandedPost] = useState(null);

  useEffect(() => {
    console.log('Blog component is rendering');

    const fetchPosts = async () => {
      const query = `
        {
          blogPostCollection {
            items {
              title
              content {
                json
              }
              author
              date
            }
          }
        }
      `;
      try {
        const response = await client.request(query);
        console.log('Response from Contentful:', response);
        setPosts(response.blogPostCollection.items);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        console.log('Full error:', error);  
      }
    };

    fetchPosts();
  }, []);

  const toggleReadMore = (index) => {
    setExpandedPost(expandedPost === index ? null : index);
  };

  return (
    <div className="blog-container">
      <h1>Blogs</h1>
      {posts.length > 0 ? (
        <div className="blog-grid">
          {posts.map((post, index) => (
            <div key={index} className="blog-post">
              <h2>{post.title}</h2>
              <p className="blog-author">by {post.author} on {new Date(post.date).toLocaleDateString()}</p>
              <div className="blog-content">
                {expandedPost === index
                  ? documentToReactComponents(post.content.json)
                  : (
                    <>
                      {documentToReactComponents({
                        ...post.content.json,
                        content: post.content.json.content.slice(0, 1) // Show only the first paragraph as a preview
                      })}
                      <button className="invisible-button" onClick={() => toggleReadMore(index)}>Read More</button>
                    </>
                  )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Blog;
