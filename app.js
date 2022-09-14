// DOM
const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');

// évènement lors d'un appui sur une touche
document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
});

// évènement lors d'un click
document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
})

// fonction de calcul
const calculer = (valeur) => {
    if(listeKeycode.includes(valeur)){
        switch(valeur){
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}

// gestion d'erreur
window.addEventListener('error', (e) =>{
    alert('une erreur est survenue dans votre calcul');
})