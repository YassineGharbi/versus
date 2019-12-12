//CREATION D'UN TABLEAU
var pays = ['Turquie', 'Italie', 'Pays de Galles', 'Suisse', 'Danemark', 'Finlande', 'Belgique', 'Russie', 'Pays-Bas', 'Ukraine', 'Autriche', 'Roumanie', 'Angleterre', 'France', 'Portugal', 'Allemagne', 'Espagne', 'Suède'];

//ON CREE LA VARIABLE QUI VA CONTENIR LE TIMER
var defilement;

//ON LANCE LE DEFILEMENT DIRECTEMENT AU LANCEMENT DE LA PAGE IL FAUDRA RETIRER LA FONCTION DEPARTDEFILEMENT
// defilement=setInterval(tirageDefilement, 0.1);

function departDefilement() {
    //RELANCE LA FONCTION TIRAGE DEFILEMENT TOUTE LES 0.1 SECONDE
    defilement = setInterval(tirageDefilement, 0.1);
    //DESACTIVE LE BOUTON LANCER ET ACTIVE LE BOUTON STOP
    document.getElementById("demarrer").disabled = true;
    document.getElementById("stop").disabled = false;
}

// FONCTION QUI VA SERVIR AU DEFILEMENT DES NOMS
function tirageDefilement() {
    //ON CREE DEUX VARIABLES AVEC DES VALEURS IDENTIQUES
    var nomUn = 'A';
    var nomDeux = 'A';
    // ON ENTRE DANS LA BOUCLE TANT QUE LES DEUX VARIABLES ONT UNE VALEUR IDENTIQUES
    while (nomUn == nomDeux) {
        //CHAQUE VARIABLE VA RECUPERER UNE VALEUR AU HASARD DU TABLEAU
        var nomUn = pays[Math.floor(Math.random() * pays.length)];
        var nomDeux = pays[Math.floor(Math.random() * pays.length)];
    }
    //POUR INCREMENTER DES MOTS ON MET UN PLUS
    document.getElementById("versus").innerHTML = nomUn + " VS " + nomDeux;
}

// FONCTION QUI VA ARRETER LE DEFILEMENT DES NOMS
function stopDefilement() {
    //PERMET DE STOPPER LE TIMER PRECEDEMENT LANCE - ON MET LA VARIABLE ET NON LA FONCTION ENTRE PARENTHESE
    clearInterval(defilement);
    //ACTIVE LE BOUTON LANCER ET DESACTIVE LE BOUTON STOP
    document.getElementById("demarrer").disabled = false;
    document.getElementById("stop").disabled = true;
}