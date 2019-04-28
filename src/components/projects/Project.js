import React, { Component } from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

class Project extends Component {
  render () {
    const { name, deployed, repo, image, description, goal, status } = this.props.project

    // <a href={deployed} target="_blank" rel="noopener noreferrer">
    //   <img className="img" src={image} alt=""/>
    // </a>

    return (
      <OverlayTrigger
        placement='auto'
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

        <a href={deployed} target="_blank" rel="noopener noreferrer">
          <img className="img" src={image} alt=""/>
        </a>

      </OverlayTrigger>
    )
  }
}

export default Project
