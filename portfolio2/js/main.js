let boxArr = ["a", "b", "c", "d"]
for (let i = 0; i < boxArr.length; i++) {
  document.querySelectorAll(`.${boxArr[i]}Box`)[0].addEventListener("click", function () {

    const location = document.querySelectorAll(`.${boxArr[i]}Box`)[1].getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({ top: Number(location), behavior: 'smooth' })
  })
}
// nav바 클릭시 해당 위치로 이동

console.log(document.querySelector("header"))
// function scrollFunction(){

//   document.querySelector("header").classList.remove("nonVisible");
//   document.querySelector("header").classList.add("visible"); 
// }

let scrollHeight = window.pageYOffset;


// setScrollHeight = function(){window.pageYOffset, 300}
// window.onscroll = function(){
//   let scrollHeight1 = window.pageYOffset;
// console.log(scrollHeight);
// console.log(scrollHeight1)
// }
// window.onscroll= function(){
//   let scrollHeight1 = window.pageYOffset;
// if(scrollHeight !== scrollHeight1){
//      document.querySelector("header").classList.remove("nonVisible");
//   document.querySelector("header").classList.add("visible"); 
// } else {
//   document.querySelector("header").classList.remove("visible");
//   document.querySelector("header").classList.add("nonVisible");
// }
// // }
// let scrollHeight1;
// let timeStamp;
// window.addEventListener("scroll", function(e){
//   scrollHeight1 = window.pageYOffset;
//   console.log(scrollHeight1);
//   console.log(e);
//   console.log(timeStamp,e.timeStamp);
//   timeStamp=e.timeStamp;

//   return scrollHeight1;
// });
let didScroll;
window.onscroll = function (e) {
  didScroll = true;
}


setInterval(function () {

  if (didScroll) {
    document.querySelector("header").classList.remove("nonVisible");
    document.querySelector("header").classList.add("visible");
    didScroll = false;
  } else {
    document.querySelector("header").classList.remove("visible");
    document.querySelector("header").classList.add("nonVisible");

  }

}, 200)


// console.log(scrollHeight1)
// if(scrollHeight == scrollHeight1){
//   document.querySelector("header").classList.remove("nonVisible");
// document.querySelector("header").classList.add("visible"); 
// } else {
// document.querySelector("header").classList.remove("visible");
// document.querySelector("header").classList.add("nonVisible");
// }

// window.onscroll = scrollFunction;



// let didScroll;
// let lastScrollTop = 0;
// let delta = 20;
// let navbarHeight = window.querySelector("header");



// document.scrollingElement(function(e){
//   didScroll = true;
// })

// setInterval(function(){
//   if(didScroll){
//     hasScrolled();
//     didScroll = false;
//   }
// }, 250);

// function hasScrolled() {
//   let st = document.this.scrollTop();

//   if(Math,abs(lastScrollTop - st) <= delta)
//     return;

//     if (st > lastScrollTop && st > navbarHeight){
//       document.querySelector("header").removeClass("nav-down").addClass("nav-up");
//     } else{
//       if(st+ window.height() < document.height()){
//         document.querySelector("header").removeClass("navup").addClass("nav-down");
//       }
//     }

//     lastScrollTop = st;
// }
