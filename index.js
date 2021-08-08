// 関数リテラル

let getTriangle = function (base, height) {
  return (base * height) / 2;
};
console.log("三角形の面積は" + getTriangle(10, 2)); //三角形の面積は10

//  アロー関数

let getTriangle = (base, height) => {
  return (base * height) / 2;
};
console.log("三角形の面積は" + getTriangle(10, 2)); //三角形の面積は10

// アロー関数は条件によって記述を簡素化できる

// 条件1 本文が一文であるとき、ブロックを表す{...}を省略できる

let getTriangle = (base, height) => (base * height) / 2;
console.log(getTriangle(10, 2)); //10

// 条件2 引数がひとつの場合、引数をくくるカッコを省略できる

let getCircle = radius => radius * radius * Math.PI;
console.log(getCircle(10)); //314.1592653589793;

// 条件3 引数がない場合は、カッコを省略せずに記述する。

let show = () => console.log("Hello, world!");
show(); //Hello, world!
