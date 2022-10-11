Observables
Angular uses observables as an interface to handle
 a variety of common asynchronous operations.
For example: The HTTP module uses observables
 to handle AJAX requests and responses.
The Router and Forms modules use observables
 to listen for and respond to user-input events.
Observable provides support for delivering messages
 between different parts of your single-page application.
 using subscribe() and next().

// Create Observables
1. By creating observable object
    const simpleObservable = new Observable((observer) => {
        observer.next("bla bla bla");
        observer.complete();
    });

2. By calling static function `create`
    const simpleObservable = Observable.create((observer) => {
        observer.next("bla bla bla");
        observer.complete();
    });

3. using `of` function
// Coamma seperated argumants
    const simpleObservable = of('hello', 10, true, {name: 'My Name'});

4. using `from` function
// array as argument
    const simpleObservable = from(['hello', 10, true, {name: 'My Name'}]);

5. By cancating 2 observables using `cancat` method
    concat(source1$, source2$).subscribe();

6. By calling `fromEvent` function
    fromEvent(button, 'click').subscribe();

7. ajax() function of Rxjs from 'rxjs/ajax'
    ajax('https://reqres.in/api/users?page=2').subscribe();

// Suscribe to observable
    simpleObservable.subscribe((value) => {
        console.log(value);
    });

// Unsubscribe 
    simpleObservable.unsubscribe()


Observables are two types: Observable and Subject.

Observables are unicast, i.e. we cannot send value to Observables,
 we just can get values from them by subscribing them;
But Subjects are multicast, i.e. we can send value to Subjects
 using next() function
 and recieve values from subject by subscribing them.

Subject
    // Eg
    const subject = new Subject();

    // subscriber 1
    subject.subscribe((data) => {
        console.log('Subscriber A:', data);
    });

    subject.next(Math.random());
    subject.next(Math.random());

    // subscriber 2
    subject.subscribe((data) => {
        console.log('Subscriber B:', data);
    });

    // output
    // Subscriber A: 0.24957144215097515
    // Subscriber A: 0.8751123892486292


Subject has 3 types: BehaviourSubject, ReplaySubject, AsyncSubject
BehaviorSubject
    The BehaviorSubject has the characteristic that it stores the “current” value. 
    This means when you subscribe to BehaviorSubject
     you directly get the last emitted value from the BehaviorSubject.
    // Eg
        const subject = new Rx.BehaviorSubject();

        // subscriber 1
        subject.subscribe((data) => {
            console.log('Subscriber A:', data);
        });

        subject.next(Math.random());
        subject.next(Math.random());

        // subscriber 2
        subject.subscribe((data) => {
            console.log('Subscriber B:', data);
        });

        subject.next(Math.random());

        console.log(subject.value)

        // output
        // Subscriber A: 0.24957144215097515
        // Subscriber A: 0.8751123892486292
        // Subscriber B: 0.8751123892486292
        // Subscriber A: 0.1901322109907977
        // Subscriber B: 0.1901322109907977
        // 0.1901322109907977


ReplaySubject
    ReplaySubject behaves the same as BehaviorSubject.
    It has one additional characteristic i.e. it can store
     multiple last values emmitted by ReplaySubject
    While creating ReplaySubject, we tell to ReplaySubject
     that these many last values you should record
    eg. const subject = new ReplaySubject(2); 
    // this. will remember last 2 emitted values.
    Also there is provision to tell subject that
     for how much time you should record last values
    eg. const subject = new ReplaySubject(5, 200); 
    // this. will remember last 5 emitted values for 200 ms.
    // Eg
        const subject = new Rx.ReplaySubject(2);

        // subscriber 1
        subject.subscribe((data) => {
            console.log('Subscriber A:', data);
        });

        subject.next(Math.random())
        subject.next(Math.random())
        subject.next(Math.random())

        // subscriber 2
        subject.subscribe((data) => {
            console.log('Subscriber B:', data);
        });

        subject.next(Math.random());

        // Subscriber A: 0.3541746356538569
        // Subscriber A: 0.12137498878080955
        // Subscriber A: 0.531935186034298
        // Subscriber B: 0.12137498878080955
        // Subscriber B: 0.531935186034298
        // Subscriber A: 0.6664809293975393
        // Subscriber B: 0.6664809293975393

AsyncSubject
The AsyncSubject is a Subject variant
 where only the last value of the Observable execution is sent to its subscribers,
 and that too only when the execution completes.
    // Eg
    const subject = new Rx.AsyncSubject();

    // subscriber 1
    subject.subscribe((data) => {
        console.log('Subscriber A:', data);
    });

    subject.next(Math.random())
    subject.next(Math.random())
    subject.next(Math.random())

    // subscriber 2
    subject.subscribe((data) => {
        console.log('Subscriber B:', data);
    });

    subject.next(Math.random());
    subject.complete();

    // Subscriber A: 0.4447275989704571
    // Subscriber B: 0.4447275989704571