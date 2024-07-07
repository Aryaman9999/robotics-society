import React, { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useParams } from 'react-router-dom';
import client from '../contentfulClient';
import './Blog.css';

// Import Robotics Queries
import {
  ROBOTICS_BLOGS_QUERY,
} from '../queries/robotics';

const Blog = () => {
  const { society } = useParams();
  const [posts, setPosts] = useState([]);
  const [expandedPost, setExpandedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      let query;
      switch (society) {
        case 'robotics':
          query = ROBOTICS_BLOGS_QUERY;
          break;
        default:
          query = '';
      }

      try {
        const response = await client.request(query);
        console.log('Response from Contentful:', response);
        setPosts(response.blogPostCollection.items);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchPosts();
  }, [society]);

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
