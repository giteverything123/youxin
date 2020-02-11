import React from 'react';
import BesideNavWrapper from './style.js';
import {withRouter,Link} from 'react-router-dom';

const BesideNav = (props) => {
  let { besidelist, show} = props;
  return (
    <BesideNavWrapper className={show ? 'show-beside' : 'hidden-beside'}>
      {besidelist.map(v => (<div key={v} className='beside-list'><Link to={v.url}>{v.listname}</Link></div>))}
    </BesideNavWrapper>
  )
}

export default withRouter(BesideNav);

