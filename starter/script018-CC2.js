/*****************************
* CODING CHALLENGE 2
*/

/*
John et Mike jouent tous les deux au basket dans différentes équipes.
Lors des trois derniers jeux, L'équipe de John a marqué 89, 120 et 103 points,
alors que l'équipe de Mike a marqué 116, 94 et 123 points.

1. Calculez le score moyen de chaque équipe
2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
	et imprimez l'équipe gagnante dans la console avec son score moyen.
3. Changez ensuite les scores pour montrer différents gagnants.
	N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen)
4. BONUS : Mary jour aussi au basket, et son équipe a marqué 97, 134 et 105 points.
	Comme avant, imprimez le gagnant en moyenne dans la console.
	INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision. 
5. Changez là aussi les scores pour générer différents gagnants,
	en gardant toujours en tête qu'il pourrait y avoir des ex æquos.

BONNE CHANCE 😀
*/

// sans bonus
const jFirst = 89;
const jSecond = 120;
const jThird = 103;

const mFirst = 85;
const mSecond = 104;
const mThird = 123;

const jMoyenne = (jFirst + jSecond + jThird) / 3;
const mMoyenne = (mFirst + mSecond + mThird) / 3;
if (mMoyenne > jMoyenne){
    console.log(`L'équipe de Mike est la gagnante. Ils ont une moyenne de ${mMoyenne} points.`);
}else if (mMoyenne < jMoyenne){
    console.log(`L'équipe de John est la gagnante. Ils ont une moyenne de ${jMoyenne} points.`);
}else if (mMoyenne === jMoyenne){
    console.log(`L'équipe de Mike et celle de John sont égalités. Ils ont une moyenne de ${mMoyenne} points.`);
}
// avec bonus


