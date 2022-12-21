Routing

// Define Routing Module
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// Define routes in routes array
const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
];

// Set wilcard or 404 route in routes array at end
{ path: '**', component: PageNotFoundComponent }

// Use path params in routes
{ path: 'users/:id', component: UserComponent }

// Set redirecting
{ path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`

// Set nested routes
{ path: 'first-component', component: FirstComponent, children: [...] }

// Add router outlet in view to render pages
<router-outlet></router-outlet>

// Add links to navigate pages from view
<a routerLink="/first-component" routerLinkActive="active">First Component</a> 
// routerLinkActive directive will add active class to link if current route is first-component


// Add router outlet in view to render nested views
// In our case add router-outlet in FirstComponent's view, so children of first-component will render there
<router-outlet></router-outlet>

// Navigate from  component using Router service
this.router.navigate(['first-component'])

// Access route information using ActivatedRoute service
// Access queryParams (name query)
this.activatedRoute.queryParams.subscribe(params => {
    this.name = params['name'];
});
//queryParams.subscribe() will give object

// Access Path Params (id path param)
this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
    this.id = +params.get('id')
});
//paramMap.subscribe() will give map



