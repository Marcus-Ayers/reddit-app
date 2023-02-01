import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';
import Create_post from './create_post';

class Post extends React.Component {
  state = {
    post: {},
    subreddit: [],
    comments: [],
    loading: true,
  }

  componentDidMount() {
    fetch(`/api/subreddits/`)
      .then(handleErrors)
      .then(data => {
        console.log(data)
        this.setState({
          subreddit: data.subreddit,
          loading: false,
        })
      });

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
      
    } = post
    const {
      description,
      name,
      
    } = subreddit

    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className=" col-12 col-lg-8">
              <div className="mb-3">
                <h3 className="mb-0">{title}</h3>
                <p className="mb-0"><small><b>{post.body}</b></small></p>
              </div>
              <hr />
            </div>
            <div className="col-4 info">
              <div className="info-box-container">
              <img src='https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png' className='info-box-image'></img>
              <h3 className='name-infobox'>{name}</h3>
              </div>
              <p className='description-infobox'>{description}</p>
              <button type="button" className="btn btn-light create-post-button">Create Post</button>

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