import React from 'react';
import BesideNavWrapper from './style.js';
import {withRouter,Link} from 'react-router-dom';
import {connect} from 'react-redux';

const BesideNav = (props) => {
  let { besidelist, show, toggle} = props;
  return (
    <BesideNavWrapper className={show ? 'show-beside' : 'hidden-beside'}>
      {besidelist.map(v => (<div key={v} className='beside-list' onClick={toggle}><Link to={v.url}>{v.listname}</Link></div>))}
    </BesideNavWrapper>
  )
}

const mapDispatch = dispatch => ({
  toggle(){
    dispatch({type: 'global_beside_show'});
  }
})
export default withRouter(connect(null,mapDispatch)(BesideNav));

