import React, { Component, Fragment } from 'react'
import { projectsData } from '../../data/projects/DataProjects'

class Projects extends Component {
  render () {
    return (
      <Fragment>
        <h1>Projects</h1>
        <h1>{projectsData}</h1>
      </Fragment>
    )
  }
}

export default Projects
