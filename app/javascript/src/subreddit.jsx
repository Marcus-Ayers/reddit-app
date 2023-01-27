import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';


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

  render () {
    const { subreddit, loading } = this.state;
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