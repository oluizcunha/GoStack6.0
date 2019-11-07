import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ data }) => (
  <div className="post">
    <p>{data.body}</p>
  </div>
);

export default Post;
