import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import {BrowserRouter,Route, Link, Switch} from 'react-router-dom';


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
      element= <Acomp></Acomp>
    } else if(a_link=="Bcomp"){
      element= <Bcomp></Bcomp>;
    } else if(a_link=="Ccomp"){
      element= <Ccomp></Ccomp>;
    } else if(a_link=="Calculator"){
      element= <Calculator></Calculator>;
    } 
    this.setState({main_component: element})
  }

  render() {
    return (
      <React.StrictMode>
        {/* Link와 Route 모두 감싸고 있어야한다. */}
        <BrowserRouter> 
        <NavComp clickHandler={this.navClickHandler.bind(this)}></NavComp>
        <h2>조건문으로 SPA 구현</h2>
        <main>
          {this.state.main_component}
        </main>
        <hr />
        <h2>Router로 다른 페이지로 component 호출(SPA X)</h2>
        <p>A 태그와 비슷한 Link로 라우터의 주소를 호출하면 SPA로 동작한다.</p>
        <Switch>
          <Route path="/Acomp" component={Acomp}></Route>
          <Route path="/Bcomp">
            <Bcomp></Bcomp>
          </Route>
          <Route path="/Calculator" component={Calculator}></Route>
          <Route path="/Ccomp" component={Ccomp}></Route>
        <Route path="/"> /* exact */
          <h2>환영합니다 home 페이지 입니다.</h2>
          <p>root 주소를 호출했습니다~</p>
          <ul>
            <li>주소/~~~~ 1영역 / ~~~~2영역/</li>
            <li>주소/ , 주소  / Acom , 주소 / Bcom : 1영역</li>
            <li>route는 주소를 요청하면 해당 여역의 포함되는 주소를 모두 호출한다. (예: /Bcomp => / , /Bcomp)</li>
            <li> 포함되는 주소에 exact 속성을 추가한다.</li>
            <li> 라우터의 Switch를 사용하면 포함되는 모든 주소를 찾지 않고 일치하는 주소를 찾으면 멈춘다.(break)</li>
          </ul>
        </Route>
          </Switch>
        </BrowserRouter>
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
    <>
    <div className="navigation-container">
      <h1>Nav 컴포넌트</h1>
      <ul>
        <li><a onClick={props.clickHandler} data-component="Acomp" href="#Acomp">Acomp</a></li>
        <li><a onClick={props.clickHandler} data-component="Bcomp" href="#Bcomp">Bcomp</a></li>
        <li><a onClick={props.clickHandler} data-component="Calculator" href="#Calculator">Calculator</a></li>
        <li><a onClick={props.clickHandler} data-component="Ccomp" href="#Ccomp">Ccomp</a></li>
      </ul>
    </div>
    <hr />
    <div className="navigation-container">
      <h1>Route 컴포넌트 (컴포넌트를 주소로 요청=화면 새로고침</h1>
      <p>싱글페이지 어플리케이션(SPA)은 해당 페이지가 너무 무거워 질 수 있어서 분리시키는 것이 좋은 방법이다.</p>
      <ul>
        <li><a href="/Acomp">Acomp</a></li>
        <li><a href="/Bcomp">Bcomp</a></li>
        <li><a href="/Calculator">Calculator</a></li>
        <li><a href="/Ccomp">Ccomp</a></li>
      </ul>
    </div>
    <hr />
    <div className="navigation-container">
      <h1>Link로 Route 컴포넌트 호출 (컴포넌트를 주소로 요청=SPA</h1>
      
      <ul>
        <li><Link to="/Acomp">Acomp</Link></li>
        <li><Link to="/Bcomp">Bcomp</Link></li>
        <li><Link to="/Calculator">Calculator</Link></li>
        <li><Link to="/Ccomp">Ccomp</Link></li>
      </ul>
    </div>
    </>
  );
}
function Ccomp(){
  return(
    <nav><p>test</p></nav>
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
