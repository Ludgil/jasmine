/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " +texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    return texte1+texte2;
}
let afficherCar5 =  (texte) => {
    let a = texte[4];
    return a;
}
let afficher9Car =  (texte) => {
    let newString= texte.substring(0,9);
    return newString;
}

let majusculeString =  (texte) => {
    return texte.toUpperCase();
}
let minusculeString =  (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString =  (texte) => {
    return texte.trim();
}
let IsString =  (texte) => {
    // if(typeof texte == "string"){
    //     return true;
    // }
    return typeof texte == "string" ? true : false;
}

let AfficherExtensionString =  (texte) => {
    // let str=texte.split(".");
    // return str[1];
    let match= texte.match(/[^.]*$/);
    return match[0];

}
let NombreEspaceString =  (texte) => {
    return texte.split(" ").length-1
}
let InverseString =  (texte) => {
    return texte.split("").reverse().join("");
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x,y);
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
    return array.map(x => Math.abs(x));
}
let sufaceCercle =  (rayon) => {
    return Math.ceil(Math.PI*(rayon*rayon));
}
let hypothenuse =  (ab, ac) => {
    return Math.hypot(ab,ac);
}
let calculIMC =  (poids, taille) => {
    return parseFloat((poids/Math.pow(taille,2)).toFixed(2));
}
