import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/crypto-coin1.jpg";
import Item from "antd/lib/list/Item";

const navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crypto Village</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Item>
        <Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Item>
        <Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Item>
        <Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Item>
      </Menu>
    </div>
  );
};

export default navbar;
