const closedFace = document.querySelector('.closedEyes');
const openFace = document.querySelector('.closedMouth');
const closedEar = document.querySelector('.closedEar');

closedFace.addEventListener('click', () => {
    if (openFace.classList.contains('closedMouth')) {
        openFace.classList.add('active')
        closedFace.classList.remove('active')
        closedEar.classList.remove('active')
    }
});

openFace.addEventListener('click', () => {
    if (closedEar.classList.contains('closedEar')) {
        closedEar.classList.add('active')
        openFace.classList.remove('active')
        closedFace.classList.remove('active')

    }
});
closedEar.addEventListener('click', () => {
    if (closedFace.classList.contains('closedEyes')) {
        closedFace.classList.add('active')
        openFace.classList.remove('active')
        closedEar.classList.remove('active')
    }
})