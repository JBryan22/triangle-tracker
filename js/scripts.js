$(document).ready(function(){
  var side1 = parseInt(prompt("Enter a length for side one: "));
  var side2 = parseInt(prompt("Enter a length for side two: "));
  var side3 = parseInt(prompt("Enter a length for side three: "));

  if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2){
    alert("That is NOT a triangle!");
  } else if (side1 === side2 && side2 === side3) {
    alert("That is an equilateral triangle!");
  } else if (side1 === side2 || side1 === side3 || side2 === side3){
    alert("That is an isosceles triangle!");
  } else if (side1 !== side2 && side2 !== side3 && side1 !== side3){
    alert("That is a scalene triangle!");
  }
});
