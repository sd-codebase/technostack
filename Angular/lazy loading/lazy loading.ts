Lazy loading

// Configure lazily loded modules, instead of components we use loadChildren here to load specific module lazily
const routes: Routes = [
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
  }
];

// In the lazy-loaded module's routing module,
// add a route for the component in router module of featuremodule.
const routes: Routes = [
  {
    path: '',
    component: ItemsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

// Import these above configered routes in ItemsModule
@NgModule({
  imports: [
    ...
    ItemsRoutingModule
  ],
  declarations: [ItemComponent]
})