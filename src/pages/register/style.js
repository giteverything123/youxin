import styled from 'styled-components';

export const RegisterWrapper = styled.div`
  height: 100%;
  background:#fcfcfc;
  position: relative;
  .register-box {
    position: absolute;
    width: 8rem;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
    .rule{
      color: lightgreen;
      font-size: 12px;
      margin: 10px 0;
    }
  }
  .ipt-wrapper{
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
    height: 30px;
    text-align:center;
    line-height: 30px;
    color:#fff;
    background:blue;
    margin-top: 20px;
  }
  .err-box{
    position:absolute;
    width: 100%;
    height:100%;
    z-index:10;
    background: rgba(115,115,115,0.7);
    display:none;
    font-size: 14px;
    &.has-error{
      display: block;
    }
    div{
      position: absolute;
      width: 6rem;
      top: 50%;
      left:50%;
      transform: translate(-50%,-50%);
      background:#fff;
      height:2rem;
      border-radius:5px;
      line-height:2rem;
      text-align:center;
      color:red;
    }
  }
`