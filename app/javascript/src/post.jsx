import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';
import { handleErrors, safeCredentials } from '@utils/fetchHelper';
import Create_post from './create_post';

class Post extends React.Component {


  state = {
    post: [],
    subreddit: [],
    comment: [],
    loading: true,
    username: [],
    authenticated: false,

  }

  componentDidMount() {
    fetch('/api/authenticated')
      .then(handleErrors)
      .then(data => {
        console.log(data)
        this.setState({
          username: data.username,
          authenticated: data.authenticated,
        })
      })
      .catch(error => {
        console.error("XYXYXYXYXYXYXYXYXYYXYXYXYXYY " + error);
      });

    fetch(`/api/subreddits/${this.props.subreddit_id}`)
      .then(handleErrors)
      .then(data => {
        // console.log("hello1")
        this.setState({
          subreddit: data.subreddit,
          loading: false,
        })
      });

    fetch(`/api/subreddits/${this.props.subreddit_id}/posts/${this.props.post_id}`)
      .then(handleErrors)
      .then(data => {
        // console.log("hello2")
        // console.log(`Subreddit ID: ${this.props.subreddit_id}`);
        this.setState({
          post: data.post,
          loading: false,
        })
      })
      fetch(`/api/subreddits/${this.props.subreddit_id}/posts`)
      .then(handleErrors)
      .then(data => {
        // console.log("hello3")
        this.setState({
          posts: data.posts,
          loading: false,
          
        })
      })

      fetch(`/api/subreddits/${this.props.subreddit_id}/posts/${this.props.post_id}/comments`)
      .then(handleErrors)
      .then(data => {
        // console.log("hello4 " + data)
        this.setState({
          posts: data.posts,
          loading: false,
          
        })
      })
  }
  removePost = e => {
    e.preventDefault();
    fetch(`/api/subreddits/${this.props.subreddit_id}/posts/${this.props.post_id}`, safeCredentials({
        method: 'DELETE',
    }))
    .then(response => {
      // console.log(response)
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); 
        
    })
    .catch(error => {
      
        console.error(error);
        this.setState({
            error: 'Sorry, there was a problem deleting the post. Please try again later.'
        });
    });
  }

  
  render () {
    
    const { post, subreddit, loading, comment, username } = this.state;
    if (loading) {
      return <p>loading...</p>;
    };
    const {
      description,
      name,
    } = subreddit 
    
    const {
      id,
      title,
    } = post

   const {
     body,
   } = comment

   const date = new Date(post.created_at)
   const dateToString = date.toLocaleString();
  //  const { username } = this.props.currentUser;
   const postUser = post.user ? post.user.username : "";
const username2 = post.user?.username 
// console.log(username2)
console.log(postUser)

    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className=" col-7 mr-5 mb-3 post-background">
              <div className="">
              <div className="mb-3">
              <p className='post-info'>Posted by u/{post.user?.username} - {dateToString}</p>
                <h3 className="mb-0 post-title-big">{title}</h3>
                <p className="mb-0 post-description"><small><b>{post.body}</b></small></p>
                {username === postUser &&
                  <button onClick={this.removePost} >delete</button>
                }
              </div>
              <hr />
              </div>
            </div>
            <div className="col-4 info">
              <div className="info-box-container">
              <img src='https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png' className='info-box-image'></img>

              <h2 className='name-infobox'>{name || "N/A"}</h2>
              </div>
              <p className='description-infobox'>{description || "N/A"}</p>
              <button type="button" className="btn btn-light create-post-button">Create Post</button>
              <h1>{body}</h1>
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
  // console.log(data)
  // console.log("The subreddit ID is " + data.subreddit_id)
  // console.log("The post ID is " + data.post_id)
  ReactDOM.render(
    <Post subreddit_id={data.subreddit_id} post_id={data.post_id} />,
    document.body.appendChild(document.createElement('div')),
  )
})