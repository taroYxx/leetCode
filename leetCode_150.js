// var generateParenthesis = function (total) {
//   let list = []

//   function generate(left, right, n, s) {
//     //  终止条件：如果左右括弧都用完则结束
//     if (left === n && right === n) {
//       list.push(s)
//       return
//     }

//     // 如果左括弧未用完则继续增加左括弧
//     if (left < n) {
//       generate(left + 1, right, n, s + "(")
//     }

//     // 如果右括弧少于左括弧则继续增加右括弧
//     if (left > right) {
//       generate(left, right + 1, n, s + ")")
//     }le
//   }
//   generate(0, 0, total, "")
//   console.log(list)
//   return list
// }
// generateParenthesis(3)


// var evalRPN = function(tokens) {
//     let stack = [];
//     for (const item of tokens) {
//       if(item == "+" || item == "-" || item == "*" || item == "/"){
//         let a = stack.pop();
//         let b = stack.pop();
//         let c;
//         if(item == "+"){
//           c = Number(a) + Number(b);
//         }else if(item == "-"){
//           c = Number(b) - Number(a);
//         }else if(item == "*"){
//           c = Number(a) * Number(b);
//         }else if(item == "/"){
//           c = parseInt(Number(b) / Number(a))  ;
//         }
//         stack.push(c)
//       }else{
//         stack.push(item);
//       }
//     }
//     console.log(stack.pop()) 
// };

// evalRPN(["4","13","5","/","+"])