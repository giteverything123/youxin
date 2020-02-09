import React from 'react';
import {HeadWrapper} from './style';
import { connect } from 'react-redux';
const Footer = (props) => {
  return (
  <HeadWrapper>
    <div><i className='iconfont'>&#xe627;</i>返回</div>
    <div>标题</div>
    <div onClick={props.handleCategoryClick}><i className='iconfont'>&#xe625;</i></div>
  </HeadWrapper>)
};

const mapDispatch = dispatch => ({
  handleCategoryClick() {
    dispatch({type: 'global_beside_show'});
  }
})
export default connect(null, mapDispatch)(Footer);