Animation in angular
Animation provides the illusion of motion: HTML elements change styling over time.
Animations can improve your application and user experience.
Angular's animation system is built on CSS functionality.
It means we can animate any property that the browser considers animatable.
animatable means that propertie's value can be changes after given time.

1 - Enable the animations module
// BrowserAnimationsModule from '@angular/platform-browser/animations'
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ]

2 - Import animation functions into component from '@angular/animations'
  import { trigger, state, style, animate, transition, ...} from '@angular/animations';

3 - Add the animation metadata property
  @Component({
    ...
    animations: [
      // animation triggers go here
    ]
  })

4 - Add triggers in animations array
  trigger('triggerName', [
    // trigger code goes here
  ]),

5 - Add these animation triggers to elements
  <div [@triggerName]="expression"></div>;

6 - Write code for each triggers i.e. what will be the different states in that trigger
  state('open', style({ // when going in open state
    height: '200px',
    opacity: 1,
    backgroundColor: 'yellow'
  })),
  state('closed', style({ // when going in close state
    height: '100px',
    opacity: 0.8,
    backgroundColor: 'blue'
  })),
  transition('open => closed', [ // while going from open to close
    animate('1s')
  ]),
  transition('closed => open', [ // while going from close to open
    animate('0.5s')
  ]),