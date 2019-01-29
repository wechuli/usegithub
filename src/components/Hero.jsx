import React from "react";

const Hero = () => {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered">useGithub Practice Hook</h1>
       
        </div>
      </div>
      <div className="hero-foot">
            <div className="tabs">
              <div className="container">
                <ul>
                  <li >
                    <a className="is-active subtitle"  href="">Users</a>
                  </li>
                  <li>
                    <a className="subtitle" href="">Repos</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
    </section>
  );
};

export default Hero;
