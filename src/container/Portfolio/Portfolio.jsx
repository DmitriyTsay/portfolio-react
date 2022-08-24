import React from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

// Styles
import './Portfolio.scss'

const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
        <p className='gray'>My Recent Works</p>
        <h2>Portfolio</h2>
        <div className='portfolio__wrapper'>
            <ProjectCard 
            description="Simple CRM project with tickets (React, NodeJS, Express, AstraDB)" 
            image='./logo.png'
            github=''
            demo=''
            />
            <ProjectCard 
            description="Tetris game (JavaScript)" 
            image='./tetris.png'
            github=''
            demo=''
            />
            <ProjectCard 
            description="Tenzies game (React)" 
            image='./tenzies.png'
            github=''
            demo=''
            />
        </div>
    </div>
  )
}

export default Portfolio