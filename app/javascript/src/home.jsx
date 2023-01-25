import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';
import Create_post from './create_post';
// import Content from './content';
// import Feed from './feed';
import { handleErrors } from '/Users/marcus/Documents/web-dev/Altcademy/reddit-app/app/javascript/src/utils/fetchHelper';


class Home extends React.Component {
  state = {
    posts: [],
    loading: true,
  }

  componentDidMount() {
    fetch('/api/posts.json')
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
    const {posts, loading} = this.state;
    return (
      <Layout>
        <div className="container background">
          <div className="row">
            <div className="col-7 mr-5 content">
              <Create_post />
              <div className="posts123">
              
              {posts.map(post => {
              return (
                <div key={post.user} className="col-6 col-lg-4 mb-4 post">
                  <a href={`/post/${post.subreddit}`} className="text-body text-decoration-none">
                    <p className="text-uppercase mb-0 text-secondary"><small><b>{post.body}</b></small></p>
                    <h6 className="mb-0">{post.title}</h6>
                  </a>
                </div>
              )
            })}
          
              </div>
            </div>
            
            <div className="col-4 info">
              {/* INFO ABOUT SUBREDDIT/PAGE ON RIGHT SIDE*/}
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