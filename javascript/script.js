let cars = [
 "Volvo", "Saab", "BMW",
];
let brands = [
 "Volvo-1", "Volvo-2", "Sabb-1", "Saab-2", "BMW-1", "BMW-2",
];

let car = document.getElementById("slct-car");
let brand = document.getElementById("slct-brand");
let option = "";
let opt = "";

option += `<option selected="selected" disabled="disabled">Select car</option>`;
for(let i = 0; i < cars.length; i++){
 option += `<option> ${cars[i]} </option>`;
}
car.innerHTML = option;

function select() {
 let slctd = document.getElementById("slct-car").value;
 opt += `<option selected="selected" disabled="disabled">Choose brand</option>`;
 if(slctd == cars[0]){
    for(let j = 0; j < 2; j++){
   opt += `<option> ${brands[j]} </option>`;
   // brands.splice(2, 4);
  }
  brand.innerHTML = opt;
 }
  else if(slctd == cars[1]){
  for(let k = 2; k < 4; k++){
   opt += `<option> ${brands[k]} </option>`;
   // brands.splice(0, 2);
  }
  brand.innerHTML = opt;
 }
  else {
  for(let l = 4; l < 6; l++){
   opt += `<option> ${brands[l]} </option>`;
   // brands.splice(4, 2);
  }
  brand.innerHTML = opt;
 }
}



// function select() {
//  if(car == cars[0]) {
//   for(let j = 0; j < 2; j++){
//    opt += `<option> ${brands[j]} </option>`;
//   }
//   brand.innerHTML = opt;
//  }
//  else if(car == cars[1]){
//   for(let k = 2; k < 4; k++){
//    opt += `<option> ${brands[k]} </option>`;
//   }
//   brand.innerHTML = opt;
//  }
//  else if (car == cars[2]){
//   for(let l = 4; l < 6; l++){
//    opt += `<option> ${brands[l]} </option>`;
//   }
//   brand.innerHTML = opt;
//  }
//  }
