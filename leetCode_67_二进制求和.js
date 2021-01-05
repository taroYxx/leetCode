var addBinary = function(a, b) {
    a = parseInt(a, 2);
  b = parseInt(b, 2);
  while (b != 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a.toString(2);
};


console.log(addBinary("11", "1"))