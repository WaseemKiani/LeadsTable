import React from 'react'
import "./THeader.css"
import ImportIcon from "../../Images/Icon.png";
import AddIcon from "../../Images/add.png";

const THeader = () => {
  return (
    <>
    <div className='firstContainer'>
                  <div className='firstContainerLine1'>

                      <div className='firstLeft'>
                          <text className='text'>Total Leads</text>
                          <text className='textB'>250 Leads</text>
                      </div>
                    
                      <div className='firstRight'>
                          <div className='import '>
                            <img src={ImportIcon}/>
                            <text>Import</text>
                          </div>
                          <div className='add'>
                            <img src={AddIcon}/>
                            <text className='AddLeadButtonText'>Add New Lead</text>
                          </div>
                      </div>
                  </div>
                  <text className='textFirstContainer'>lorem ipsum dolor sit amet consectetuer adipiscing elit</text>
                  
              </div>
              <div className='secondContainer'></div>
              </>
  )
}

export default THeader