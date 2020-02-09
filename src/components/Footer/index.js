import React from 'react';
import {FooterWrapper} from './style';
import {connect} from 'react-redux';
const Footer = (props) => {
  let {handleCategoryClick} = props;
  return (
    <FooterWrapper>
      <div className='category-wrap'>
        <div><i className='iconfont'>&#xe633;</i></div>
        <div>首页</div>
      </div>
      <div className='category-wrap' onClick={handleCategoryClick}>
        <div><i className='iconfont'>&#xe606;</i></div>
        <div>分类</div>
      </div>
      <div className='category-wrap'>
        <div><i className='iconfont'>&#xe681;</i></div>
        <div>我的</div>
      </div>
    </FooterWrapper>
  )
}

const mapDispatch = dispatch => ({
  handleCategoryClick() {
    dispatch({type: 'global_beside_show'});
  }
})
export default connect(null, mapDispatch)(Footer);