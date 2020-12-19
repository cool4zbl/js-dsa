// Day194：var arr =[['A','B'],['a','b'],[1,2]] 求二维数组的全排列组合 结果：Aa1,Aa2,Ab1,Ab2,Ba1,Ba2,Bb1,Bb2

// 可以理解为，打印所有深度遍历的路径, 深度遍历深度为 数组长度

var arr = [
  ['A', 'B', 'F'],
  ['a', 'b'],
  [1, 2, 3],
  ['k', 'd'],
];

function full(list) {
  let res = [];
  let len = list.length;

  function dfs(index, arr) {
    // base case: 达到最深处，返回
    if (index === len) {
      res.push(arr.join(''));
      return;
    }
    for (let i = 0; i < list[index].length; i++) {
      arr.push(list[index][i]);
      dfs(index + 1, arr);
      arr.pop();
    }
  }

  dfs(0, []);
  return res;
}
console.log(full(arr));

module.exports = full;
