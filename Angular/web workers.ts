Web workers
We run CPU-intensive computations in a background thread,
 this way we can free main thread to update user interface
Using web workers can help increase your application's performance

Adding a web worker
    ng generate web-worker <location>
    eg. ng generate web-worker app
    1. This command configures your project to use web workers
        - CREATE tsconfig.worker.json
        - CREATE src/app/app.worker.ts
        - UPDATE tsconfig.app.json
        - UPDATE angular.json
        - UPDATE src/app/app.component.ts
    2. Adds tsconfig.worker.json
            // tsconfig.worker.json
            {
                "extends": "./tsconfig.json",
                "compilerOptions": {
                    "outDir": "./out-tsc/worker",
                    "lib": [
                        "es2018",
                        "webworker"
                    ],


                    "types": []
                },
                "include": [
                    "src/**/*.worker.ts"
                ]
            }

    3.tsconfig.worker.json extends tsconfig.json and includes options to compile web workers.
            // tsconfig.app.json [only a snippet]
            "exclude": [
            "src/test.ts",
            "src/**/*.spec.ts",
            "src/**/*.worker.ts"
            ]

    4. it excludes all the worker from compiling as it has separate configuration.
            // angular.json (only a snippet) 
            "webWorkerTsConfig": "tsconfig.worker.json"


    5. Adds the following code to src/app/app.worker.ts to receive messages.
        addEventListener('message', ({ data }) => {
            const response = `worker response to ${data}`;
            postMessage(response);
        });


    6. Adds the following code to src/app/app.component.ts to use the worker.
        if (typeof Worker !== 'undefined') {
            // Create a new
            const worker = new Worker(new URL('./app.worker', import.meta.url));
            worker.onmessage = ({ data }) => {
                console.log(`page got message: ${data}`);
            };
            worker.postMessage('hello');
        } else {
            // Web workers are not supported in this environment.
            // You should add a fallback so that your program still executes correctly.
        }


You have to refactor your code to use the web worker.

Full working example
- Create Prime calculator to calculate prime numbers
- Update web worker to calculate prime number
    addEventListener('message', ({ data }) => {
        // const response = `worker response to ${data}`;
        const response = PrimeCalculator.findNthPrimeNumber(parseInt(data));
        postMessage(response);
    });
- In app component
    findnthPrimeNumber(num) {
      if (typeof Worker !== 'undefined') {
         // Create a new
         const worker = new Worker('./app.worker', { type: 'module' });
         worker.onmessage = ({ data }) => {
            this.primeNum = data;
         };
         worker.postMessage(num);
      } else {
         // Web Workers are not supported in this environment.
         // You should add a fallback so that your program still executes correctly.
      }
   }

- In template
<a href="#" (click)="findnthPrimeNumber(10000)">Click here</a> to find 10000th prime number
