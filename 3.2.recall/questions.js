let selectElementsStartingWithA = (array) => {
    return array.filter(a => a.charAt(0)== "a");
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(a => a.charAt(0).match(/[aeyuio]+/));
}

let removeNullElements = (array) => {
    return array.filter(a => a != null);
}

let removeNullAndFalseElements = (array) => {
    return array.filter(a => a !== null && a !== false ); // retirer le false sans le 0
}

let reverseWordsInArray = (array) => {
    return array.map(a=>a.split("").reverse().join(""));
}

let everyPossiblePair = (array) => {
    return array.sort().map((item, index, arr)=>(arr.filter((item,indexFil)=>item[index]!=item[indexFil]))).reverse(); 
}// trier le contenu, utiliser une map et recuper l'array complete, utiliser un filter sur chaque array en comparant l'index de map et l'index de filter ensuite faire un reverse

let allElementsExceptFirstThree = (array) => {
    return array.filter((a,index) => index > 2 );
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    return array.sort((a,b)=> a.charCodeAt(a.length-1)-b.charCodeAt(b.length-1));
}

let getFirstHalf = (string) => {
    return string.slice(0,Math.round(string.length/2));
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    return array.filter(a=> a.split("").reverse().join("") == a).length;
}

let shortestWord = (array) => {
    return array.sort((a,b) => a.length>b.length)[0];
}

let longestWord = (array) => {
    return array.sort((a,b) => a.length<b.length)[0];;
}

let sumNumbers = (array) => {

    return array.reduce((a,b)=>a+b);
}

let repeatElements = (array) => {

    return [...array, ...array];
}

let stringToNumber = (string) => {

    return parseInt(string);
}

let calculateAverage = (array) => {
    return array.reduce((a,b)=>a+b)/array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    //console.log(array.slice(0,6));  
    let greater=false 
    let newArr=[];
    array.forEach((item,index,arr)=>{
        if(item>5 && greater==false){
            newArr=arr.slice(0,index);
            greater=true;
        }
    });
    return newArr;
}

let convertArrayToObject = (array) => {

    const obj= Object.fromEntries(array.map((element, index, arr) => (index % 2 == 1) ? [arr[index - 1], arr[index]] : null).filter(element => element !== null));
    //console.log(array.map((element, index, arr) => (index % 2 == 1) ? [arr[index - 1], arr[index]] : null));
    return  obj;
    // thx brice
}

let getAllLetters = (array) => {
    // convertit en string pour pouvoir separer les lettres, ensuite filtre les virgules due au split et filtre les lettres en double pour finir sur le triage des lettres.
    return array.toString().split("").filter(a=>a!=",").filter((item, index, arr)=> arr.indexOf(item) == index).sort();
}


let swapKeysAndValues = (object) => {
    return Object.assign({}, ...Object.entries(object).map(([a,b]) => ({ [b]: a })));
}

let sumKeysAndValues = (object) => {
    //console.log(Object.entries(object).reduce((a,b)=> parseInt(a)+parseInt(b)));
   let values=Object.values(object).reduce((a, b) => parseInt(a) + parseInt(b));
   let keys=Object.keys(object).reduce((a, b) => parseInt(a) + parseInt(b));
    return values+keys;
}

let removeCapitals = (string) => {
    return string.replace(/[A-Z]/g, "");
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    //console.log(date.toLocaleDateString());
    return date.toLocaleDateString();
}

let getDomainName = (string) => {
   // (?=@)[^.]*.[^.]*(?=\.)   il manque a exclure le @ et peut etre rajouter le multiline
    //(/[^@]*$/)
    //string.match(/(?=@)[^.]*.[^.]*(?=\.)/).toString();
    return string.slice(string.indexOf("@") + 1, string.lastIndexOf("."));// coupe le string a partir du @+1 jusqu'au dernier . 
}

let titleize = (string) => {
    console.log(string);
    
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    console.log(string);
    
    return string.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) ? true : false;
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    return  number == 0 ? 1 : number * factorial (number-1);
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return Math.round((number - 32) * 5 / 9);
}

let letterPosition = (array) => {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // stringify the array, then put all the content in lowercase, then split with the coma for get an array
	//check if letter is in the alphabet
	//return the index for that alphabet + 1  because the array of alphabet begin at 0
    return array.toString().toLowerCase().split(",").map(letter =>  alphabet.includes(letter.toLowerCase()) ? alphabet.indexOf(letter)+1 :null );
}
    

