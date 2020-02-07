import styled from 'styled-components';

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  box-shadow:0 0 10px 0 hsla(0,6%,58%,.6);
  display: flex;
  .category-wrap{
    flex: 1;
    text-align: center;
    display:flex;
    flex-direction: column;
    div{
      &:first-child{
        font-size: 16px;
        line-height: 28px;
      }
      &:nth-child(2){
        height: 22px;
        line-height:22px;
      }
    }
  }
`

export { FooterWrapper }