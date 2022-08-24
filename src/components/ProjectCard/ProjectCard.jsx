import React from 'react'

import Button from '../Button/Button'

const ProjectCard = ({image, imageAlt, description, github, demo}) => {
  return (
    <div className='project-card'>
        <img src={image} alt={imageAlt} />
        <div className='button-wrapper'>
            <h2>{description}</h2>
            <Button text="GitHub" small="small"/>
            <Button text="Live Demo" small="small"/>
        </div>
    </div>
  )
}

export default ProjectCard