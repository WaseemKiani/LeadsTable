import React from 'react';/* 
import Pagination from '@mui/material/Pagination'; */
import {Pagination} from 'antd'
import Stack from '@mui/material/Stack';

const Paginatin = () => {

  const Submit = (e)=>{
    alert("I am Called");
    console.log(e);
  }
  return (/* -
    <Stack spacing={2}>
      <Pagination count={10} shape="rounded" />
    </Stack> */
      <Pagination pageSize={5} total={14} onChange={Submit}></Pagination>
  )
}

export default Paginatin