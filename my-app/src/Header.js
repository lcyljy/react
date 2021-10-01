import React, { useState } from "react";
import Clock from "./Clock";
//react는 함수가 완전한 형태이길 원한다. return을 구현해야 한다.
//react는 함수도 javascript 함수와 다른 함수구성을 쓰고 있다.
function Header(props){
    const [title,setTitle]=useState("리액트 스터디");
    // console.log(title);
    // console.log(setTitle);
    
    const [clockMount,setClockMount]= useState(true);
    const nav_li_arr=[];
    const li_click_handle=function(e){
        let target_component=e.target.href.split("#")[1];
    }
    for(let i=0; i<props.nav_li.length; i++){
    // console.log(props.nav_li[i]);
    //react는 jsx의 li element를 배열에서 출력할 때 꼭 유니크한 키를 줘야한다(규칙)
        nav_li_arr.push(
        <li key={"li_"+i}>
            <a href={props.nav_li[i].url} onClick={li_click_handle}>
                {props.nav_li[i].text}
            </a>
        </li>)
    }
    //this.aa = ()=>{}(x)
    //const aa = ()=>{}(o)
    const titleClick=function(){
        console.log();
        // props.title="타이틀 클릭"; 사용불가
        setTitle("타이틀 출력")
    }
    console.log(nav_li_arr);

    function delClock(){
        console.log("시계를 삭제한다.");
        setClockMount(false);
    }
    return(
        // {A && B} // A true이면 아직 true가 확실하지 않기 때문에 B도 검사해서 B가 있으면 출력  // A false이면 B를 계산하지 않고 출력하지 않는다.
        // {A || B} // A true이면 B를 계산하지 않는다.(만약 A가 출력하는 구문이 있으면 A가 출력)(B가 출력되지 않는다.)    // A가 false이면 B를 게산해서 B가 true이면 B를 출력한다.
    <header>
        <h1 onClick={()=> titleClick()}> {title} </h1>
        <nav>
            <ul>
                {nav_li_arr}
            </ul>
        </nav>
{ clockMount && <Clock text={new Date().toLocaleDateString()} />
}        <button onClick={delClock}>clock 삭제</button>
    </header>);
}
export default Header;