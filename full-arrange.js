// Day194：var arr =[['A','B'],['a','b'],[1,2]] 求二维数组的全排列组合 结果：Aa1,Aa2,Ab1,Ab2,Ba1,Ba2,Bb1,Bb2

// 减而治之，总体的路径 = 迭代(两个数组路径组合)

const getResult = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return;
  }
  if (!arr1.length) {
    return arr2;
  }
  if (!arr2.length) {
    return arr1;
  }
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push(String(arr1[i]) + String(arr2[j]));
    }
  }
  return result;
};

const findAll = (arr) =>
  arr.reduce((total, current) => {
    return getResult(total, current);
  }, []);
// var arr = [
//   ['A', 'B'],
//   ['a', 'b'],
//   [1, 2, 3],
//   ['k', 'd'],
// ];
// console.log(findAll(arr));

module.exports = findAll;
