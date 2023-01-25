ReadOnly
Prefix readonly is used to make a property as read-only.
they either need to be initialized at declaration or initialized inside the class constructor.



Using trackBy function
// in ts
trackByFn(index, item) { return item.id; }
// in template
<p *ngFor="let i of array; trackBy: trackByFn">{{ i.content }}</p>




pass input to child as async
Fetch async data in parent component using observable of Promises
Assign it to class member
Pass class members to children


Passing observables to child
    // Parent ts
    private _data = new Subject<string>();
    readonly data$ = this._data.asObservable();

    // Parent template
    <child [data$]="data$" />

    // send data to child from parent method
    this._data.next('next text');

    // Child
    @Input() data$: Observable<string>;

    // subscribe for getting data from parent
    this.data$.subscribe(value => {this.valueFromParent = value})




environment
We use different environment files for different environment
Its simply json file
We write keys of access points in environment file such as
 API_KEYS, Api Endpoints domains, Urls to serve static files
In production mode we write production property to true
We can create our own environment files as per need
We configure to replace environment files in angular.json file
 under configuration section of architect
We can configure for production, test, debug modes
eg.
    "configuration": {
        debug: {},
        release: {},
        test: {}
    }

    under different environment configuration
    "fileReplacements": [{
        "replace": "src/environments/environment.ts",
        "with": "src/environments/environment.release.ts"
    }],




Techniques to render large no of nodes on page
Virtual Scrolling - Using CDK’s Scrolling module
    given a container and a list of items, an item is only rendered
     if it’s within the visible boundaries of the container
    1 - Import ScrollingModule from CDK
    2 - Add element cdk-virtual-scroll-viewport and
     pass itemSize to how many records to show in one slot
        <cdk-virtual-scroll-viewport itemSize="50"></cdk-virtual-scroll-viewport>
    3 - render items using cdkVirtualFor structural directive instead of ngFor
        <div *cdkVirtualFor="let item of items">
            {{ item }}
        </div>


Progressive rendering
    The concept of progressive rendering is simply to render a subset of items progressively
     and postpone the rendering of other items in the event loop.
    This allows the browser to smoothly and progressively render all the items.
    eg
    Using createEmbeddedView and setInterval
    We create view for subset of items, we stop script for some miliseconds,
     and rendering enging renders that item in dom
    then create views for next batch of items, stop script, renders views
     and this way we achive progressive rendering
    eg
    buildData(list, itemSize = 500) {
        let currentIndex = 0;

        const interval = setInterval(() => {
            const nextIndex = currentIndex + itemSize;

            for (let n = currentIndex; n <= nextIndex ; n++) {
                if (n >= list.length) {
                    clearInterval(interval);
                    break;
                }
                this.container.createEmbeddedView(this.template, list[n]);
            }

            currentIndex += itemSize;
        }, 10);
    }




    Performance in angular- lazy loading, 
    Handle memory leaks
    Typescript extending interface
    access specifier in typescript
    JS Performance
    JS memory leaks
    OOPS concepts in JS
    State management using akita in angular or NGRX
    What is mean By reactive programming
    Observable vs Promise brush up
    How to handle the errors of backend api in angular



