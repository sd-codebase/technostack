// Services
Services in Angular are simply typescript classes
 with the @injectible decorator. 
This decorator tells angular that the class is a service
 and can be injected into components that need that service.
- Share logic or data across components
- Encapsulate external interactions like data access
- We can reuse the service at many places.

1 - Create Service by decorating a class using @Injectable()
    @Injectable()
    export class MyService {}
2 - Provide service iusing providers array of Module or components
    providers: [Myservice],
3 - Inject Service in component constructor
    constructor(private myService: MyService) {}



// providers v/s viewProviders
When weuse <ng-content> in components tempate then providers and viewProviders makes difference.
If we want to inject any provider in to projected content we have to use providers
If we want to inject any provider in components view we can use providers or viewProviders both.
viewProviders cannot injected into the projected content.
viewProviders allows you to prevent projected content from messing with your services.
Syntax
1 - providers : [MyService],
2 - viewProviders: [MyViewService],



// Redirecting ways
We can follow two approaches to redirecting in angular
1-routerLink directive, 2- navigate method of Router service
1 - <a [routerLink]="['/my-route-to-navigate']"></a>
2 - this.router.navigate(['/my-route-to-navigate']);



// Ways to pass data to children
Four way to share data between Angular Components
    - Parent to Child: via Input
    - Child to Parent: via Output() and EventEmitter
    - Child to Parent: via ViewChild
    - Unrelated Components: via a Service
1. via @Input
    // in parent template
    <chiid-component [name]="childName"/>
    // in  child component
    @Input() name: string;

2. via Output() and EventEmitter
    // in parent template
    <chiid-component (onNameUpdate)="updateName($event)"/>
    // in  child component
    @Output() onNameUpdate = new EventEmitter<string>();
    this.onNameUpdate.emit(updatedName);

3. via ViewChild
    // in parent template
    <chiid-component/>
    // in parent component
    @ViewChild(ChildComponent, {static: false}) child: ChildComponent;
    ngAfterViewInit() {
        this.childName = this.child.name; 
    }
    // in  child component
    public name: string;

3. via a Service
    if there is no relation between component
        we can use services to share data between them.


// ng-template and ng-container and ng-content
1. ng-template helps to create dynamic templates that can be customized.
These template elements only work in the presence of structural directives,
 which help us to define a template that doesn’t render anything by itself,
 but conditionally renders them to the DOM.
    //Eg
    <div *ngIf=”false else showNgTemplateContent”> 
      Shouldn't be displayed 
    </div>
    <ng-template #showNgTemplateContent> Should be displayed
    </ng-template>

2. ng-container is directive that allows you to group elements. and it doesn't render in dom
    also more than 2 structural directives doesn't work on single element
    in this case we can use ng-container
    //Eg
    <div *ngIf="details" *ngFor="let info of details">
        {{ info.content }}
    </div> // this doen't work
    <div *ngIf="details">
        <div *ngFor="let info of details">
            {{ info.content }}
        </div>
    </div> // this could be the solution but renders extra div
    <ng-container *ngIf="details">
        <div *ngFor="let info of details">
            {{ info.content }}
        </div>
    </ng-container> // solves issue
3. ng-content is used to project content into components by host component.
<ng-content> tag as a placeholder for that dynamic content.
    // Eg.
    <app-child>
        <div> Child Component Details </div> // this renders in child component
    </app-child>



// createEmbeddedView method or how to create embedded view
We can create an embedded view using createEmbeddedView method
 then attach that view to the DOM via ViewContainerRef:
    // in template 
    <ng-template #template let-name='fromContext'><div>{{name}}</ng-template>
    <ng-container #vc></ng-container>
    // in component
    @ViewChild('template', { read: TemplateRef }) _template: TemplateRef<any>;
    @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
    ngAfterViewChecked() {
        const view = this._template.createEmbeddedView({fromContext: 'John'});
        this.vc.insert(view);
    }



// Schemas property in NgModule
Defines a schema that will allow any non-Angular elements and properties.
Angular won't throw an error like this is not known element,
 if we are useng any non angular component.
    // in NgModule or Component decorator
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
Allowed value are NO_ERRORS_SCHEMA and CUSTOM_ELEMENTS_SCHEMA.



// NgStyle vs NgClass
The NgStyle directive lets you set style properties to a DOM element using javascript object.
The NgClass directive allows you to set the CSS class dynamically for a DOM element using javascript object.
    // Eg
    [ngStyle]="{'background-color':'green'}"
    [ngClass]="{'text-success':true}"




// DOMSanitizer
DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS)
 by sanitizing values to be safe to use in the different DOM contexts.
Angular has dedicated class DomSanitizer to sanitize untrusted data.
By calling any of the bypassSecurityTrust APIs disables Angular's built-in sanitization.
These bypassSecurityTrust APIs carefully check and audit all values and code paths.
DomSanitizer provides following methods which takes string value arguments
1. bypassSecurityTrustHtml(): SafeHtml
2. bypassSecurityTrustStyle(): SafeStyle
3. bypassSecurityTrustScript(): SafeScript
4. bypassSecurityTrustUrl(): SafeUrl
5. bypassSecurityTrustResourceUrl(): SafeResourceUrl

// innerHTML 
Rendering HTML typically has the potential to introduce Cross-Site Scripting (XSS).
The rendered HTML could contain malicious scripts that present a security issue.
Behind the scenes, [innerHTML] uses Angular’s DomSanitizer
 which uses a list of approved HTML elements and attributes.
This will restrict your [innerHTML] values from using <script> and <style> tags and style attributes.



// Routing strategies
Angular supports two different location strategies or Routing strategy in Angular.
One is PathlocationStrategy and the other one is HashLocationStrategy .
The HashLocationStrategy use the Hash style routing,
    Where URL looks like http://localhost:4200/#/product
While PathlocationStrategy uses the HTML 5 Routing.
    Where URL looks like http://localhost:4200/product
We should use PathlocationStrategy because 
 it produces clean and SEO Friendly URLs that are easier for users to understand and remember.
 also we can take advantage of the server-side rendering
Angular by default supports for PathlocationStrategy,
    but if we want to enable HashLocationStrategy support
    we can add useHash true while providing routes to NgModule
    //Eg
    RouterModule.forRoot(routes, {useHash: true});



// Routing events
Angular raises several events whilenavigating from one route to another route.
We as developer can subscribe to router events and listen for specific event and
 can perform action during navigation.
NavigationStart, NavigationEnd, NavigationError, NavigationCancel and so on
Tere are 15+ events 
    //Eg.
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
            console.log('Navigation Ends');
        }
    });


// Observables vs Promises
-   Observable emits the values over the period of time
    Promise emits single value by resolving or rejecting it
-   Observable are lazy, won't call untin we subscribe them using subscribe() method
    Promises are not lazy, calls as we execute them
-   We can cancel observables using unsubscribe() method
    Promise can not cancel
-   We can use different types of operator in while subscribing to observables
    There are no operators in Promise



// Why to use typescript
TypeScript always points out the compilation errors at the time of development
Because of this getting runtime errors is less likely
TypeScript supports static/strong typing.
This means that type correctness can be checked at compile time which is not available in javascript
TypeScript supports Interfaces but JavaScript does not.



// Why angular team selected typescript over dart
Most web frameworks uses javascript, also most of web developers uses javascript.
Typescript is superset of javascript,
 so for developers it is easy to switch to tyescript than dart.
There are lots of libraries developeed in javascript.
 these can be easily integrateed with typescript
 but it could be complex to integrate with dart
Also as we know TS is superset of JS,
 we can just rename file to .ts and it would be totally fine in typescript.



// Change target of transpiling
in tsconfig.json
{
    compilerOptions: {
        target: "esnext"// allowed values - es3, es5, es6/es2015, es2016 ....
    }
}



// Improve performance of angular app
A few popular methods or techniques help us optimize the application better.
1. Using AoT Compilation
2. Using OnPush Change Detection Strategy
3. Using Pure Pipes
4. Unsubscribe from Observables
5. Lazy Loading
6. Use trackBy option for For Loop
7. Avoid computation in template files
8. Usage of Web Workers

// How to secure angular application
1- Prevent an application from Cross-Site Scripting (XSS)
2- Use Route guards when required
3- Implement CSP
4- Do not use DOM’s APIs directly
5- Prevent CSRF
6- Prevent Cross-Site Script Inclusion
7- Up-to-date Angular Libraries
8- Avoid Modifying the Angular Copy
9- Use Offline Template Compiler
10- Validate user-submitted data on server-side code
11- Do not use components with Known Vulnerabilities
