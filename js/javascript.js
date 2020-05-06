const collapseBTN = document.getElementById('collaspe-btn');
const headerNav = document.getElementsByClassName('nav')[0];
const btnPre = document.querySelector('.pre');
const btnNext = document.querySelector('.next');
const slide = document.getElementsByClassName('slide')[0];
// const slideItems = document.getElementsByClassName('slide-item');


collapseBTN.addEventListener('click', () => {
  headerNav.classList.toggle('hide');
  collapseBTN.classList.toggle('rotate');
});

// circle slide

btnNext.addEventListener('click', () => {
  slideFoward(true);
})

btnPre.addEventListener('click', () => {

  slideFoward(false);
})

function slideFoward(bool) {
  let firstChild = slide.firstElementChild;
  let lastChild = slide.lastElementChild;
  if (bool) {
    insertAfter(lastChild, firstChild);
  }
  else {
    slide.insertBefore(lastChild, firstChild);
  }
}

  //insert after
function insertAfter(existingNode, newNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

// delay loading
const elements = document.querySelectorAll('[delay-bottom]');

observers = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      let time = entry.target.dataset.delay;
      entry.target.style.animation = `appearBottom ${time} forwards ease-out`;
    }
  })
})

elements.forEach((element) => {
  observers.observe(element)
})