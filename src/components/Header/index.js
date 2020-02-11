import React from 'react';
import {HeadWrapper} from './style';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
const Header = (props) => {
  let {history,title} = props;
  return (
  <HeadWrapper>
    <div onClick={()=>history.goBack()}><i className='iconfont'>&#xe627;</i></div>
    <div>{title}</div>
    <div onClick={props.handleCategoryClick}><i className='iconfont'>&#xe625;</i></div>
  </HeadWrapper>)
};

const mapDispatch = dispatch => ({
  handleCategoryClick() {
    dispatch({type: 'global_beside_show'});
  }
})
export default withRouter(connect(null, mapDispatch)(Header));