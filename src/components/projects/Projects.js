import React, { Component, Fragment } from 'react'
import Project from './Project'
import { projectsData } from '../../data/projects/DataProjects'

class Projects extends Component {
  constructor () {
    super()

    this.state = {
      toggleLink: true
    }
  }

  handleToggle = () => this.setState({ toggleLink: !this.state.toggleLink })

  render () {
    const { toggleLink } = this.state

    const linkRepo = <button className="btn btn-lg btn-info" onClick={this.handleToggle}>Links are set to Github Repositories</button>
    const linkDeploy = <button className="btn btn-lg btn-success" onClick={this.handleToggle}>Links are set to Live Deployments</button>

    return (
      <Fragment>
        <h1 className="bg-dark text-light text-center">Projects</h1>
        <div className="text-center">{toggleLink ? linkDeploy : linkRepo}</div>
        <h5 className="text-center my-3">Applications deployed on Heroku may take upto 10 seconds to load. Full Stack Applications use Heroku for backend and wake up the server on load.</h5>
        <div className="projects">
          {projectsData.map((project, index) => <Project key={project + index} project={project} toggleLink={toggleLink}/>)}
        </div>
      </Fragment>
    )
  }
}

export default Projects
