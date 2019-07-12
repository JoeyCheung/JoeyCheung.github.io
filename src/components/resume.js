import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Joey Cheung</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Stuff about Joey</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Flushing, NY 11355</p>
            <h5>Phone</h5>
            <p>(520) 895-9082</p>
            <h5>Email</h5>
            <p>joey.cheung0@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2015}
              endYear={2019}
              schoolName="Queens College"
              schoolDescription="Queens College stuff"
               />
               
                <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Software Engineering Intern at Dow Jones"
              jobDescription="Software stuff at Dow Jones"
              />

              <Experience
                startYear={2011}
                endYear={2017}
                jobName="Military Police"
                jobDescription="Military stuff at US Army"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Data Science"
                progress={100}
                />
                <Skills
                  skill="Game Dev"
                  progress={80}
                  />
                  <Skills
                    skill="Web Dev"
                    progress={50}
                    />
                    <Skills
                      skill="Mobile Dev"
                      progress={25}
                      />
                      <Skills
                        skill="Cyber Security"
                        progress={10}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
