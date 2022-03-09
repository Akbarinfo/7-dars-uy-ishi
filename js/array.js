// Array 51

// let aarray = [6, 7, 8, 9, 10];
// let barray = [1, 2, 3, 4, 5, 7, 9];
// let c = barray;
// barray = aarray;
// aarray = c;
// console.log(barray, aarray);


// Array 52

// let aarray = [2, 3, 4, 5, 6, 7, 8];
// let barray = [];
// for(let i = 0; i < aarray.length; i++){
//   if(aarray[i] < 5){
//     barray[i] = 2 * aarray[i];
//   } else{
//     barray[i] = aarray[i] / 2;
//   }
// }
// console.log(barray);


// Array 53

// let aarray = [3, 4, 1, 9, 8];
// let barray = [1, 6, 5, 1, 11];
// let carray = [];
// for(let i = 0; i < aarray.length; i++){
//   if(aarray[i] > barray[i]){
//     carray[i] = aarray[i];
//   } else{
//     carray[i] = barray[i];
//   }
// }
// console.log(carray);

// Array 54

// let aarray = [2, 5, 3, 7, 9, 12, 8];
// let barray = [];
// let count = 0;
// for(let i = 0; i < aarray.length; i++){
//   if(aarray[i] % 2 == 0){
//     barray[barray.length] = aarray[i];
//     count++;
//   }
// }
// console.log(barray, count);


// Array 55

// let aarray = [3, 2, 4, 6, 3, 5, 8, 1, 2];
// let barray = [];
// let count = 0;
// for(let i = 0; i < aarray.length; i++){
//   for(let j = i; j % 2 != 0; j++){
//     barray[barray.length] = aarray[j];
//     count++;
//   }
// }
// console.log(barray, count);

// Array 56

// let aarray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// let barray = [];
// let count = 0;
// for(let i = 3; i < aarray.length; i += 3){
//   barray[barray.length] = aarray[i];
//   count++;
// }
// console.log(barray, count);


// Array 57

// let aarray = [12, 26, 66, 45, 66, 43, 12];
// let barray = [];
// for(let i = 0; i < aarray.length; i++){
//   for(let j = i; j % 2 == 0; j++){
//     barray[barray.length] = aarray[j];
//   }
// }
// for(let i = 0; i < aarray.length; i++){
//   for(let j = i; j % 2 != 0; j++){
//     barray[barray.length] = aarray[j];
//   }
// }
// console.log(barray);


// Array 58

// let aarray = [1, 4, 6, 2, 8, 7, 3];
// let barray = [];
// let count = 0;
// for(let i = 0; i < aarray.length; i++){
//   count += aarray[i];
//   barray[barray.length] = count;
// }
// console.log(barray);


// Array 59

// let aarray = [1, 4, 6, 2, 8, 7, 3];
// let barray = [];
// let count = 0;
// for(let i = 0; i < aarray.length; i++){
//   count += aarray[i] / 2;
//   barray[barray.length] = count;
// }
// console.log(barray);


// Array 60

// let aarray = [1, 2, 3, 4, 5, 6, 7, 8];
// let barray = [];
// for(let i = 0; i < aarray.length; i++){
//   let count = 0
//   for(let j = i; j < aarray.length; j++){
//     count += aarray[j];
//   }
//   barray[i] = count;
// }
// console.log(barray);
