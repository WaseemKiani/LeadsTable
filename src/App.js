import React, { useState } from 'react'
import "./App.css";
import 'antd/dist/antd.min.css'
import Table from "./components/MyTable/Table";
import Paginatin from './components/Pagination/Pagination';

function App() {


  return (
    <>
      <div className='mainContainer'>
          <Table/> 
          {/* This is a New COde */}
      </div>
    </>
  );
}

export default App;
