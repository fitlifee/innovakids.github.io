// script.js
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');

    setTimeout(function () {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 2000); // Cambia este valor al tiempo que desees mostrar el loader (en milisegundos).
});
