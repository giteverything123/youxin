import styled from 'styled-components';

const HeadWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 38px;
  line-height:38px;
  background: #fff;
  display:flex;
  border-bottom: 1px solid hsla(0,6%,58%,.6);
  div{
    &:first-child{
      padding-left:5px;
    }
    &:nth-child(2){
      flex:1;
      text-align:center;
    }
    &:nth-child(3){
      width: 50px;
      text-align:center;
    }
  }
`

export { HeadWrapper }