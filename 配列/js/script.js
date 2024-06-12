const arr = [10, 4, 1, 20, 18, 2, 32, 3, 40, 140];
// console.log(arr);

// arr.forEach((v, i) => {
//     // console.log(i);
// });

// //新しい配列として生成
// const newArr = arr.map((v, i) => {
//     // console.log(v);
// });

// //特定の条件を与えて配列データを取得
// // const arrs = arr.filter((v) => v < 10);

// const arrs = arr.filter((v) => {
//     return v < 10;
// });
// console.log(arrs);

// const sortArr = arrs.sort((a, b) => {
//     return a - b;
// });
// console.log(sortArr);

//sort()デフォルトはarr配列の中の数値の左側の値を並べ替える
//arr = [10, 4, 1, 20, 18, 2, 32, 3, 40, 140] , 左側の書き方で補完したとき sort()をデフォルトで書くと
//arr = [1, 10, 140, 18, 2, 20, 3, 32, 4, 40] , 数値の左側の値の小さい順で並ぶ
const sortArrs = arr.sort();
console.log(sortArrs);
