import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo-pc.png'
import twitter from '../assets/twitter.svg'
import discord from '../assets/discord.svg'
import docs from '../assets/docs2.svg'
import medium from '../assets/medium.svg'
import play from '../assets/play.svg'
import telegram from '../assets/telegram.svg'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-left">
            <div className="quick-links">
                <p className='footer-link-head'>Quick links</p>
                    <div className="footer-links">
                    <p>EARN</p>
                    <p>FLEX</p>
                    <p>PortalX Bridge</p>
                    <p>Powercity</p>
                    </div>
                
            </div>
            <div className="powercity-core">
                <p className='footer-link-head'>POWERCITY CORE</p>
                <div className="footer-links">
                   <p>Dashboard</p>
                    <p>Stakes</p>
                    <p>Utilities</p>
                </div>
                
            </div>
        </div>
        <div className="footer-right">
            <img src={footer_logo} alt="" className="footer-big" />
            <div className="footer-logo-bottom">
                <img src={telegram} alt="" />
                <img src={discord} alt="" />
                <img src={twitter} alt="" />
                <img src={medium} alt="" />
                <img src={play} alt="" />
                <img src={docs} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer