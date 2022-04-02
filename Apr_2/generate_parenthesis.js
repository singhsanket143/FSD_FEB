 // https://leetcode.com/problems/generate-parentheses/
 let arr = [];

 function gen_parenthesis(open, close, res, n) {
     if(close == n) {
         // console.log(res);
         arr.push(res);
         return;
     }
     if(open == close && open < n) { // either empty or balanced
         gen_parenthesis(open+1, close, res+"(", n);
     }
     else if(open == n) { // we have crossed the threshold for open
         gen_parenthesis(open, close+1, res+")", n);
     }
     else { // otherwise add opening and closing both
         gen_parenthesis(open+1, close, res+"(", n);
         gen_parenthesis(open, close+1, res+")", n);
     }
 }
 
 var generateParenthesis = function(n) {
     arr = [];
     gen_parenthesis(0, 0, "", n);
     return arr;
 };