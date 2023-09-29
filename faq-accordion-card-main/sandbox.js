const arrows = document.querySelectorAll(".wrapper-arrows");
const hidden = document.querySelectorAll(".hidden");

arrows.forEach((e) => {
  e.addEventListener("click", () => {
    const showParas = e.parentElement.lastElementChild;
    if(showParas.style.display === 'none' || showParas.style.display === ''){
        showParas.style.display = 'block'
    }
    else{
        showParas.style.display = 'none'
    }
  });
});

