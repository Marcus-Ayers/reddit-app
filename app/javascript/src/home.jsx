import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';
import Create_post from './create_post';
import Content from './content';
class Home extends React.Component {
  render () {
    return (
      <Layout>
        <div className="container background">
          <div className="row">
            <div className="col-7 mr-5 content">
              <Create_post />
              <h1>more stuff</h1>
            </div>
            
            <div className="col-4 info">
              {/* INFO ABOUT SUBREDDIT/PAGE */}
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