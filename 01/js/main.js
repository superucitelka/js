// var nadpis = 'Ahoj';
let nadpis = document.getElementById('nadpis');
const zapati = document.querySelector('footer');
let trida = document.querySelector('.jumbotron');
const trump = document.querySelector('img');

trump.addEventListener('mouseenter', function() {
    console.log('myš na Trumpovi');
    trump.src = 'img/trump2.jpg';
    trump.width /= 2;
});

trump.addEventListener('mouseleave', function() {
    console.log('myš z Trumpa');
    trump.src = 'img/trump1.jpg';
    trump.width *= 2;
});

nadpis.addEventListener('click', function(){
    nadpis.innerHTML = 'Konečně pátek!';
    nadpis.style.fontSize = '3em';
    nadpis.style.color = 'blue';
    nadpis.classList.add('bg-success');
    nadpis.classList.remove('text-center');
    nadpis.classList.add('text-right');
});

zapati.addEventListener('mouseover', function(){
    console.log('Tohle je po pohybu nad zápatím');
    this.style.backgroundColor = 'rgb(100,100,0)';
    nadpis.style.fontSize = '8em';
    trida.style.display = 'none';
})