import React, { useState } from 'react'
import "./Table.css"
import THeader from './THeader';
import TNotifSearch from './TNotifSearch';
import Tbody from './Tbody';

const Table = () => {
  return (
    <>
      <div className='mainContainer'>
        <div className='tableContainer'>
             <THeader/>
             <TNotifSearch/>
             <Tbody/> 
        </div>
      </div>
    </>
  );
}

export default Table
