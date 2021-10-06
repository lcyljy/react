window.onload=function(){
    //node.nextSibling : 인접(after) 형제 선택자
    //node.previousSibling : 인접(before) 형제 선택자
    //node.firstChild: 첫번째 자식 선택자
    //node.childNodes: 모든 자식 선택자
    //node.lastChild : 마지막 자식 선택자
    //node.parentNode: 부모 선택자
    const dropdown_arr=document.querySelectorAll(".dropdown-active .link");
    dropdown_arr.forEach((dropdown_link) => {
        dropdown_link.onclick = function (e){
            console.log(e.target.childNodes);
            console.log(e.target.childNodes.length);
            console.log(e.target.childNodes.parentNode)
            if(e.target.childNodes.length=1){
                // let rightTarget = e.target.parentNode;
                // let menu = rightTarget.nextSibling;
                // menu.classList.toggle("active")
                let menu = e.target.nextSibling;
            menu.classList.toggle("active");
            } else{
            let menu = e.target.nextSibling;
            menu.classList.toggle("active");
        }
        }
        
    })
}