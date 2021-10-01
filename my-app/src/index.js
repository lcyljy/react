import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Calculator from './Calculator';
import reportWebVitals from './reportWebVitals';

//App, Header react Component 라고 부르고
// ReactDOM.render()는 컴포넌트를 렌더, 출력하는 함수다.
// htmlDOM(x) ReactDOM으로 html 유사 element다.
ReactDOM.render(
  <React.StrictMode>
    
    <Header title={["React 스터디","초보"]}
            nav_li={[
              {text:"계산기",url:"#calculator"},
              {text:"pops",url:"pops.html"},
              {text:"state",url:"state.html"}
              ]}/>
    <App />
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
