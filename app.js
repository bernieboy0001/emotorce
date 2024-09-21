
const bar = document.getElementById('bar');
const nav = document.getElementById('nav-bar');
const close = document.getElementById('close');

if(bar){

    bar.addEventListener('click', () =>{

        nav.classList.add('active');
    })
}

if(close){

    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
