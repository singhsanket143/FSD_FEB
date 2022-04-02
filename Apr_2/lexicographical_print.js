 // https://leetcode.com/problems/lexicographical-numbers/
 let arr = [];
 function lexicoPrint(i, n) {
     if(i > n) { // dont do anything
         return;
     }
     if(i >= 1) {
         arr.push(i);
     }
     
     for(let j = (i == 0) ? 1 : 0; j <= 9; j++) {
         lexicoPrint(10*i+j, n);
     }
     
 }
 var lexicalOrder = function (n) {
     arr = [];
     lexicoPrint(0, n);
     return arr;
 };