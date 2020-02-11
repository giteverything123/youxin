import React from 'react';
import {HeadWrapper} from './style';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
const Header = (props) => {
  let {backUrl,title} = props;
  return (
  <HeadWrapper>
    <Link to={backUrl}>
      <div><i className='iconfont'>&#xe627;</i></div>
    </Link>
    <div>{title}</div>
    <div onClick={props.handleCategoryClick}><i className='iconfont'>&#xe625;</i></div>
  </HeadWrapper>)
};

const mapDispatch = dispatch => ({
  handleCategoryClick() {
    dispatch({type: 'global_beside_show'});
  }
})
export default connect(null, mapDispatch)(Header);