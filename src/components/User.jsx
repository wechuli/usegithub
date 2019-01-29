import React, { useState } from "react";
import useGithubUser from '../hooks/useGithubUser';
const User = () => {
  const [githubUser, setGithubUser] = useState("");
  const user = useGithubUser(githubUser);

  return (
    <React.Fragment>
      <div style={{ marginTop: "10px" }} className="columns is-centered">
        <div className="column is-half">
          <div className="field">
            <label htmlFor="user" className="label">
              User
            </label>
            <div className="control">
              <input
                onChange={e => setGithubUser(e.target.value)}
                type="text"
                className="input is-rounded"
                placeholder="Search for Github Users"
                id="user"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default User;
