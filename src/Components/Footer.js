import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Hari krishnan</h4>
      <h4>Copyright &copy; 2025 HK</h4>
      <div className='footerLinks'>
        <a href="https://github.com/hafi21" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/hari-krishnan-a1128a373" target='_blank'><FaLinkedin/></a>
        <a href='harikrishnans105@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/4Qkl4VhfBu/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer