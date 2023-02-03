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
    } = user

    return (
      <Layout>
        <div className="container">
          <div className="col-12">
            <div className="row">
              <h1>Test</h1>
              <h1>{username}</h1>
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