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
            github='https://github.com/DmitriyTsay/crm-react'
            demo='https://simple-crm-react.herokuapp.com/'
            />
            <ProjectCard 
            description="Tetris game (JavaScript)" 
            image='./tetris1.png'
            github='https://github.com/DmitriyTsay/TetrisJS'
            demo='https://tetris-js-tau.vercel.app/'
            />
            <ProjectCard 
            description="Tenzies game (React)" 
            image='./tenzies.png'
            github='https://github.com/DmitriyTsay/tenzies-react'
            demo='https://tenzies-react-eta.vercel.app/'
            />
        </div>
    </div>
  )
}

export default Portfolio