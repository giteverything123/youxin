import React from 'react';
import {connect} from 'react-redux';
import WebpackWrapper from './style';
const lists = [
  {title:'一个最简单的webpack示例',url:'/foreend/webpack-01'},
  {title:'通过npm script运行webpack',url:'/foreend/webpack-02'}
];
const Webpack = (props) => {
  let {history} = props;
  return (
    <WebpackWrapper>
      <div>
        {lists.map((v,idx)=>(<div key={v.title} className='chapter-list' onClick={()=>{history.replace(v.url)}}>{idx+1}.{v.title}</div>))}
      </div>
      {props.children}
    </WebpackWrapper>
  )
}

Webpack.chapter01 = () => {
  return <div>this is chapter01</div>
}

export default connect(null,null)(Webpack);