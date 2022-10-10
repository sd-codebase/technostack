Angular 14 Features
1. Standalone Components
  Now its a feasible option, and Angular modules will no longer be required
  A standalone component is not declared in any existing NgModule,
   and it directly manages its own dependencies.
  - Standalone component has the flag "standalone" we need to set the value true
  - Not Required to add the standalone component in ngModule
  - We can import the required modules in the component itself
  - To generate standalone component use flag --standalone, while generating component
  // Eg
  @Component({
    selector: 'app-standalonedemo',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './standalonedemo.component.html',
    styleUrls: ['./standalonedemo.component.css']
  })


2. Typed Forms
  This is only for reactive Forms
  For using this feature tsconig.js should be in strict mode
  Typed forms ensure that the values inside of form control, groups and array are type safe
  still we can use the untyped version of forms
  // Eg
  contactForm = new FormGroup({
    name: new FormControl < string > (''),
    email: new FormControl(''),
    message: new FormControl(''),
    number: new FormControl()
  });
  contactFormUntyped = new UntypedFormGroup({
    name: new UntypedFormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
    number: new FormControl()
  });

3. Streamlined page title strategy
  - Define routes by adding title property
    {path:'',component:HomeComponent, title : "Core Knowledge Sharing"}
  - Extend ngModule class with TitleStrategy 
    export class AppRoutingModule extends TitleStrategy {}
  - Write updateTitle() method in ngModule
    updateTitle(snapshot: RouterStateSnapshot): void {}
  - Build title from RouterStateSnapshot
    const pageTitle = this.buildTitle(snapshot);
  - Set document title
    document.title = "${pageTitle}"
  
  // Eg
    const routes: Routes = [
      {path:'',component:HomeComponent, title : "Core Knowledge Sharing"},
      { path: 'standalonedemo', component: StandalonedemoComponent, title : "Stand alone Component" },
      { path: 'contactus', component: ContactusComponent, title : "Contact Us" }
    ];

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule extends TitleStrategy {
      updateTitle(snapshot: RouterStateSnapshot): void {
        const pageTitle = this.buildTitle(snapshot);
        if(pageTitle != undefined){
          document.title = "${pageTitle}"
        }
      }
    }

4. Extended developer diagnostics
  If user make istake while typing ng commands, cli will suggest corrct command options
  eg. if user type ng sevre, then cli will suggest you correct command

5. Bind to protected component members
  We can bind protected memberd in template now
  // Eg
    @Component({
        selector: 'my-component',
        template: '{{ message }}',  // Now compiles!
    })
    export class MyComponent {
        protected message: string = 'Hello world';
    }

6. Optional Injectors in Embedded Views
  v14 adds support for passing in an optional injector when
   creating an embedded view through ViewContainerRef.createEmbeddedView and TemplateRef.createEmbeddedView.
  // Eg
  viewContainer.createEmbeddedView(templateRef, context, {
    injector: injector,
  });
  