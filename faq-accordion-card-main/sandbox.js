const images = document.querySelectorAll('.wrapper-images');
const hidden = document.querySelectorAll('.hidden');

images.forEach(e => {
    e.addEventListener('click', () => {
        const showParas = e.parentElement.lastElementChild;
     showParas.style.display = 'block'

      
    })
});

