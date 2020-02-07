import React from 'react';
import {FooterWrapper} from './style';
const Footer = () => (
  <FooterWrapper>
    <div className='category-wrap'>
      <div><i className='iconfont'>&#xe633;</i></div>
      <div>首页</div>
    </div>
    <div className='category-wrap'>
      <div><i className='iconfont'>&#xe606;</i></div>
      <div>分类</div>
    </div>
    <div className='category-wrap'>
      <div><i className='iconfont'>&#xe681;</i></div>
      <div>我的</div>
    </div>
  </FooterWrapper>
)

export default Footer;