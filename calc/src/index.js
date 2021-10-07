import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import Calculator from './Calculator';
import reportWebVitals from './reportWebVitals';
import Dropdown from './dropdown/dropdownComponent';

class Index extends React.Component { // 전체 컴포넌트를 제어하는 컴포넌트 생성
  constructor(props){
    super(props);
    let element=<><h1>안녕!</h1></>
    this.state={main_component: element}
    //jsx를 어디서든 참조할 수 있다.
    this.navClickHandler.bind(this);
  }
  componentDidMount(){
    //순수 자바스크립트는 컴포넌트가 마운트된 시점에 작성하면 된다. !(==window.onload)
    // document.querySelector("a").onclick=function(){alert(this)};
  }
  
  navClickHandler(e){
    //alert(e.target.href.split("#")[1]); // 이렇게 주소로 찾아올 수 있지만 좋지 못한 방법

    let a_link=e.target.dataset.component;
    let element=<></>;
    if(a_link=="Acomp"){
      this.setState({main_component: <Acomp></Acomp>})
    } else if(a_link=="Bcomp"){
      this.setState({main_component: <Bcomp></Bcomp>});
    } else if(a_link=="Ccomp"){
      this.setState({main_component: <Ccomp></Ccomp>});
    } else if(a_link=="Calculator"){
      this.setState({main_component: <Calculator></Calculator>});
    } 
  }

  render() {
    return (
      <React.StrictMode>
        <NavComp clickHandler={this.navClickHandler.bind(this)}></NavComp>
        <main>
          {this.state.main_component}
        </main>
        {/* <Ccomp></Ccomp>
        <Acomp></Acomp>
        <Bcomp></Bcomp>
        <Dropdown />
        <App />
        <Calculator /> */}
      </React.StrictMode>
    );
  }
}


// export default index 내부에서 렌더할 때 생략가능
function NavComp(props){
  console.log(props);
  return(
    <div>
      <h1>Nav 컴포넌트</h1>
      <ul>
        <li><a onClick={props.clickHandler} data-component="Acomp" href="#Acomp">Acomp</a></li>
        <li><a onClick={props.clickHandler} data-component="Bcomp" href="#Bcomp">Bcomp</a></li>
        <li><a onClick={props.clickHandler} data-component="Calculator" href="#Calculator">Calculator</a></li>
        <li><a onClick={props.clickHandler} data-component="Ccomp" href="#Ccomp">Ccomp</a></li>
      </ul>
    </div>
  );
}
function Ccomp(){
  return(
    <nav></nav>
  );
}
function Acomp(){
  return(
    <div><h1>Acomp 컴포넌트</h1></div>
  );
}
function Bcomp(){
  return(
    <div><h1>Bcomp 컴포넌트</h1></div>
  );
}

ReactDOM.render(
  <Index></Index>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
