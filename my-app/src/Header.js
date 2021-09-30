//react는 함수가 완전한 형태이길 원한다. return을 구현해야 한다.
//react는 함수도 javascript 함수와 다른 함수구성을 쓰고 있다.
function Header(props){
    const nav_li_arr=[];

    for(let i=0; i<props.nav_li.length; i++){
    // console.log(props.nav_li[i]);
    //react는 jsx의 li element를 배열에서 출력할 때 꼭 유니크한 키를 줘야한다(규칙)
        nav_li_arr.push(
        <li key={i}>
            <a src={props.nav_li[i]+".html"}>{props.nav_li[i]}</a>
        </li>)
    }
    console.log(nav_li_arr);
    return(
    <header>
        <h1> {props.title} props.title 수업</h1>
        <nav>
            <ul>
                {nav_li_arr}
            </ul>
        </nav>
    </header>);
}
export default Header;