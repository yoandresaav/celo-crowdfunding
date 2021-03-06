import React, { Component } from 'react';
import Share from './Share';
import ReactPlayer from "react-player";

// Core UI Changes
import Header from "./ui/Header/Header";
import HeaderLinks from "./ui/Header/HeaderLinks"

const dashboardRoutes = [];

class StartPage extends Component {
  render(){
    return (
      <div className="start-page">
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="helpi"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          // {...rest}
        />
        
        <div style={{ paddingTop: 20}}>
          <div className='player-wrapper' style={{ margin: '0 auto'}}>
            {/* <ReactPlayer
              className='react-player'
              url="https://www.youtube.com/watch?v=4CpDkyBAcE4"
              width='100%'
              height='100%'
            /> */}
          </div>
        </div>

        <div className="panel-text">

          <p>Do you want to create a Videogame but the lack of resources desincentize you? Do you need liquidity to fund gaming ideas? This is the place for you.</p>
          <p>In DeBactria you can create campaigns seeking funds, We are the first project in BSC to offer crowdfunding of videogames and gaming projects. DeBactria allows people to solicit funds for an idea, charity, or start-up business related with the gamer community.</p>

          
        </div>
        <Share />
      </div>

    );
  }
}

export default StartPage;