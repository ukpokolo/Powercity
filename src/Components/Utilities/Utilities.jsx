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
                            <p className='utc-text'><img src={wpls} alt="" /><span className='space'>WPLS balance:</span></p>
                            <p className='utc-text'><img src={pulse} alt="" /><span className='space'>PLS balance:</span></p>
                          </div>
                          <div className="utc-right">
                            <p className='utc-text'>0<span className="grey">WPLS</span> </p>
                            <p className='utc-text'>0 <span className="grey">PLS</span></p>
                          </div>
                        </div>
                        <button onClick={() => alert('Please Connect your wallet')} className="utc-button">USE WRAPPER</button>
                    </div>
                    <div className="utilites-top-card">
                        <h1>Zapper</h1>
                        <p className='utilities-text'>With POWERCITY Zapper you can 'zap' your $PLS directly into the WATT-PLS Liquidity Pool from here. You can zap-in (receive $PLP). You get a 50% bonus for staking $PLP vs. $WATT.</p>
                        <div className="utc-balance">
                          <div className="utc-left">
                            <p className='utc-text'><img src={plp} alt="" /><span className='space'>PLP balance:</span></p>
                            <p className='utc-text'><img src={watt} alt="" /><span className='space'>WATT balance:</span></p>
                          </div>
                          <div className="utc-right">
                            <p className='utc-text'>0<span className="grey">PLP</span> </p>
                            <p className='utc-text'>0 <span className="grey">WATT</span></p>
                          </div>
                        </div>
                        <button onClick={() => alert('Please Connect your wallet')} className="utc-button">USE ZAPPER</button>
                    </div>                    
                </div>  
                <div className="utilities-bottom">
                  <div className="utilities-bottom-left">
                  <h1>Trading Pairs</h1>
                    <p className="utilities-text">Use the below buttons to buy $Watt on PortalX or add liquidity on PulseX</p>
                    <div className="utilities-pairs">
                      <div className="utilities-pairs-left">
                        <p className="up-text"><img src={plp} alt="" /><span>Add WATT-PLS Pair:</span></p>
                        <p className="up-text"><img src={swapwattx} alt="" /><span>Buy WATT:</span></p>
                      </div>
                      <div className="utilities-pairs-right">
                        <button onClick={() => alert('Please Connect your wallet')} className="upr-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path></svg><span>ADD ON PULSEX</span></button>
                        <button onClick={() => alert('Please Connect your wallet')} className="upr-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path></svg><span>ADD ON PULSEX</span></button>
                      </div>
                    </div>
                    <h1>MetaMask Features</h1>
                    <p className="utilities-text">Use the below features to add the tokens assets used in the CORE to your MetaMask wallet. You will be able to see the balance by adding token assets to your wallet.</p>
                    <div className="metamask-table">
  <table>
    <tbody>
      <tr>
        <td>
          <p className="up-text"><img src={watt} alt="" /><span>Add WATT asset to wallet</span></p>
        </td>
        <td>
          <button className="mmf-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>ADD</span>
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <p className="up-text"><img src={plp} alt="" /><span>Add PLP asset to wallet</span></p>
        </td>
        <td>
          <button className="mmf-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>ADD</span>
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <p className="up-text"><img src={wpls} alt="" /><span>Add WPLS asset to wallet</span></p>
        </td>
        <td>
          <button className="mmf-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>ADD</span>
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <p className="up-text"><img src={pulsex} alt="" /><span>Add PLSX asset to wallet</span></p>
        </td>
        <td>
          <button className="mmf-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>ADD</span>
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <p className="up-text"><img src={pxdc} alt="" /><span>Add PXDC asset to wallet</span></p>
        </td>
        <td>
          <button className="mmf-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>ADD</span>
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <p className="up-text"><img src={hexdc} alt="" /><span>Add HEXDC asset to wallet</span></p>
        </td>
        <td>
          <button className="mmf-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>ADD</span>
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <p className="up-text"><img src={hex} alt="" /><span>Add HEX asset to wallet</span></p>
        </td>
        <td>
          <button className="mmf-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>ADD</span>
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <p className="up-text"><img src={loan} alt="" /><span>Add LOAN asset to wallet</span></p>
        </td>
        <td>
          <button className="mmf-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>ADD</span>
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <p className="up-text"><img src={usdl} alt="" /><span>Add USDL asset to wallet</span></p>
        </td>
        <td>
          <button className="mmf-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>ADD</span>
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <p className="up-text"><img src={metamask} alt="" /><span>Import your NFTs in MetaMask</span></p>
        </td>
        <td>
          <button className="mmf-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"></path>
            </svg>
            <span>COPY CONTRACT</span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
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
                  <p className="urc-bold">$0.00093009</p>
                  <p className="urc-text">POWERCITY Token</p>
                </div>
                <hr className='hr' />
                <div className="urc-right">
                  <p className="urc-head">PLS Price</p>
                  <p className="urc-bold">$0.00004426</p>
                  <p className="urc-text">PluseChain Native</p>
                </div>
              </div>
              <div className="utilities-right-card"  style={{height:'125px'}}>
                <div className="urc-left">
                  <p className="urc-head">PLSX Price</p>
                  <p className="urc-bold">$0.00002502</p>
                  <p className="urc-text">PulseX Token</p>
                </div>
                <hr className='hr' />
                <div className="urc-right">
                  <p className="urc-head">PLP Price</p>
                  <p className="urc-bold">$0.00040114</p>
                  <p className="urc-text">WATT/PLS Pool Token</p>
                </div>
              </div>
              <div className="utilities-right-card gas-price ">
              <table className='statistics-table'>
    <tbody>
      <tr>
        <td className="csc-text">Gas Price</td>
        <td className="csc-text">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 tooltipicon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
            </svg>
          </span>
          428,977
        </td>
      </tr>
      <tr>
        <td className="csc-text">Market Cap</td>
        <td className="csc-text">$2,082,993</td>
      </tr>
      <tr>
        <td className="csc-text">
          Total WATT Locked 
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
            </svg>
          </span>
        </td>
        <td className="csc-text">2,234,070,745</td>
      </tr>
      <tr>
        <td className="csc-text">
          Total PLP Locked 
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
            </svg>
          </span>
        </td>
        <td className="csc-text">344,332,418</td>
      </tr>
      <tr>
        <td className="csc-text">
          Total WATT Circulating 
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
            </svg>
          </span>
        </td>
        <td className="csc-text">208,455,625</td>
      </tr>
      <tr>
        <td className="csc-text">
          Total AMP Supply 
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
            </svg>
          </span>
        </td>
        <td className="csc-text">75,403</td>
      </tr>
      <tr>
        <td className="csc-text">
          Reward Pool 
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
            </svg>
          </span>
        </td>
        <td className="csc-text">$188,634</td>
      </tr>
    </tbody>
  </table>
              </div>
              </div>
              
              <h1>Your Wallet</h1>
              <p className="utilities-text">The CORE assets currently in your wallet</p>
              <div className="utilities-right-card gas-price">
              <table className='statistics-table'>
    <tbody>
      <tr>
        <td className="statistics-text">WATT Balance</td>
        <td className="statistics-text">0 <span className="grey">WATT</span></td>
      </tr>
      <tr>
        <td className="statistics-text">PLP Balance <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-4 w-4 text-blue-400 tooltipicon"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path></svg></span></td>
        <td className="statistics-text">0 <span className="grey">PLP</span></td>
      </tr>
      <tr>
        <td className="statistics-text">PLS Balance</td>
        <td className="statistics-text">0 <span className="grey">PLS</span></td>
      </tr>
      <tr>
        <td className="statistics-text">WPLS Balance</td>
        <td className="statistics-text">0 <span className="grey">WPLS</span></td>
      </tr>
      <tr>
        <td className="statistics-text">PLSX Balance</td>
        <td className="statistics-text">0 <span className="grey">PLSX</span></td>
      </tr>
      <tr>
        <td className="statistics-text">PXDC Balance</td>
        <td className="statistics-text">0 <span className="grey">PXDC</span></td>
      </tr>
      <tr>
        <td className="statistics-text">HEXDC Balance</td>
        <td className="statistics-text">0 <span className="grey">HEXDC</span></td>
      </tr>
      <tr>
        <td className="statistics-text">HEX Balance</td>
        <td className="statistics-text">0 <span className="grey">HEX</span></td>
      </tr>
      <tr>
        <td className="statistics-text">USDL Balance</td>
        <td className="statistics-text">0 <span className="grey">USDL</span></td>
      </tr>
      <tr>
        <td className="statistics-text">LOAN Balance</td>
        <td className="statistics-text">0 <span className="grey">LOAN</span></td>
      </tr>
      <tr>
        <td className="statistics-text">NFT total</td>
        <td className="statistics-text">0 <span className="grey">NFT(s)</span></td>
      </tr>
      <tr>
        <td className="statistics-text">NFT(s) with rewards <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-4 w-4 text-blue-400 tooltipicon"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path></svg></span></td>
        <td className="statistics-text">0 <span className="grey">NFT(s)</span></td>
      </tr>
      <tr>
        <td className="statistics-text">Your % of the Pool <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-4 w-4 text-blue-400 tooltipicon"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path></svg></span></td>
        <td className="statistics-text">0 <span className="grey">%</span></td>
      </tr>
    </tbody>
  </table>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Utilities