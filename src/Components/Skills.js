import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaHtml5,FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiVercel} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>,
        Python: <FaPython/>,
        HTML: <FaHtml5/>,
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
