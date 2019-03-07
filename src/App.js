import React from "react";
import Wrapper from "./components/Wrapper";
import Links from "./components/Links";
import Hexagon from "./components/Hexagon";
import Headshot from "./components/Headshot";
import info from "./info.json";
import projects from "./projects.json";
import hexlinks from "./hexlinks.json";
import { Random } from 'react-animated-text';





class App extends React.Component {
  state = { info, projects, hexlinks, hexlinkson: true, darktheme: false };

  render() {
    return (
      <Wrapper darktheme={this.state.darktheme} >

        <div class="row" id="header">
          <div class="col-md-8">
            <br></br>

            <p>
              <h1>
                <Random
                  text={this.state.info.name}
                  paused={this.state.paused}
                  iterations="1"
                  effect="verticalFadeIn"
                  effectChange={2}
                  effectDirection="up"
                /> 
                <Random
                  text={this.state.info.title}
                  paused={this.state.paused}
                  iterations="1"
                  effect="verticalFadeIn"
                  effectChange={2}
                  effectDirection="up"
                /> 
              </h1>
            </p>
            <p>{this.state.info.description}</p>
          </div>

          {/* <div className="col-md-1">
            <input
              type="button"
              value="Dark"
              className="btn-secondary"
              onClick={() =>
                this.setState({ darktheme: !this.state.darktheme })
              }
            />
          </div> */}
          <div class="col-md-4">
            {/* <img
              alt="hex view controller"
              width="20px"
              src={this.state.hexlinkson ? "./img/icons/list.png" : "./img/icons/hexagon.png"}
              onClick={() => this.setState({ hexlinkson: !this.state.hexlinkson })}
            /> */}
            {this.state.hexlinkson ? (
              <div>
                <ul id="projects" class="links">
                  {this.state.hexlinks.map(link => {
                    return (
                      <Hexagon
                        image={link.hexicon}
                        link={link.link}
                        darktheme={this.state.darktheme}
                      />
                    );
                  })}
                </ul>
              </div>
            ) : (
                <div>
                  <Links info={this.state.hexlinks} />
                </div>
              )}
          </div>

        </div>
        <hr></hr>
        <div class="row">
        </div>
        <ul id="projects" className="clr">
          {this.state.projects.map(project => {
            return (
              <Hexagon
                image={project.image}
                link={project.link}
                name={project.name}
                description={project.description}
                darktheme={this.state.darktheme}
              />
            );
          })}
        </ul>
        <div />

      </Wrapper>
    );
  }
}

export default App;
