import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';

class User extends React.Component {
  state = {
    user: {},
    loading: true,
  }

  componentDidMount() {
    fetch(`/api/users/3`)
      .then(handleErrors)
      .then(data => {
        this.setState({
          user: data.user,
          loading: false,
        })
      })
  }

  render () {
    const { user, loading } = this.state;
    if (loading) {
      return <p>loading...</p>;
    };

    const {
      id,
      username,
      email,
    } = user

    return (
      <Layout>
        <div className="container">
          <div className="col-12">
            <div className="row user-page">
              <h1 className='user-page-info'>{username}</h1>
              <div className="row user-page2">
              <p className='user-page-info'>{email}</p>
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
    <User user_id={data.user_id} />,
    document.body.appendChild(document.createElement('div')),
  )
})