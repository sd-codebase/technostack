Interceptor

// Create interceptor service by implementing HttpInterceptor
export class InterceptorService implements HttpInterceptor {}

// Implement intercept method which takes 2 arguments i.e. request and next
// intercept method return next.handle() method by passing modified request
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // modify request here
    return next.handle(req);
}

// modify request before passing request to next interceptor
this.token = this.storageService.getUserToken();
if (this.token) {
    const tokenizedReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + this.token) }); // Clone request and bearer token for authentication
    return next.handle(tokenizedReq);
} 
return next.handle(req);

// we need to add the interceptor as an Angular Provider in the root module's providers array
providers: [
 {
  provide: HTTP_INTERCEPTORS,
  useClass: InterceptorService,
  multi: true
 }
]

// Adding multiple interceptors
providers: [
  {
    provide: HTTP_INTERCEPTORS, useClass: InterceptorService1, multi: true
  },
  {
    provide: HTTP_INTERCEPTORS, useClass: InterceptorService1, multi:true
  }
],
