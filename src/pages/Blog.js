import React, { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import client from '../contentfulClient';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);

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
        console.log('Full error:', error);  // Log the full error object for more details
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="blog-container">
      <h1>Blogs</h1>
      {posts.length > 0 ? (
        <div className="blog-grid">
          {posts.map((post, index) => (
            <div key={index} className="blog-post">
              <h2>{post.title}</h2>
              <p className="blog-author">by {post.author} on {new Date(post.date).toLocaleDateString()}</p>
              <div className="blog-content">{documentToReactComponents(post.content.json)}</div>
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
