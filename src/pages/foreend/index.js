import React from 'react';
import {connect} from 'react-redux';
import Header from '../../components/Header';
import Footer from  '../../components/Footer';
import BesideNav from '../../components/BesideNav';
import ForeEndWrapper from './style';
const ForeEnd = (props) => {
  let { besidelist, showBeside } = props;
  return (
    <ForeEndWrapper>
      <Header backUrl='/home' title='前端'></Header>
      <div className='content'>
        {props.children}
      </div>
      <BesideNav besidelist={besidelist} show={showBeside}></BesideNav>
      <Footer></Footer>
    </ForeEndWrapper>
  )
}

const mapState = state=> ({
  besidelist: state.foreendReducer.besidelist,
  showBeside: state.globalReducer.showBeside
})

export default connect(mapState,null)(ForeEnd);