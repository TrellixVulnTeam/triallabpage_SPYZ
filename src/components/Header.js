import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import group_image from "../images/dub.jpeg"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade top>
            <div className="card">
              <img className = "img-header" src={group_image} alt="group" />
            </div>
          </Fade>
          <Fade top>
            <p>
              <i>
            Machine learning and Deep learning for Neuoroscience and Healthcare.
            <br/>
            Deep learning for cloud computing and video summarization.
            <br/>
            Reinforcement learning for Multi-agent systems and transportation
              </i>
            </p>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
