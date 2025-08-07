import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {

    DevXDesc : "A smart, student-focused interview preparation tracker platform that helps learners plan topics, solve coding problems daily, take mock interviews, and track their resume building.",
    DevXGithub : "https://github.com/hafi21/My-Projects/tree/main/Dev-X",
    DevXWebsite : "https://devx-git-main-hari-krishnans-projects-d33b46ec.vercel.app/",

    TikTacToeDesc:"Built an interactive Tic Tac Toe game using HTML, CSS, and JavaScript. Implemented game logic for player turns, win/draw conditions, and real-time UI updates. Designed a clean interface with responsive layout and replay functionality.",
    TikTacToeGithub:"https://github.com/hafi21/My-Projects/tree/main/tictactoe%20game",
    TikTacToeWebsite:"https://tiktactoe-git-main-hari-krishnans-projects-d33b46ec.vercel.app",
    
    SnakeDesc:"Developed a classic Snake Game using HTML, CSS, and JavaScript. Implemented game logic including snake movement, food generation, collision detection, and scoring. Enhanced user experience with responsive design and smooth keyboard controls.",
    SnakeGithub:"https://github.com/hafi21/My-Projects/tree/main/snake%20game",
    SnakeWebsite:"https://snake-git-main-hari-krishnans-projects-d33b46ec.vercel.app/",
  }
  
  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox