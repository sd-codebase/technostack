Web components
Web components enable developers to create custom and reusable HTML tags that can be used in web apps just like standard HTML tags.
Angular provides the elements package which helps export Angular components as web components.
Web components are based on four technologies:
1 - Custom Elements: are another name for web components.
2 - Shadow DOM: This will allow you to create custom elements which are isolated from the rest of the HTML document.
3 - ES Modules
4 - HTML Templates

Create angular project
Create fully working angular component - eg. NewsComponent
Test application by running it

For creating web component follow following steps
1- In angular we use @angular/elements to create web components
  ng add @angular/elements
2- Change target in tsconfig.json to es2015
  there is one known issue if target is less than es6
3- inject injector in app module
  constructor(private injector: Injector) {}
4- create element using createCustomeElement() method from angular/element package
  constructor(private injector: Injector) {
    const el = createCustomElement(NewsComponent, { injector });
    customElements.define('news-widget', el);
  }
5- build project for generating component
  ng build --prod --output-hashing none

This will generate build of angular project in dist folder
 which consists of 5 files runtime, es2015-polyfills, polyfills, scripts, main

Now add this web component in our page by following thise steps
1- pick all 5 generated files and add in index.html page before body tag ends
  <script type="text/javascript" src="runtime.js"></script>
  <script type="text/javascript" src="es2015-polyfills.js" nomodule></script>
  <script type="text/javascript" src="polyfills.js"></script>
  <script type="text/javascript" src="scripts.js"></script>
  <script type="text/javascript" src="main.js"></script>
2- write component in webpage
  eg. <news-widget></news-widget>

Run webpage on server, we can see news widget rendered in webpage.

