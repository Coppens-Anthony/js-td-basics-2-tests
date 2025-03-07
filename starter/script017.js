/*****************************
* 17 - Les valeurs Truthy et Falsy et les opérateurs d'égalité
*/

// 17 - 1. Les valeurs Truthy et Falsy

// falsy values: undefined, null, 0, '', NaN (correspond aux cas où il n'y a rien)
// truthy values: NOT falsy values (tous les autres cas : il y a quelque chose)

/*
1. Déclarez la variable height
2. Affectez-lui la valeur 23
3. Testez si la variable height est définie et affichez "La variable height est définie" ou "La variable height n'est PAS définie" selon le cas
4. Testez différents cas de figure en changeant la valeur de height (par exemple 0, ou NaN) ou en ne lui affectant pas de valeur… ATTENTION, votre script doit bien dire que "La variable height est définie" dans le cas où on a donné à height une valeur de 0…
*/
/*const height = NaN;
if (height >= 0){
    console.log('La variable height est définie.');
}else if (height !== 0) {
    console.log('La variable height n\'est pas définie.');
}*/


/*
1. Déclarez la variable height
2. Affectez-lui la valeur 23
3. Écrivez le test qui permet d'afficher, selon le cas, "Cette variable contient bien une valeur non nulle" ou "Cette variable est nulle ou non définie"
4. Testez différents cas de figure en changeant la valeur de height ou en ne lui affectant pas de valeur…
*/
const height = 3;
if (height === 0){
    console.log('Cette variable contient bien une valeur non nulle');
}else if (height === 0) {
    console.log('Cette variable est nulle ou non définie');
}



// 17 - 2. Les opérateurs d'égalité

/* 
1. Écrivrez une instruction conditionnelle qui affiche bien a propos "J'ai testé si 23 était égal à '23' sans vérifier le type. L'opérateur que 'ai utilisé a opéré une conversion de type"
2. Changez ensuite en utilisant l'opérateur dégalité stricte pour vérifier que cette phrase ne s'affiche plus
*/

