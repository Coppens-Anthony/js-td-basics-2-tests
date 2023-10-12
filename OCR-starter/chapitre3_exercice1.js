// Jour suivant

/* 
- Stockez le jour actuel (nom du jour, type texte) dans une constante
- Ecrivez des tests qui stockent dans une variable le nom du jour suivant dans chaque cas de figure 
et, si le nom du jour qui se trouve dans la constante n'est pas un des 7 de jours de la semaine,
affiche dasn la console "Erreur : jour non reconnu !"
- Testez si la variable qui conntienyt le nom du jour n'ets pas vide et,
dans ce cas, affichez dans la console le message "Demain, nous serons …"
*/
const today = prompt("Quel jour sommes-nous ?")
if (today === 'Lundi'){
console.log("Demain nous serons Mardi");
} else if(today === 'Demain nous serons Mardi'){
    console.log("Demain nous serons Mercredi");
}else if(today === 'Mercredi'){
    console.log("Demain nous serons Jeudi");
}else if(today === 'Jeudi'){
    console.log("Demain nous serons Vendredi");
}else if(today === 'Vendredi'){
    console.log("Demain nous serons Samedi");
}else if(today === 'Samedi'){
    console.log("Demain nous serons Dimanche");
}else if(today === 'Dimanche') {
    console.log("Lundi");
}else if(today !== 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', "Vendredi", "Samedi", 'Dimanche'){
    console.log("Erreur : jour non reconnu !");
}