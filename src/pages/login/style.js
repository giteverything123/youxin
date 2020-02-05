import styled from 'styled-components';

export const LoginWrapper = styled.div`
  height: 100%;
  background:#fcfcfc;
  position: relative;
  .login-box {
    position: absolute;
    width: 8rem;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
  .ipt-wrapper{
    margin-bottom: 20px;
    input{
      height:30px;
      border:1px solid blue;
      width: 100%;
      padding-left: 15px;
      box-sizing:border-box;
      font-size:14px;
      color:#666;
      line-height:30px;
    }
  }
  .submit-box{
    font-weight: bold;
    div{
      width:40%;
      height: 30px;
      text-align:center;
      line-height: 30px;
      &:first-child{
        color:#fff;
        float:left;
        background: blue;
      }
      &:nth-child(2){
        color:#fff;
        float:right;
        background:green;
      }
    }
  }
`