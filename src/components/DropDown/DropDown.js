import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, message, Space } from 'antd';
import React from 'react';

const Data = ({ key }) => {

};

const menu = (
  <Menu
    onClick={Data}
    items={[
      {
        label: '1st menu item',
        key: '1',
      },
      {
        label: '2nd menu item',
        key: '2',
      },
      {
        label: '3rd menu item',
        key: '3',
      },
    ]}
  />
);

const DropDown = () => (
  <Dropdown overlay={menu}>
    <a onClick={(e)=>e.preventDefault()}>
      <Space>
        Click item
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default DropDown;
