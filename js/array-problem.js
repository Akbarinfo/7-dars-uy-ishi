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

// let aarray = [7, 10, 3, 2];
// let result = "";

// for(let i = 0; i < aarray.length / 2; i++) {
//   result += aarray[i] + " " + aarray[aarray.length - 1 - i] + " ";
// }

// console.log(result);


// Problem 159

// let barray = [7, 10, 3, 5]

// for(let i = 0; i < barray.length; i++){
//   if(barray[barray.length - 1] > barray[i]) {
//     console.log(barray[i]);
//     break
//   }
// }


// Problem 160

// let aarray = [5, 10, 3, 7];
// // let aarray = [10, 12, 5, 11, 13, 15];
// // let aarray = [2, 4, 12];
// let barray = false;
// for(let i = 0; i < aarray.length; i++) {
//   if(aarray[0] < aarray[i] && aarray[aarray.length - 1] > aarray[i]) {
//     barray = aarray[i];
//   }
// }
// console.log(barray);


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

// let aarray = [11, 14, 17, 20, 23];
// let n = aarray[1] - aarray[0];
// let count = 0;

// for(let i = 1; i < aarray.length; i++){
//   if(aarray[i] - n != aarray[i - 1]){
//     count = 1;
//     break;
//   }
// }

// if(aarray.length < 2){
//   console.log(false);
// } else if(count == 0){
//   console.log(n);
// } else{
//   console.log(false);
// }


// Problem 165

// let aarray = [2, 6, 18];
// let n = aarray[1] / aarray[0];
// let count = 0;

// for(let i = 1; i < aarray.length; i++){
//   if(aarray[i] / n != aarray[i - 1]){
//     count = 1;
//     break;
//   }
// }

// if(aarray.length < 2){
//   console.log(false);
// } else if(count == 0){
//   console.log(n);
// } else{
//   console.log(false);
// }


// Problem 166

// let aarray = [-2, 5, -10, 12, 3, -4, -5];
// let bson = 0;

// if(aarray[0] < 0) {
//   for(let i = 0; i < aarray.length; i++) {
//     if(i % 2 == 0 && aarray[i] > 0) {
//       bson = i;
//       break;
//     }
//     else if(i % 2 == 1 && aarray[i] < 0) {
//       bson = i;
//       break;
//     }
//   }
// }
// else {
//   for(let j = 0; j < aarray.length; j++) {
//     if(j % 2 == 0 && aarray[j] < 0) {
//       bson = j;
//       break;
//     }
//     else if(j % 2 == 1 && aarray[j] > 0) {
//       bson = j;
//       break;
//     }
//   }
// }

// console.log(bson)


// Problem 167

// let barray = [-2, 5, -10, 12, 3, -4, -5];
// let result = 0;

// for(let i = 0; i < barray.length; i+=2){
//   result += barray[i];
// }
// console.log(result);


// Problem 168

// let aarray = [-2, 5, -10, 12, 3, -4, -5];
// // let aarray = [-2, 4, -8, 16, -32];
// // let aarray = [1, -3, 12, -1, 3, -4];
// let barray = [];
// let count = 0;

// for(let i = 0; i < aarray.length; i++) {
//   if(aarray[i] > aarray[i + 1]) {
//     barray[barray.length] = i;
//     count++;
//   }
// }
// console.log(`${barray} c: ${count}`);


// Problem 169

// let aarray = [-2, 5, -10, 12, 3, -4, -5];
// // // let aarray = [-2, 4, -8, 16, -32];
// // // let aarray = [1, -3, 12, -1, 3, -4];
// let barray = [];
// let count = 0;

// for(let i = aarray.length - 1; i >= 0; i--) {
//   if(aarray[i] < aarray[i - 1]) {
//     barray[barray.length] = aarray[i - 1];
//     count++;
//   }
// }
// console.log(`${barray} c: ${count}`);


// Problem 170

// let aarray = [1, 2, -10, 3, 5];
// let r = 5;
// let a = aarray[0];
// let result = Infinity;

// for(let i = 0; i < aarray.length; i++) {
//   let t = Math.abs(aarray[i] - r);
//     if(result > t) {
//       result = t;
//       a = aarray[i];
//     }
//   }
//   console.log(a);


// Problem 171

// let aarray = [1, -10, 2, 1, 2, 5];
// let barray = [];
// let count = 0;
// for(let i = 0; i < aarray.length; i++){
//   for(let j = i - 1; j >= 0; j--){
//     if(aarray[j] != aarray[i]){
//       count = 0;
//     } else {
//       count = 1;
//       break;
//     }
//   }
//   if(count == 0){
//     barray[barray.length] = aarray[i];
//   }
// }
// console.log(barray);

// Problem 172

// let aarray = [true, -5];
// let barray = [2, null];
// let carray = [];
// carray = aarray;
// aarray = barray;
// barray = carray;
// console.log(aarray);
// console.log(barray);


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
// let barray = [];
// let count = 0;

// for(let i = 0; i < aarray.length; i++) {
//   count += aarray[i];
//   barray[barray.length] = count;
// }
// console.log(barray);


// Problem 177

// let aarray = [1, 2, 3, 4, 5];
// let barray = [];

// for(let i = 0; i < aarray.length; i++) {
//   let count = 0;
//   for(let j = i; j < aarray.length; j++) {
//     count += aarray[j];
//   }
//   barray[barray.length] = count;
// }
// console.log(barray);


// Problem 178

// let aarray = [1, 2, 10, 5, 6, 7]
// // let aarray = [2, 10, 5, 8, 12]
// // let aarray = [9, 14, 3, 2, 1];
// let otherArray = [];
// let countArray = [];
// let count = 1;
// let otherCount = 1;
// for(let i = 0; i < aarray.length; i++){
//   if(aarray[i] < aarray[i + 1]){
//     count++;
//     countArray[countArray.length] = aarray[i];
//   } else{
//     countArray[countArray.length] = aarray[i];
//     for(let j = i + 1; j < aarray.length; j++){
//       if(aarray[j] < aarray[j + 1]){
//         otherCount++;
//         otherArray[otherArray.length] = aarray[j];
//       } else{
//         otherArray[otherArray.length] = aarray[j];
//         break;
//       }
//     }
//     break;
//   }
// }
// if(count >= otherCount){
//   console.log(countArray);
// } else{
//   console.log(otherArray);
// }


// Problem 179

// let aarray = [];
// let n = 6;
// let a = 0;
// let b = 1;
// let c = 0;

// for(let i = 1; i <= n; i++){
//   c = a + b;
//   a = b;
//   b = c;
//   aarray[aarray.length] = c;
// }
// console.log(aarray);


// Problem 180

// let aarray = [1, 2, 10, 5, 6, 7];
// let min = aarray[0];
// let max = aarray[0];

// for(let i = 0; i < aarray.length; i++) {
//   if(min > aarray[i]) {
//     min = aarray[i];
//   }
//   else if(max < aarray[i]) {
//     max = aarray[i];
//   }
// }
// console.log(`min ${min} max ${max}`);


// Problem 181


// Problem 182

// let aarray = [7, 3, 5, 3, 2];
// // let aarray = [1, 2, 3];
// // let aarray = [0, 1, 10, 22, 5];

// let b = 10;
// let result = 0;

// for(let i = 0; i < aarray.length; i++) {
//   if(aarray[i] == b){
//     result = i;
//     break;
//   }
//   else if (aarray[i] != b) {
//     result = -1;
//   }
// }

// console.log(result);