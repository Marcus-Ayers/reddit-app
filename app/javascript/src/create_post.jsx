import React, { createContext } from "react";

function Create_post() {
  return (
    <React.Fragment>
    <div className="container">
      <div className="row">
        <div className="col stuff mt-3 mb-3 d-flex align-items-center">
        <img src="https://www.redditstatic.com/avatars/avatar_default_02_94E044.png" alt="Italian Trulli" className="profile-pic"></img>
          <input type="text" className="create-post mx-auto" placeholder="Create Post"></input>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}
export default Create_post