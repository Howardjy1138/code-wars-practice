// Your task is to make two functions, max and min that take a(n)
// array/vector of integers list as input and outputs, respectively,
// the largest and lowest number in that array/vector.
// Examples:
// max([4,6,2,1,9,63,-134,566]) returns 566
// min([-52, 56, 30, 29, -54, 0, -110]) returns -110
// max([5]) returns 5
// min([42, 54, 65, 87, 0]) returns 0
// Notes: You may consider that there will not be any empty arrays/vectors.

function min(list) {
  return Math.min(...list);
}
console.log(min([-52, 56, 30, 29, -54, 0, -110])); // -110

function max(list) {
  return Math.max(...list);
}
console.log(max([4,6,2,1,9,63,-134,566])); // 566

// ------------------------------------------------------------------------
function min1(list) {
  var mini = list[0];
  for (var i=0; i<list.length; i++) {
    if (list[i] < mini) {
      mini = list[i];
    }
  }
  return mini;
}
console.log(min1([-52, 56, 30, 29, -54, 0, -110])); // -110

function max1(list) {
  var maxi = list[0];
  for (var i=0; i<list.length; i++) {
    if (list[i] > maxi) {
      maxi = list[i];
    }
  }
  return maxi;
}
console.log(max1([4,6,2,1,9,63,-134,566])); // 566
