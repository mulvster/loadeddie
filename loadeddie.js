var loadedDie = (function () {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var count = -1;

function counter () {
  count += 1;
  return list[count];
}
return counter;

})();

console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());