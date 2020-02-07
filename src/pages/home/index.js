import React, { Component } from 'react';
import {HomeWrapper} from './style';
import Footer from  '../../components/Footer';
import Header from  '../../components/Header';
class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <Header></Header>
        <div className='list-box'>
          <div className='list'>计算机</div>
          <div className='list'>文学</div>
          <div className='list'>数学</div>
          <div className='list'>杂学</div>
        </div>
        <Footer></Footer>
      </HomeWrapper>
    );
  }
}

export default Home;