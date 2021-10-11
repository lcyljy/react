let boxArr = ["a", "b", "c", "d"]
for (let i = 0; i < boxArr.length; i++) {
  document.querySelectorAll(`.${boxArr[i]}Box`)[0].addEventListener("click", function () {

    const location = document.querySelectorAll(`.${boxArr[i]}Box`)[1].getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({ top: Number(location), behavior: 'smooth' })
  })
}

