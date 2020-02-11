import React from 'react';
import {HomeWrapper} from './style';
import {connect} from 'react-redux';
import Footer from  '../../components/Footer';
import Header from  '../../components/Header';
import BesideNav from '../../components/BesideNav';
const Home = (props) => {
  let { besidelist, showBeside } = props;
  return (
    <HomeWrapper>
      <Header title='首页'></Header>
      <div className='list-box'>
        <div className='list'>计算机</div>
        <div className='list'>文学</div>
        <div className='list'>数学</div>
        <div className='list'>杂学</div>
      </div>
      <BesideNav besidelist={besidelist} show={showBeside}></BesideNav>
      <Footer></Footer>
    </HomeWrapper>
  );
}
const mapState = state => ({
  besidelist: state.homeReducer.besidelist,
  showBeside: state.globalReducer.showBeside
});
export default connect(mapState)(Home);