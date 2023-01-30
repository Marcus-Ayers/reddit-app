import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';
import Create_post from './create_post';

class Subreddit extends React.Component {
  state = {
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
    fetch(`/api/subreddits/${this.props.subreddit_id}/posts`)
      .then(handleErrors)
      .then(data => {
        console.log(data)
        this.setState({
          posts: data.posts,
          loading: false,
          
        })
      })
  }

  render () {
    const { subreddit, loading, posts } = this.state;
    if (loading) {
      return <p>loading...</p>;
    };

    const {
      id,
      name,
      description,
      created_at,
    } = subreddit

    return (
      <Layout>
        {/* <div className="property-image mb-3" style={{ backgroundImage: `url(${image_url})` }} /> */}
        <div className="container">
          <div className="row">
            <div className="info col-12 col-lg-8">
              <div className="mb-3">
                <h3 className="mb-0">{name}</h3>
                <p className="text-uppercase mb-0 text-secondary"><small>{description}</small></p>
                {/* <p className="mb-0"><small>Hosted by <b>{user.username}</b></small></p> */}
              </div>

              <div className="col-7 mr-5 content">
              <Create_post />
              <div className="posts123">
              {posts.map(post => {
              return (
                <div key={post.id} className="col-6 col-lg-4 mb-3 post">
                  <div className="post-header">

                  <a href={`/subreddit/${post.id}`} className="text-body text-decoration-none">
                  <p className='subreddit-name'>r/{post.subreddit.name} </p>
                  <p className='post-info'>Posted by u/{post.user.username} {post.created_at}</p>
                  </a>
                  </div>
                    <h6 className="mb-3 post-title">{post.title}</h6>
                    <p>{}</p>
                    {/* <p className="text-uppercase mb-0 text-secondary"><small><b>{post.body}</b></small></p> */}
                  

                </div>
              )
            })}
          
              </div>
            </div>

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
    <Subreddit subreddit_id={data.subreddit_id} />,
    document.body.appendChild(document.createElement('div')),
  )
})