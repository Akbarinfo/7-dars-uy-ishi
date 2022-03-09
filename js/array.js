// Problem 153

// let barray = [7, 10, 5, 3, 2];
// let sortarray = [];
// let count = 0;

// for(let i = barray.length; i >= 0; i--) {
//   if(barray[i] % 2 == 0) {
//     sortarray[sortarray.length] = i;
//     count++;
//   }
// }

// console.log(sortarray, count);


// Problem 154

// let barray = [7, 10, 5, 3, 2];
// let k = 2;


// for(let i = 0; i < barray.length; i++) {
//   for(let j = i; j % k == 0; j++){
//     console.log(barray[j])
//   }
// }


// Problem 155

// let barray = [7, 10, 5, 3, 2];
// let k = 2;

// for(let i = 0; i < barray.length; i+= k) {
//   console.log(barray[i]);
// }


// Problem 156

// let barray = [7, 10, 5, 3, 2];

// for(let i = barray.length; i > 0; i--) {
//   for(let j = i - 1; j % 2 != 0; j++) {
//     console.log(barray[j]);
//   }
// }

// Problem 157

// let barray = [7, 10, 5, 3, 2]

// for (let i = 0; i < barray.length; i++) {
//   if (i % 2 == 0) {
//     console.log(barray[i]);
//   } else {
//     continue
//   }
// }
// for (let i = 0; i < barray.length; i++) {
//   if (i % 2 != 0) {
//     console.log(barray[i]);
//   } else {
//     continue
//   }
// }


// Problem 158



// Problem 159

// let barray = [7, 10, 3, 5]

// for(let i = 0; i < barray.length; i++){
//   if(barray[barray.length - 1] > barray[i]) {
//     console.log(barray[i]);
//     break
//   }
// }


// Problem 160



// Problem 161

// let barray = [5, 10, 3, 7, 10, 12, 4];
// // let barray = [10, 12, 5, 11, 13, 15];
//  //  let barray = [2, 4, 12];
// let result = 0;
// let k = 0;
// let l = 4;

// for(let i = k+1; i < l; i++){
//   result += barray[i];
// }

// console.log(result);


// Problem 162

// let barray = [5, 10, 3, 7, 10, 12, 4];
// // let barray = [10, 12, 5, 11, 13, 15];
// //  let barray = [2, 4, 12];
// let result = 0;
// let count = 0;
// let k = 0;
// let l = 4;

// for(let i = k+1; i < l; i++){
//   result += barray[i];
//   count++;
// }

// console.log(result / count);


// Problem 163

// let barray = [5, 10, 3, 7, 10, 12, 4];
// // let barray = [10, 12, 5, 11, 13, 15];
// //  let barray = [2, 4, 12];
// let result = 0;
// let count = 0;
// let k = 0;
// let l = 4;

// for(let i = k+1; i < l; i++){
//   barray[i] = 0;
// }

// for(let j = 0; j < barray.length; j++) {
//   result += barray[j];
// }
// console.log(result);



// Problem 164


// Problem 165


// Problem 166


// Problem 167

// let barray = [-2, 5, -10, 12, 3, -4, -5];
// let result = 0;

// for(let i = 0; i < barray.length; i+=2){
//   result += barray[i];
// }
// console.log(result);


// Problem 168



// Problem 169


// Problem 170


// Problem 171


// Problem 172


// Problem 173

// let barray = [1, -10, 2, 1, 2, 5];

// for(let i = 0; i < barray.length; i++){
//   if(barray[i] < 5) {
//     barray[i] *= 2;
//   }
//   else {
//     barray[i] /= 2;
//   }
// }
// console.log(barray);


// Problem 174

// let aarray = [1, 5];
// let barray = [1, 5];
// let carray = [];

// for(let i = 0; i < aarray.length; i++) {
//   if(aarray[i] > barray[i]){
//     carray[carray.length] = aarray[i];
//   }
//   else {
//     carray[carray.length] = barray[i];
//   }
// }

// console.log(carray);


// Problem 175

// let aarray = [1, 2, 3, 4, 5];
// let barray = []

// for(let i = 0; i < aarray.length; i++) {
//   if(aarray[i] % 2 == 0) {
//     barray[barray.length] = aarray[i];
//   }
// }

// console.log(barray);


// Problem 176

// let aarray = [1, 2, 3, 4, 5];
// let barray = []

// for(let i = 0; i < aarray.length; i++) {
//   for(let j = 0; j < aarray.length; j++){
//     console.log(aarray[j]);
//   }
// }
// console.log(barray);


// Problem 177


// Problem 178


// Problem 179


// Problem 180


// Problem 181


// Problem 182