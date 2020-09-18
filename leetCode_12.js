
var intToRoman = function(num) {

    if(num<1 || num > 3999) return;

    let ge = ["","I","II","III","IV","V","VI","VII","VIII","IX","X"];
    let shi = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","C"];
    let bai = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","M"];
    let qian = ["","M","MM","MMM"];
    let a = parseInt(num/1000);
    let b = parseInt((num-a*1000)/100);
    let c = parseInt((num-a*1000-b*100)/10);
    let d = parseInt((num-a*1000-b*100-c*10));


    let result = qian[a] + bai[b] + shi[c] + ge[d];
    console.log(result);
};

intToRoman(3)