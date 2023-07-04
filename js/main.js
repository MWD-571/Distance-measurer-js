let elForm = document.querySelector('.hero__form');
let elInput = document.querySelector('.hero__input');
let elBtn = document.querySelector('.hero__btn');
let elResetBtn = document.querySelector('.hero__second-btn');
let elFoot = document.querySelector('.hero__text-foot');
let elBike = document.querySelector('.hero__text-bike');
let elCar = document.querySelector('.hero__text-car');
let elPlane = document.querySelector('.hero__text-plane');
let foot = 2.5;
let bicycle = 20.1;
let car = 110;
let airplane = 800;
elForm.addEventListener('submit', function (event) {
    event.preventDefault();

    function renderDistance(distance, speed) {
        let hours = Math.floor(distance / speed);
        let minutes = Math.floor(((distance / speed) - hours) * 60);
        let seconds = Math.floor(((((distance / speed) - hours) * 60) - minutes) * 60);
        let millisecond = Math.floor(((((((distance / speed) - hours) * 60) - minutes) * 60) - seconds) * 60);
        return `${hours}h / ${minutes}mins / ${seconds}secs / ${millisecond}ms`
    }
    elFoot.textContent = (renderDistance(elInput.value, foot));
    elBike.textContent = (renderDistance(elInput.value, bicycle));
    elCar.textContent = (renderDistance(elInput.value, car));
    elPlane.textContent = (renderDistance(elInput.value, airplane));
})
elResetBtn.addEventListener('click', () => {
    document.location.reload();
})