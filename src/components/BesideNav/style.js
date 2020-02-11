import styled from 'styled-components';

const BesideNavWrapper = styled.div`
  position: fixed;
  top:39px;
  width: 100px;
  height: 100%;
  background-color:#ca0c16;
  border-left:1px solid #fff;
  transition: all 0.2s ease;
  &.show-beside{
    right: 0;
  }
  &.hidden-beside{
    right: -100px;
  }
  .beside-list{
    height:30px;
    line-height:30px;
    text-align:center;
    font-size:14px;
    border-bottom: 1px solid #fff;
    a{
      color:#fff
    }
  }
`;

export default BesideNavWrapper;