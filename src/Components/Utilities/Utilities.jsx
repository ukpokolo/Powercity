import React from 'react'
import './Utilities.css'

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
                            <p className='utc-text'>WPLS balance:</p>
                            <p className='utc-text'>PLS balance:</p>
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
                            <p className='utc-text'>WPLS balance:</p>
                            <p className='utc-text'>PLS balance:</p>
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
                        <p className="up-text">Add WATT-PLS Pair:</p>
                        <p className="up-text">Buy WATT:</p>
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
                        <p className="up-text">Add WATT asset to wallet</p>
                        <p className="up-text">Add WATT asset to wallet</p>
                        <p className="up-text">Add WATT asset to wallet</p>
                        <p className="up-text">Add WATT asset to wallet</p>
                        <p className="up-text">Add WATT asset to wallet</p>
                        <p className="up-text">Add WATT asset to wallet</p>
                        <p className="up-text">Add WATT asset to wallet</p>
                        <p className="up-text">Add WATT asset to wallet</p>
                        <p className="up-text">Add WATT asset to wallet</p>
                        <p className="up-text">Add WATT asset to wallet</p>
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