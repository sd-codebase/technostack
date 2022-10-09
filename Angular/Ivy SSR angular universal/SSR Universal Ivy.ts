SSR
Server side rendering
SSR generates the full html for a page on server, and then is serves to client in reponse to Navigation
It avoids additional request for initial data fetching and templating, since it handle before browser gets response

Pros
- Initial page load is faster
- Best for static site
- Search engin can crawl the site for better SEO

Cons
- Frequent server requests
- Everytime full page reloads
- Though Initial page load is faster, overall rendering is slow
 because of frequent server requests and everytime page load happens



Angular Universal
Angular Universal is technology that renders angular app server side
Where the normal SPA ececutes in browser, angular universal executes on server,
 generates static application pages, that later gets bootstraped in browser
App renders fast, user can see layout of page before it gets fully interactive
We can easily prepare angular application for server side rendering using cli
We can make it in simple 2 steps,
    Add nguniversal package in by simply installing via npm
    eg. npm i @nguniversal/express-engine
    Serve server side rendered app by running script via npm run
    eg. npm run dev:ssr




Ivy
Ivy is the rendering engine used for angular application
This is 4th complete rewrite of angular rendering engine.
Ivy is now by default enabled in angular application
This made huge improvements in angular aaplication
Ivy can compile components more independantly with each others
Locality and Tree Shaking are two key aspects that Ivy considered
1 - Locality
This is the processof compiling each component independantly
 with its own loacl information that rebuilds faster
 by compiling partial changes and not the entire project files.
This increases build speed
2 - Tree Shaking
Removing unused code during the build process
During build process tree shaking uses static analysis
 and eliminates unused and unreferenced code

Features of Ivy
1 - Lazy loaded components
entrycomponents is deprecated and will be removed in feature versions of angular
With Ivy any component can be lazily loaded and dynamically rendered
2 - Improvements to differential loading
Differential loading means build an application for lower version of javascript and then build for heigher versions.
Angular applications first builds for es5 and then es6 or ES2015.
But now using Ivy, angular application builds first for ES2015 and then same bundle uses to tranpile into es5.
This way second time angular don't build application it just transpile builds to lower version
3 - AOT compilation every where
AOT enabled by default in builds, dev server and test builds also

Make ivy enabled in existed project
In tsconfig.app.json
angularCompilerOptions: {
    enableIvy: true,
}

