import React, {Component} from "react";

// function CLock(){} // 함수가 react함수로 자바스크립트 함수가 아니다.
// Clock.__proto__=React.prototype; // 이런 형태의 함수로 추측된다.
class Clock extends React.Component{
    // state, setState,props,construct,setDateText <- this로 접근 가능?
    constructor(props){
        super(props);
        this.state={dateText: new Date().toLocaleTimeString()};
        //setState({dateText: ~~~}) // 컴포넌트가 출력되고 나면 setState로 변경
        this.setDateText.bind(this);
        // window.setInterval(()=>this.setDateText(), 1000);
        //constructor 컴포넌트를 사용하는 다른 컴포넌트 수만큼 실행된다.
        // (index.js, header.js)
    }
    //componentDidMount는 브라우저 화면에 컴퍼넌트가 출력된 후 실행된다.
    //React.componentDidMount(){}
    //Called immediately after a component is mounted. Setting state here will trigger re-rendering.
    componentDidMount(){
        this.date_interval = window.setInterval(()=>this.setDateText(), 1000);
        // clearInterval(interval) 
    }
    //Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as cancelled network requests, or cleaning up any DOM elements created in componentDidMount.
    componentWillUnmount(){
        //display:none은 삭제가 아니다!!
        console.log("Clock이 삭제되었습니다.");
        window.clearInterval(this.date_interval);
    }

    setDateText(){
        console.log("똑딱");
        this.setState({dateText: new Date().toLocaleTimeString()});
    }
    //React.render()를 재정의
    
    render(){
        // let i=0;
        // window.setInterval(function(){
        //     console.log((++i)+"실행")
        // }, 1000)
        return (
            <div id="digitalClock">
                <div>{this.state.dateText}</div>
            </div>
        );
    }
}
export default Clock; //Clock이란 컴포넌트로 배출시킨다(?)