import React, { Component } from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

class Project extends Component {
  render () {
    const { name, deployed, repo, image, description, goal, status } = this.props.project
    const { toggleLink } = this.props

    return (
      <OverlayTrigger
        placement='top'
        overlay={
          <Tooltip id={`tooltip-${this.props.project.name}`}>
            <h1 className="text-center">{name}</h1>
            <p className="text-left">Description: {description}</p>
            <p className="text-left">Goals: {goal}</p>
            <p className="text-left">Status: {status}</p>
            <p className="text-left">Deployment: {deployed}</p>
            <p className="text-left">Repository: {repo}</p>
          </Tooltip>
        }
      >
        <div className="card">
          <a className="link" href={toggleLink ? deployed : repo} target="_blank" rel="noopener noreferrer">
            <img className="img" src={image} alt=""/>
          </a>
        </div>

      </OverlayTrigger>
    )
  }
}

export default Project
