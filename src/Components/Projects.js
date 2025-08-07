import React from 'react';
import ProjectBox from './ProjectBox';
import snakeimg from '../images/snakeimg.png';
import tictactoeimg from '../images/tictactoeimg.png';
import Devximg from '../images/Devximg.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={snakeimg} projectName="Snake" />
        <ProjectBox projectPhoto={tictactoeimg} projectName="TikTacToe" />
        <ProjectBox projectPhoto={Devximg} projectName="DevX" />
      </div>

    </div>
  )
}

export default Projects