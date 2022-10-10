// Router Guards
With Router Guards we can prevent users from accessing area that they’re not allowed to access,
 or, we can ask them for confirmation when leaving a certain area.
There are four different types of Router Guards
CanActivate- Checks to see if a user can visit a route.
CanActivateChild- Checks to see if a user can visit a routes children.
CanDeactivate- Checks to see if a user can exit a route.
CanLoad- Checks to see if a user can route to a module that lazy loaded.
Resolve- Performs route data retrieval before route activation.

1- CanActivate
- Write a guard as Service
    @Injectable()
    class AlwaysAuthGuard implements CanActivate {
      canActivate() {
        // Write auth code here
        return true;
      }
    }
- Provide this guard to consumer
  @NgModule({
    providers: [
      AlwaysAuthGuard
    ]
  })
- Use guard in route config
  {
    path: 'artist/:artistId',
    component: ArtistComponent,
    canActivate: [AlwaysAuthGuard],
  }

2- CanActivateChild
We can implement this guard in similar way i.e.
- Write a guard as Service
  @Injectable()
    class AlwaysAuthGuard implements CanActivateChild {
      canActivateChild() {
        // Write auth code here
        return true;
      }
    }
- Provide this guard to consumer
- Use guard in route config
  here is small difference
  {
    path: 'artist/:artistId',
    component: ArtistComponent,
    canActivateChild: [AlwaysAuthGuard],
  }

3- CanDeactivate
Usually used to warn people if they are navigating away from a page where they have some unsaved changes.
- Create method in component
  canDeactivate() {
    // Check if everything is settled and there is no changes are pending
    return true;
  }
- Create a CanDeactivate guard
  class UnsearchedTermGuard implements CanDeactivate<SearchComponent> {
    canDeactivate(component: SearchComponent,
                  route: ActivatedRouteSnapshot,
                  state: RouterStateSnapshot): boolean {
      return component.canDeactivate() || window.confirm("Are you sure?");
    }
  }

- Provide this guard to consumer
- Use guard in route config
  here is small difference
  {
    path: 'search',
    component: SearchComponent,
    canDeactivate: [UnsearchedTermGuard],
  }

4- CanLoad
We can implement this guard in similar way to CanActivate or CanActivateChild i.e.
- Write a guard as Service
  @Injectable()
  class AlwaysAuthGuard implements CanLoad {
    canLoad() {
      // Write auth code here
      return true;
    }
  }
- Provide this guard to consumer
- Use guard in route config
  {
    path: 'artist/:artistId',
    component: ArtistComponent,
    canLoad: [AlwaysAuthGuard],
  }

