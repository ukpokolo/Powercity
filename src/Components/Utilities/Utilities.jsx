import React from 'react'
import './Utilities.css'
import wpls from '../assets/wpls.svg'
import pulse from '../assets/pulse.svg'
import plp from '../assets/plp.svg'
import swapwattx from '../assets/swapwattx.png'
import wpls2 from '../assets/wpls 2.svg'
import pulsex from '../assets/pulsex.svg'
import pxdc from '../assets/pxdc.svg'
import hexdc from '../assets/hexdc.svg'
import hex from '../assets/hex.svg'
import loan from '../assets/loan.svg'
import usdl from '../assets/usdl.svg'
import metamask from '../assets/metamask.svg'
import watt from '../assets/watt.svg'

function Utilities() {
  return (
    <div className='utilities'>
        <div className="utilities-con">
            <div className="utilities-left">
                <h1>Utilities</h1>
                <p className='utilities-text'>Please use these nifty utilities to make life at POWERCITY as easy as possible for you!</p>
                <div className="utilities-left-con">
                <div className="utilities-top">
                    <div className="utilites-top-card">
                        <h1>Wrapper</h1>
                        <p className='utilities-text'>With POWERCITY Wrapper you can wrap your $PLS directly into the $WPLS Token. Or you can unwrap your $WPLS back into $PLS.</p>
                        <div className="utc-balance">
                          <div className="utc-left">
                            <p className='utc-text'><span><img src={wpls} alt="" /></span>WPLS balance:</p>
                            <p className='utc-text'><span><img src={pulse} alt="" /></span>PLS balance:</p>
                          </div>
                          <div className="utc-right">
                            <p className='utc-text'>0<span className="grey">WPLS</span> </p>
                            <p className='utc-text'>0 <span className="grey">PLS</span></p>
                          </div>
                        </div>
                        <button className="utc-button">USE WRAPPER</button>
                    </div>
                    <div className="utilites-top-card">
                        <h1>Wrapper</h1>
                        <p className='utilities-text'>With POWERCITY Wrapper you can wrap your $PLS directly into the $WPLS Token. Or you can unwrap your $WPLS back into $PLS.</p>
                        <div className="utc-balance">
                          <div className="utc-left">
                            <p className='utc-text'><span><img src={plp} alt="" /></span>WPLS balance:</p>
                            <p className='utc-text'><span><img src={watt} alt="" /></span>PLS balance:</p>
                          </div>
                          <div className="utc-right">
                            <p className='utc-text'>0<span className="grey">WPLS</span> </p>
                            <p className='utc-text'>0 <span className="grey">PLS</span></p>
                          </div>
                        </div>
                        <button className="utc-button">USE WRAPPER</button>
                    </div>                    
                </div>  
                <div className="utilities-bottom">
                  <div className="utilities-bottom-left">
                  <h1>Trading Pairs</h1>
                    <p className="utilities-text">Use the below buttons to buy $Watt on PortalX or add liquidity on PulseX</p>
                    <div className="utilities-pairs">
                      <div className="utilities-pairs-left">
                        <p className="up-text"><span><img src={plp} alt="" /></span>Add WATT-PLS Pair:</p>
                        <p className="up-text"><span><img src={swapwattx} alt="" /></span>Buy WATT:</p>
                      </div>
                      <div className="utilities-pairs-right">
                        <button className="upr-button">ADD ON PULSEX</button>
                        <button className="upr-button">BUY ON PORTALX</button>
                      </div>
                    </div>
                    <h1>MetaMask Features</h1>
                    <p className="utilities-text">Use the below features to add the tokens assets used in the CORE to your MetaMask wallet. You will be able to see the balance by adding token assets to your wallet.</p>
                    <div className="metamask-table">
                      <div className="mmt-left">
                        <p className="up-text"><img src={watt} alt="" /><span>Add WATT asset to wallet</span></p>
                        <p className="up-text"><img src={plp} alt="" /><span>Add PLP asset to wallet</span></p>
                        <p className="up-text"><img src={wpls} alt="" /><span>Add WPLS asset to wallet</span></p>
                        <p className="up-text"><img src={pulsex} alt="" /><span>Add PLSX asset to wallet</span></p>
                        <p className="up-text"><img src={pxdc} alt="" /><span>Add PXDC asset to wallet</span></p>
                        <p className="up-text"><img src={hexdc} alt="" /><span>Add HEXDC asset to wallet</span></p>
                        <p className="up-text"><img src={hex} alt="" /><span>Add HEX asset to wallet</span></p>
                        <p className="up-text"><img src={loan} alt="" /><span>Add LOAN asset to wallet</span></p>
                        <p className="up-text"><img src={usdl} alt="" /><span>Add USDL asset to wallet</span></p>
                        <p className="up-text"><img src={metamask} alt="" /><span>Import your NFTs in MetaMask</span></p>
                      </div>
                      <div className="mmt-right">
                        <button className="mmf-button">ADD</button>
                        <button className="mmf-button">ADD</button>
                        <button className="mmf-button">ADD</button>
                        <button className="mmf-button">ADD</button>
                        <button className="mmf-button">ADD</button>
                        <button className="mmf-button">ADD</button>
                        <button className="mmf-button">ADD</button>
                        <button className="mmf-button">ADD</button>
                        <button className="mmf-button">ADD</button>
                        <button className="mmf-button">ADD</button>
                      </div>
                    </div>
                  </div>
                  <div className="utilities-bottom-right">
                      <h1>Your Latest NFTs</h1>
                      <div className="ubr-space">

                      </div>
                  </div>
                  
                    
                </div>
                </div>
                
               
            </div>
            <div className="utilities-right">
              <h1>Statistics</h1>
              <p className="utilities-text">Live CORE/PulseChain Statistics</p>
              <div className="utilities-card-con">
              <div className="utilities-right-card" style={{height:'125px'}}>
                <div className="urc-left">
                  <p className="urc-head">WATT Price</p>
                  <p className="urc-bold">$0.00092699</p>
                  <p className="urc-text">POWERCITY Token</p>
                </div>
                <hr className='hr' />
                <div className="urc-right">
                  <p className="urc-head">PLS Price</p>
                  <p className="urc-bold">$0.00092699</p>
                  <p className="urc-text">PluseChain Native</p>
                </div>
              </div>
              <div className="utilities-right-card"  style={{height:'125px'}}>
                <div className="urc-left">
                  <p className="urc-head">WATT Price</p>
                  <p className="urc-bold">$0.00092699</p>
                  <p className="urc-text">POWERCITY Token</p>
                </div>
                <hr className='hr' />
                <div className="urc-right">
                  <p className="urc-head">PLS Price</p>
                  <p className="urc-bold">$0.00092699</p>
                  <p className="urc-text">PluseChain Native</p>
                </div>
              </div>
              <div className="utilities-right-card gas-price ">
                <div className="urc-left">
                  <p className="statistics-text">Gas Price</p>
                  <p className="statistics-text">Gas Price</p>
                  <p className="statistics-text">Gas Price</p>
                  <p className="statistics-text">Gas Price</p>
                  <p className="statistics-text">Gas Price</p>
                  <p className="statistics-text">Gas Price</p>
                  <p className="statistics-text">Gas Price</p>

                </div>
                <div className="urc-right">
                  <p className="statistics-text">295,903</p>
                  <p className="statistics-text">295,903</p>
                  <p className="statistics-text">295,903</p>
                  <p className="statistics-text">295,903</p>
                  <p className="statistics-text">295,903</p>
                  <p className="statistics-text">295,903</p>
                  <p className="statistics-text">295,903</p>
                </div>
              </div>
              </div>
              
              <h1>Your Wallet</h1>
              <p className="utilities-text">The CORE assets currently in your wallet</p>
              <div className="utilities-right-card gas-price">
                <div className="urc-left">
                  <p className="statistics-text">Gas Price</p>
                  <p className="statistics-text">Gas Price</p>
                  <p className="statistics-text">Gas Price</p>
                  <p className="statistics-text">Gas Price</p>
                  <p className="statistics-text">Gas Price</p>
                  <p className="statistics-text">Gas Price</p>
                  <p className="statistics-text">Gas Price</p>

                </div>
                <div className="urc-right">
                  <p className="statistics-text">0 <span className="grey">WATT</span></p>
                  <p className="statistics-text">0 <span className="grey">WATT</span></p>
                  <p className="statistics-text">0 <span className="grey">WATT</span></p>
                  <p className="statistics-text">0 <span className="grey">WATT</span></p>
                  <p className="statistics-text">0 <span className="grey">WATT</span></p>
                  <p className="statistics-text">0 <span className="grey">WATT</span></p>
                  <p className="statistics-text">0 <span className="grey">WATT</span></p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Utilities