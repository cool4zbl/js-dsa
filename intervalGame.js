// 写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b, ..., a + n*b 的时间，然后写一个 myClear，停止上面的 mySetInterVal

const myFunc = () => console.log('myFunc Called');

const mySetInterval = (fn, a, b) => {
  let timer;
  let count = 0;

  function loop() {
    timer = setInterval(() => {
      timer && clearInterval(timer);
      fn.call(null);
      count++;
      loop();
    }, a + count * b);
  }

  loop();

  return () => timer && clearInterval(timer);
};

const myClear = mySetInterval(myFunc, 1000, 500);
setTimeout(() => {
  console.log(' == END == ');
  myClear();
}, 4600);
