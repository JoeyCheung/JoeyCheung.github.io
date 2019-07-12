import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Software Engineer</h1>

            <hr/>

          <p>Data Science | Web Dev | Mobile Dev | Game Dev | Cyber Security</p>

        <div className="social-links">

          {/* Filler */}
          <a></a>

          {/* Linkedin */}
          <a href="https://www.linkedin.com/in/joey-cheung0/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          
          {/* Github*/}
          <a href="https://github.com/JoeyCheung" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/*Filler*/}
          <a></a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
