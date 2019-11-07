import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      { id: 1, nome: 'luiz', body: 'lecolecolecolecoleclecolecolecoleco' },
    ],
  };

  render() {
    const { posts } = this.state;
    console.log(posts.map(post => post.body));
    return (
      <div>
        <Header />
        {/* é nessesário colocar uma map no post para ele se guiar */}
        {posts && posts.map(post => <Post key={post.id} data={post} />)}
        <div className="post-container">{}</div>
      </div>
    );
  }
}
