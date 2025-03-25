// recupero l'elemento immagine e pulsante nella pagina
const lampoff = document.querySelector('.spento');
const lampon = document.querySelector('.acceso')
const button = document.getElementById('turn');

// creo una funzione per il bottone
button.addEventListener('click', function() {
    console.log('Acceso!');

    if(lampon.classList.contains('hidden')){
        lampon.classList.remove('hidden');
        lampoff.classList.add('hidden');
        button.innerText = 'Spegni';
    }
    else{
        lampoff.classList.remove('hidden');
        lampon.classList.add('hidden');
        button.innerText = 'Accendi';
    }
})