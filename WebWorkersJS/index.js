function findPrimeFrowmWorker() {
  console.time('Worker');
  const num = 1000000;
  if (typeof Worker !== 'undefined') {
    const ww = new Worker('./worker.js');
    ww.onerror = (error) => { console.log(error.message);}
    ww.onmessage = (event) => { 
      document.getElementById('num').innerText = event.data;
      ww.terminate();
      console.timeEnd('Worker');
    }
    ww.postMessage(num);
  } else {
    console.log('No supported worker');
  }
}

function findPrimeFromMainThread() {
  console.time('Main Thread');
  const num = 1000000;
  document.getElementById('num').innerText = nthPrime(num);
  console.timeEnd('Main Thread');
}

function nthPrime(n) {
  var P = 0;

  function isPrime(x) {
      var isPrime= true;

      for (var d = 2; d <= Math.sqrt(x); d++) {
          if((x/d) % 1 == 0) {
              isPrime = false;
              break;
          }
      }

      return isPrime;
  }

  for (var i = 1; 0 < n; i++) {

      if(isPrime(i)) {
          P = i; n--;
      }

      // we can skip the even numbers
      if(3 <= i){
          i++;
      }

  }

  return P;
}