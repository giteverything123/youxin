import React from 'react';
import BesideNavWrapper from './style.js';

const BesideNav = (props) => {
  let { besidelist, show } = props;
  return (
    <BesideNavWrapper className={show ? 'show-beside' : 'hidden-beside'}>
      {besidelist.map(v => (<div key={v} className='beside-list'>{v}</div>))}
    </BesideNavWrapper>
  )
}

export default BesideNav;

