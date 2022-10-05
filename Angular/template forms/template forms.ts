Template driven forms
1- Create form

// Import FormsModule in NgModule
@NgModule({
  imports: [
    ...
    FormsModule
  ],
})

// Define model in Component
class MyComponent {
    model = {fname:'John', lname: 'Deo'};

    onSubmit() {
        console.log(this.model);
    }
}

// Bind data to forms in template
<form (ngSubmit)="onSubmit()" #myForm="ngForm">
    <input type="text" class="form-control" id="fname" required [(ngModel)]="model.fname" name="fname" placeholder="First Name" #fname="ngModel">
    <div [hidden]="fname.valid || fname.pristine" class="alert alert-danger"> First Name is required </div>

    <input type="text" class="form-control" id="lname" required [(ngModel)]="model.lname" name="lname" placeholder="Last Name" #lname="ngModel">
    <div [hidden]="lname.valid || lname.pristine" class="alert alert-danger"> Last Name is required </div>

    <button type="submit" class="btn btn-success" [disabled]="!myForm.form.valid">Submit</button>
</form>

