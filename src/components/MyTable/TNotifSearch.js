import React from 'react'
import "./TNotifSearch.css"
import Search from "../../Images/Search.png";
import DropDown from "../DropDown/DropDown";

const TNotifSearch = () => {
  return (
    <div className='thirdContainer'>

                  <div className='thirdContainerLeft'>
                  
                      <div><text className='TCLDtext'>All</text><span className='TCLDspan'><p>450</p></span></div>
                      
                      <div><text className='TCLDtext'>Leads</text><span className='TCLDspan'><p>154</p></span></div>
                      
                      <div><text className='TCLDtext'>Prospects</text><span className='TCLDspan'><p>235</p></span></div>
                      
                      <div><text className='TCLDtext'>Clients</text><span className='TCLDspan'><p>10</p></span></div>

                  </div>

                  <div className='thirdContainerRight'>
                      <div className='TCRinput'>
                          <img className='searchIcon' src={Search}/>
                          <input className='input' type='text'/>
                      </div>
                      <div className='TCRcheck'><DropDown/> </div> 
                  </div>
              </div>
  )
}

export default TNotifSearch