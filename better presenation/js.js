 const buttons = documnet.querySelectorAll("[data-carousel-button")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")
    
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.lenght - 1
    if (newIndex >= slides.children.lenght) newIndex = 0

    slides.children[newIndex].dataset.activeSlide = true
    delete activeSlide.dataset.active
  })
})
alert("WELCOME TO THE DACIANS")


alert("WELCOME TO THE DACIANS")

function scrolltoheading (headingId){
  const headto = document.getElementById(headingId).offsetTop;
  window.scrollTo({
    top: headingid,
    behavior:"smooth"
  })
}
