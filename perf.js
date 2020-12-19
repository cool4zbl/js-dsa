const {
  performance,
  PerformanceObserver
} = require('perf_hooks');

const fullArrange = require('./full-arrange')
const fullArrangeDfs = require('./full-arrange-dfs')

function someFunction() {
  console.log('hello world');
}

var arr = [
  ['A', 'B', 'C'],
  ['a', 'b'],
  [1, 2, 3],
  ['k', 'd'],
];

const wrapped = performance.timerify(fullArrange);
const wrappedDfs = performance.timerify(fullArrangeDfs);

const obs = new PerformanceObserver((list) => {
  console.log(list.getEntries()[0].duration);
  obs.disconnect();
});
obs.observe({ entryTypes: ['function'] });

// A performance timeline entry will be created
wrapped(arr);
wrappedDfs(arr);

const t = performance.now()
for (let i = 0; i < 10e3; i++)
  fullArrange(arr)
console.log(performance.now() - t)


const t1 = performance.now()
for (let i = 0; i < 10e3; i++)
  fullArrangeDfs(arr)
console.log(performance.now() - t1)

