Service worker
A service worker is a script that runs in the web browser and
 manages caching for an application.
Service workers work as a network proxy.
Adding a service worker to an Angular application is
 one of the steps for turning an application into a Progressive Web App

Adding a service worker to project
    ng add @angular/pwa
    - Adds the @angular/service-worker package to your project.
    - Enables service worker build support in the CLI.
    - Imports and registers the service worker in the application module.
    - Updates the index.html file:
        Includes a link to add the manifest.webmanifest file
        Adds a meta tag for theme-color
    - Installs icon files to support the installed Progressive Web App (PWA).
    - Creates the service worker configuration file called ngsw-config.json,
     which specifies the caching behaviors and other settings.

Build project
Run PWA supported angular app from dist folder
Following things will be cached
- index.html
- favicon.ico
- Build artifacts (JS and CSS bundles)
- Anything under assets
- Images and fonts directly under the configured outputPath
