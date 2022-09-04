import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import React from 'react';

const CheckData = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const App= () => <Checkbox onChange={CheckData}>Checkbox</Checkbox>;

export default App;