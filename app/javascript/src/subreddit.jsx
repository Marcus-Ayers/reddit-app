import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';
import Create_post from './create_post';

class Subreddit extends React.Component {
  state = {
    subreddit: [],
    posts: [],
    loading: true,
  }

  
  componentDidMount() {
    fetch(`/api/subreddits/${this.props.subreddit_id}`)
      .then(handleErrors)
      .then(data => {
        // console.log("hello9")
        this.setState({
          subreddit: data.subreddit,
          loading: false,
        })
      });
    
    fetch(`/api/subreddits/${this.props.subreddit_id}/posts`)
      .then(handleErrors)
      .then(data => {
        // console.log("hello8")
        this.setState({
          posts: data.posts,
          loading: false,
        })
      });
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
    // console.log("subreddit.jsx " + name)
   

    return (
      <Layout>
        <div className="container background">
          <div className="row">
            <div className="col-7 mr-5 content">
              <Create_post subredditId={this.props.subreddit_id}/>
              <div className="posts123">
                {posts.length === 0 ? (
                  <h6 className='text-white' >There are no posts in this subreddit yet.</h6>
                ) : (
                  posts.map(post => {
                    const date = new Date(post.created_at)
                    const dateToString = date.toLocaleString();
                    return (
                      <div key={post.id} className="col-6 col-lg-4 mb-3 post">
                        <div className="post-header">
                          <a href={`/subreddit/${subreddit.id}`} className="text-body text-decoration-none">
                            <p className='subreddit-name'>r/{post.subreddit.name} </p>
                          </a>
                          <a href={`/user/${post.user.id}`}>
                            <p className='post-info user-name'>Posted by u/{post.user.username} - {dateToString}</p>
                          </a>
                        </div>
                        <a href={`${this.props.subreddit_id}/post/${post.id}`}>
                          <h6 className="mb-3 post-title">{post.title}</h6>
                        </a>                  
                      </div>
                    )
                  })
                )}
              </div>
            </div>
            <div className="col-4 info">
              <div className="info-box-container">
                <img src='https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png'
                     className='info-box-image'></img>
                <h3 className='name-infobox'>{name}</h3>
              </div>
              <p className='description-infobox'>{description}</p>
            </div>
          </div>
        </div>
      </Layout>
    );
    
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