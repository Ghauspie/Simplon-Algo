/* 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */
function newday(){
let date=null;

date=new Date();
var options = {weekday: "long"};
dateday = date.toLocaleDateString("fr-FR", options);
var heure = ("0" + date.getHours()).slice(-2) + " pm : " + ("0" + date.getMinutes()).slice(-2) + " : " + ("0" + date.getSeconds()).slice(-2);


alert("Today is :"+dateday +"\nCurrent time is "+heure); 
}



/* =============================================================================================================
2. Write a JavaScript program to print the contents of the current window. */
function printwindow(){
    window.print()
}




/* =============================================================================================================
3. Write a JavaScript program to get the current date.  Go to the editor
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */
function dayselector(){
    let date=new Date();
    let numberalea= Math.floor(Math.random() * 2);
    let month=date.getMonth()+1;
    let day=date.getDay();
    let year=date.getFullYear();
    let date1=null;
    let date2=null;
    if (numberalea===1){
        date1=month+"-"+day+"-"+year
        date2=month+"/"+day+"/"+year
        alert(date1+" , "+date2);
    }
    else{
        date1=day+"-"+month+"-"+year
        date2=day+"/"+month+"/"+year
        alert(date1+" , "+date2);
    }  
}

/* 
=============================================================================================================
4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. */

function sumT(a,b,c){
    let sumABC=a+b+c;
    let sum2Abc=sumABC/2;
    let aireABC=sum2Abc*(sum2Abc-a)*(sum2Abc-b)*(sum2Abc-c);
    let aireABCv=Math.sqrt(aireABC);
    alert("l'aire du triangle est "+aireABCv+"m²")
}



/* =============================================================================================================
5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
 */
    function w3resourcerotate(){
        let source="w3resource";
        let div=document.getElementById("div")
        let sourcdiv = div.innerHTML=source
        div.animate( {transform: 'rotate(360deg)' }
       , {
        // timing options
        duration: 10000,
        iterations: Infinity
      });

        /* div.appendChild(sourcdiv); */
        // on créer la function de changement periodique des lettre
        setInterval(() => {
        // ici on prend la premiere lettre pour la mettre a la fin
        let sourcefirst=source[0];
        let source1=source.slice(1);    
        source=source1+sourcefirst; 
        div.innerHTML=source;
        }, 5000);

    }

/* 
==================================================================================================================
6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. */
function yearleap(year){
    return (year%400)?((year%100)?((year%4)?false:true):false):true; 
}


/* ================================================================================================================
7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. */


/* ==============================================================================================================
8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
 */

/* ==================================================================================================================
9. Write a JavaScript program to calculate days left until next Christmas. */


/* =================================================================================================================
10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).  Go to the editor
Sample form */



/* ==================================================================================================================
1. Write a JavaScript function that reverse a number. Go to the editor
Example x = 32243;
Expected Output : 34223 */
function numberreverse(){
    const numberchoose = prompt("What's your number?");
    let numberArray=[];
    numberArray= numberchoose.split('');
    let numberArrayRev=numberArray.reverse();
    let numberrev=numberArrayRev.join("");
    console.log(numberrev);
}



/* =================================================================================================================
2. Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run. */
function stringpala(){
    const stringselec = prompt("What's your word?");
    stingarray=stringselec.split('');
    let stringarrayRev=stingarray.reverse();
    stringarrayRev=stringarrayRev.join("")
    if (stringselec===stringarrayRev){
        console.log(`${stringselec} est un palindrome`)
    }
    else {
        console.log(`${stringselec} n'est pas un palindrome`)
    }
}


/* ================================================================================================================
3. Write a JavaScript function that generates all combinations of a string. Go to the editor
Example string : 'dog'
Expected Output : d,do,dog,o,og,g */
function gCombiString(){
     stringselec = prompt("What's your word?");
    let stringlength=stringselec.length;
  setInterval(() => {
         let numF=Math.floor(Math.random()*stringlength);
         let numL=Math.floor(Math.random()*stringlength+1);
        setInterval(() => {
           
             let numF=Math.floor(Math.random()*stringlength);
            return numF;  
        }, 1500);
        setInterval(() => {
            
            let numL=Math.floor(Math.random()*stringlength);
            return numL;  
        }, 1300);
            let stringcombi=stringselec.slice(numF); 
            let stringcomb=stringselec.slice(0,-numL);    
            console.log(stringcombi,stringcomb);
    }, 600); 
}


/* ===============================================================================================================
4. Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
*/
function stringAlpha(){
    stringselec = prompt("What's your word?");
    let stringalpha= [...stringselec].sort((a, b) => a.localeCompare(b));
    stringalpha=stringalpha.join("");
    console.log(stringalpha);
}

/* ===============================================================================================================
5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Go to the editor
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox ' */
function stringUpper(){
    stringselec = prompt("What's your word?");
    let valeurFinalArray=[];
    let stringUpperArr= stringselec.split(" ")
    for (i=0; i<=stringUpperArr.length; i++){
        let stringUpperArr1=stringUpperArr[i].charAt(0).toUpperCase()+stringUpperArr[i].substr(1);
        valeurFinalArray+=" "+stringUpperArr1;
    console.log(valeurFinalArray);
    }
}

/* =================================================================================================================
6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Go to the editor
Example string : 'Web Development Tutorial'
Expected Output : 'Development' */

function wordLongest(){
    stringselec = prompt("What's your string?");
    let wordLongestAr=stringselec.split(" ");
    let tempArray=[];
    for (i=0; i<wordLongestAr.length;i++){
        let wordLongestL=wordLongestAr[i];
        wordLongestL=wordLongestL.length;
        tempArray.push(wordLongestL);    
    }
    let valeurMax=Math.max(...tempArray);
    for (i=0;i<wordLongestAr.length;i++){
        if (wordLongestAr[i].length===valeurMax){
            console.log(wordLongestAr[i]);
        }
    }
}