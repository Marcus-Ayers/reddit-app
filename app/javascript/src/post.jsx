import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';
import Create_post from './create_post';

class Post extends React.Component {
  state = {
    post: {},
    subreddit: {},
    loading: true,
  }

  componentDidMount() {
    fetch(`/api/subreddits/${this.props.subreddit_id}`)
      .then(handleErrors)
      .then(data => {
        console.log(data)
        this.setState({
          subreddit: data.subreddit,
          loading: false,
        })
      })
  }


  componentDidMount() {
    fetch(`/api/subreddits/${this.props.subreddit_id}/posts/${this.props.post_id}`)
      .then(handleErrors)
      .then(data => {
        console.log(data)
        this.setState({
          post: data.post,
          loading: false,
        })
      })
  }

  render () {
    const { post, loading } = this.state;
    if (loading) {
      return <p>loading...</p>;
    };

    const {
      id,
      title,
      body,
      subreddit,
      name,
    } = post

    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="info col-12 col-lg-8">
              <div className="mb-3">
                <h3 className="mb-0">{title}</h3>
                <p className="mb-0"><small>Hosted by <b>{post.body}</b></small></p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('params');
  const data = JSON.parse(node.getAttribute('data-params'));

  ReactDOM.render(
    <Post post_id={data.post_id} />,
    document.body.appendChild(document.createElement('div')),
  )
})