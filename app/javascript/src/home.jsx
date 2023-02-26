import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';
import Create_post from './create_post';
// import { handleErrors } from '/Users/marcus/Documents/web-dev/Altcademy/reddit-app/app/javascript/src/utils/fetchHelper';
import { handleErrors } from '@utils/fetchHelper';


class Home extends React.Component {
  state = {
    posts: [],
    subreddits: []
    
  }
  
  componentDidMount() {
    fetch(`/api/posts/all`)
      .then(handleErrors)
      .then(data => {
        // console.log(data)
        this.setState({
          posts: data.posts,
          loading: false,
          
        })
      })  

      fetch(`/api/subreddits`)
      .then(handleErrors)
      .then(data => {
        // console.log(data)
        this.setState({
          subreddits: data.subreddits,
          loading: false,
        })
      }) 
  }

  render () {
    const {posts, subreddits } = this.state;
    return (
      <Layout>
        <div className="container background">
          <div className="row">
            <div className="col-7 mr-5 content">
              <div className="posts123">
              {posts.map(post => {
              return (
                <div key={post.id} className="col-6 col-lg-4 mb-3 post">
                  <div className="post-header">

                  <a href={`/subreddit/${post.subreddit.id}`} className="text-body text-decoration-none">
                  <p className='subreddit-name'>r/{post.subreddit.name} </p>
                  </a>
                  <a href={`/user/${post.user.id}`}>
                  <p className='post-info user-name'>Posted by u/{post.user.username} {post.created_at}</p>
                  </a>
                  </div>
                  <a href={`subreddit/${post.subreddit.id}/post/${post.id}`}>
                    <h6 className="mb-3 post-title">{post.title}</h6>
                  </a>
                </div>
              )
            })}
              </div>
            </div>
            <div className="col-4 info">
              <h1 className='subreddits-header text-danger'>Subreddits</h1>
              {subreddits.map(subreddit => (
                <div key={subreddit.id}>
                  <a href={`/subreddit/${subreddit.id}`} className="subreddit-name">
                    <p>r/{subreddit.name}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})