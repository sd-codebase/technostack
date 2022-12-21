
1- Transpilation

2- Interpolation

3- Modules in angular

@NgModule({
  imports: [ /* import required modules */ ],
  declarations: [ /* import required components, directives, pipes */ ],
  providers: [ /* Services */],
  bootstrap: [ /* component to bootstrap */ ],
  exports: [/* Exported members */]
})
export class AppModule { }


4- Property Binding

html
<img alt="item" [src]="itemImageUrl"/>

ts
itemImageUrl = '../assets/phone.png';

5- Attribute Binding

html
<td [attr.colspan]="1 + 1">One-Two</td>

6- Event binding syntax

html
<button (click)="onSave()">Save</button>
<my-button (handleClick)="onClick($event)">Save</button>

7- View encapsulation

ts
@Component({
  ...
  encapsulation: ViewEncapsulation.None, // ViewEncapsulation.ShadowDom, ViewEncapsulation.Emulated
})

8- Content Projection

ts
@Component({
  selector: 'app-demo',
  template: `
    <h2>Content projection</h2>
    <ng-content></ng-content>
  `
})

html
<app-demo>
  <p>Projected in app demo</p>
</app-demo>

9- Multicontent Projection

ts
@Component({
  selector: 'app-demo',
  template: `
    <h2>Content projection</h2>
    <ng-content select="[question]"></ng-content>
    <ng-content select="h1"></ng-content>
    <ng-content select=".text"></ng-content>
  `
})

html
<app-demo>
  <p question>How are you?</p>
  <h1>Heading 1</h1>
  <p class="text">Projected text in app demo</p>
</app-demo>

10- Component

ts
@Component({
  selector: ...,
  templateUrl: ...,
  styleUrls: [...],
  encapsulation: ...,
  providers: [...]
})
export class Component{}

11- Component lifecycle

ts
@Component({
  selector: ...,
  templateUrl: ...,
  styleUrls: [...],
})
export class Component { // implements interface of required lifecycle method
  constructor(){}
  ngOnChanges(){}
  ngOnInit(){}
  ngDoCheck(){}
  ngAfterContentInit(){}
  ngAfterContentChecked(){}
  ngAfterViewInit(){}
  ngAfterViewChecked(){}
  ngOnDestroy(){}
}

12- Directive

html
<div [ngClass]="isSpecial ? 'special' : ''">NgClass directive used</div>
<div [ngStyle]="currentStyles"> NgStyle directive used </div>
<input [(ngModel)]="currentItem.name" id="example-ngModel">
<app-item-detail *ngIf="isActive" [item]="item"></app-item-detail>
<div *ngIf="currentCustomer">Hello, {{currentCustomer.name}}</div>

13- Custom Attribute Directive

ts
@Directive({
  selector: '[appHighlighter]',
})
export class AppHighlighter {
  constructor(private elemRef: ElementRef){}
}

1- selector: '[appHighlighter]' // creates attribute directive
2- selector: '.appHighlighter' // creates class directive

14- HostBinding and HostListner

ts
@Directive({selector: '[colorChanger]'})
export class ColorChangerDirective {
    @HostBinding('style.color') color = 'red';
    @HostListener('click') onClick() {
        this.role = 'blue';
    }
}

html
<p colorChanger></p>

15- Pipes

html
<p>{{'my name' | uppercase}}

// built-in Pipes
DatePipe
UpperCasePipe
LowerCasePipe
CurrencyPipe
DecimalPipe
PercentPipe

<p>The birthday is {{ birthday | date:"MM/dd/yy":"Asia/Kolkata" }} </p> // Using multiargument pipe
<p>{{ birthday | date | uppercase}}</p> // Using multiple pipes


16- Async Pipes

html
<p>Message: {{ message$ | async }}</p>

17- Pure vs Impure Pipes

html
<p>{{user | age}}

ts
@Pipe({name: 'age'})
export class UserAge implements PipeTransfer {
  transform(user) {
    return user.age;
  }
}

// Impure pipe
@Pipe({name: 'age', pure: false})


18- Dependancy Injection

// Create dependency 
@Injectable()
class HeroService {}

//Provide dependency
@Component({
  ...
  providers: [HeroService]
})

@NgModule({
  ...
  providers: [HeroService]
})

@Injectable({providedIn: 'root'})

// Injecting a dependency
@Component({ … })
class HeroListComponent {
  constructor(private service: HeroService) {}
}

19- AOT vs JIT


20- Change detection


