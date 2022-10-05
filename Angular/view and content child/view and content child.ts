Template Queries

1- @ViewChild() and @ViewChildren

ts
@ViewChild(JokeComponent) jokeViewChild: JokeComponent;
@ViewChildren(TaskComponent) taskViewChildren: QueryList<TaskComponent>;
@ViewChild("header") headerEl: ElementRef;

ngAfterViewInit() {
    console.log(this.jokeViewChild, this.taskViewChildren, this.headerEl) // this will log jokeViewChild element, taskViewChildren elements and headerEl element
}

html
<joke [joke]="joke"></joke>
<task [task]="task1"></task>
<task [task]="task2"></task>
<h4 #header>View Data</h4>


2- @ContentChild() and @ContentChildren

Hostcomponent.html
<app-demo>
    <joke [joke]="joke"></joke>
    <task [task]="task1"></task>
    <task [task]="task2"></task>
    <h4 #header>View Data</h4>
</app-demo>

Demo.html
<ng-content></ng-content>

Demo.ts
@ContentChild(JokeComponent) jokeContentChild: JokeComponent;
@ContentChildren(TaskComponent) taskContentChildren: QueryList<TaskComponent>;
@ContentChild("header") headerEl: ElementRef;

ngAfterContentInit() {
    console.log(this.jokeContentChild, this.taskContentChildren, this.headerEl) // this will log jokeContentChild element, taskContentChildren elements and headerEl element
}