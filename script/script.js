// const toastElList = document.querySelectorAll('.toast')
// const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl, option))

const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example3'
})

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("act");
    } else {
      reveals[i].classList.remove("act");
    }
  }
}

window.addEventListener("scroll", reveal);