import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return(
      <div>
        <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
            <Cell col={12}>
              <img
              src="https://www.shareicon.net/data/256x256/2016/11/03/850437_people_512x512.png"
              className="avatar-img"
              />
         </Cell>
        </Grid>
      </div>
      </div>
    )
  }
}

export default About;
