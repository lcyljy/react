// setInterval(function(){
//     let checkPoint = document.querySelector(".active a").innerText
// if(checkPoint == "point"){
//     document.querySelectorAll("#fp-nav ul li a")[1].firstChild.classList.add("bg-white")
// }
// }, 200)
// // setInterval(function(){
// // console.log(document.querySelector('.active a').innerText)
// // }, 1000)

// console.log(document.querySelectorAll("#fp-nav ul li a")[1].firstChild)
// document.write(document.querySelectorAll("#fp-nav ul li a")[1].firstChild.classList.add("bg-white"))
// console.log(document.querySelectorAll("#fp-nav ul li a")[0].firstChild)

document.querySelector('.hamburger-button').addEventListener("click", function (event) {
  event.preventDefault();
  this.classList.toggle("active");
  document.querySelector(".overlay").classList.toggle("visible");

});

