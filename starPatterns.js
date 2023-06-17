{/*
https://www.tutorialstonight.com/js/javascript-star-pattern#square-pattern

Question 1 : Square Star Pattern in Javascript
 *****
 *****
 *****
 *****
 *****
*/}

let n = 5;
let squareoutput = ""
let star = "*"
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        squareoutput += star
    }
    squareoutput += "\n"

}
console.log('------ Square Pattern ------')
console.log(squareoutput)

{/* 
Question 2 : Hollow Star Pattern in Javascript
 *****
 *   *
 *   *
 *   *
 *****
*/}
let hollowOutput = ""
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        if (i === 0 || i === n - 1) {
            hollowOutput += star
        } else {
            if (j === 0 || j === n - 1) {
                hollowOutput += star
            } else {
                hollowOutput += " "
            }
        }
    }
    hollowOutput += '\n'
}
console.log('------ Hollow Output ------')
console.log(hollowOutput)

{/* 
Question 3 : Right Side Star Pattern in Javascript
     *
    **
   ***
  ****
 *****
*/}


let rightSideOutput = ""
for (i = 0; i <= n; i++) {
    // i = 0,1,2,3,4
    for (let j = 0; j <= n - i; j++) {
        rightSideOutput += " ";
    }
    for (let k = 0; k < i; k++) {
        rightSideOutput += "*";
    }
    rightSideOutput += "\n";
}
console.log('------ Right Side Triangle Output ------')
console.log(rightSideOutput)

{/*
Question 4 : Left Triangle Star Pattern in JS 

*
**
***
****
*****

*/}


let leftSideOutput = ""

for (i = 0; i <= n; i++) {
    for (j = 0; j < i; j++) {
        leftSideOutput += star
    }
    leftSideOutput += '\n'
}

console.log(" ------ Left Side Triangle Output ------ ")
console.log(leftSideOutput)