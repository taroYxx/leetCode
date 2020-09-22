
// var letterCombinations = function(digits) {
//     let c1 = [];
//     let c2 = ['a','b','c'];
//     let c3 = ['d','e','f'];
//     let c4 = ['g','h','i'];
//     let c5 = ['j','k','l'];
//     let c6 = ['m','n','o'];
//     let c7 = ['p','q','r','s'];
//     let c8 = ['t','u','v'];
//     let c9 = ['w','x','y','z'];
//     let sum = [c1, c2, c3, c4, c5, c6, c7, c8, c9];

//     let list = digits.split("");
//     console.log(list);
//     let target = [];
//     for (let i = 0; i < list.length; i++) {
//         const element = list[i];
//         target.push(sum[Number(element)]);
//     }
//     console.log(target);
//     let result = [];
//     let i = 0 ;
//     while(i < target.length){
//         let first = target[i];
//         for (let index = 0; index < first.length; index++) {
//             let res = ""
//             const element = first[index];
//             res = res + element;
//             console.log(res);
//         }
//         i++;
//     }

// };
// letterCombinations("23")