/* ===============================================================================================================
2. Write a JavaScript program to check a credit card number. */
function CBNumbertTry(){
    let CBnumber=document.getElementById('CBNumber').value
    console.log(CBnumber);
    let regex=new RegExp('^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$');
    let result=regex.test(CBnumber);
    if(result=!false){
        let nDigits = CBnumber.length;
 
        let nSum = 0;
        let isSecond = false;
        for (let i = nDigits - 1; i >= 0; i--)
        {
    
            let d = CBnumber[i].charCodeAt() - '0'.charCodeAt();
    
            if (isSecond == true)
                d = d * 2;
    
            // We add two digits to handle
            // cases that make two digits
            // after doubling
            nSum += parseInt(d / 10, 10);
            nSum += d % 10;
    
            isSecond = !isSecond;
        }
        let test=nSum % 10 == 0;
        if (test!=false){
            document.getElementById('CBNumbertTryP').innerHTML="Your cb is ok.";
        }
        else {
            document.getElementById('CBNumbertTryP').innerHTML="Your cb is not ok.";
        }
    }
    else {
        alert('Your CB number is not correct ')
    }

}
 
/* ===============================================================================================================
3. Write a pattern that matches e-mail addresses. Go to the editor
The personal information part contains the following ASCII characters.

Uppercase (A-Z) and lowercase (a-z) English letters.
Digits (0-9).
Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other. */


/* =================================================================================================================
4. Write a JavaScript program to search a date within a string. */


/* =================================================================================================================
5. Write a JavaScript program that work as a trim function (string) using regular expression. */


/* =================================================================================================================
@Yohan Lertourné c'est pour toi
6. Write a JavaScript program to count number of words in string. Go to the editor
Note :
- Remove white-space from start and end position.
- Convert 2 or more spaces to 1.
- Exclude newline with a start spacing.
7. Write a JavaScript function to check whether a given value is IP value or not. */

/* =================================================================================================================
9. Write a JavaScript function to check whether a given value is an valid url or not. */
function ValidateUrl(){
    let url=document.getElementById('ValidateUrl').value;
    console.log(url);
/*     let regex=new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator */
        let regex=new RegExp('^(https?:\\/\\/)?'+'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+'((\\d{1,3}\\.){3}\\d{1,3}))'+'(\\?[;&a-z\\d%_.~+=-]*)?'+'(\\#[-a-z\\d_]*)?$','i'); 
        let result=regex.test(url);
        if (result!= false){
            document.getElementById('ValidateUrlP').innerHTML=" Votre url "+url+" est valide" 
        }
        else {
            alert("votre url "+url+" est invalide")
        }
    console.log(result);
    }

/*     =================================================================================================================
10. Write a JavaScript function to check whether a given value is alpha numeric or not */
function alphanuméricTest(){

}
/* ================================================================================================================
11. Write a JavaScript function to check whether a given value is time string or not. */
/* ================================================================================================================
12. Write a JavaScript function to check whether a given value is US zip code or not. */