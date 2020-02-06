import React, { Component } from 'react';
import {HomeWrapper} from './style';
import Footer from  '../../components/Footer';
class Home extends Component {
  render() {
    return (
      <HomeWrapper>
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