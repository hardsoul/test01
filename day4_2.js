/**
 * 2. 3개의 숫자를 인자로 받아 가장 큰 숫자를 반환하는 max함수를 만드세요
 */
module.exports = function max(a, b, c) {
  var array = a instanceof Array ? a : arguments;
  var result = array[0];

  for(var i = 0; i < array.length; i++) {
    if(result < array[i]) {
      result = array[i];
    }
  }
  return result;
};
