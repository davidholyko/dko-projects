import React, { Component, Fragment } from 'react'
import Project from './Project'
import { projectsData } from '../../data/projects/DataProjects'

class Projects extends Component {
  render () {
    return (
      <Fragment>
        <h1 className="bg-dark text-light text-center">Projects</h1>
        <h1>{projectsData.map((project, index) => <Project key={project + index} project={project}/>)}</h1>
      </Fragment>
    )
  }
}

export default Projects
