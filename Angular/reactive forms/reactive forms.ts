Reactive forms

// import ReactiveFormsModule
@NgModule({
  imports: [
    // other imports ...
    ReactiveFormsModule
  ],
})

// Create Form Control
name = new FormControl('');

// Register the control in the template
<input id="name" type="text" [formControl]="name">

// Access value of control
html
{{name.value}}
ts
this.form.get('name').value;

// Set value in component
this.form.get('name').setValue('new value')


// Create form group
profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
});

// Bind in template
<form [formGroup]="profileForm">

  <label for="first-name">First Name: </label>
  <input id="first-name" type="text" formControlName="firstName">

  <label for="last-name">Last Name: </label>
  <input id="last-name" type="text" formControlName="lastName">

</form>

// Access value of form
html
profileForm.value

ts
this.profileForm.value

// Set values of multiple controls in component
this.profileForm.patchValue({
    firstName: 'new Fname',
    lastName: 'new Lname',
});

// Create form using FormBuilder service
profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
});

// Add validation while creating form
profileForm = this.fb.group({
  firstName: ['', Validators.required],
  lastName: [''],
});

// Show error messages
html
{{firstName.errors && firstName.errors['required]}}

// Custom Validators
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value, message: 'Forbidden Name'}} : null;
  };
}

// Add custom validation while creating form
profileForm = this.fb.group({
  firstName: ['', Validators.required],
  lastName: ['', forbiddenNameValidator],
});

// Show error messages for custon validator
html
{{lastName.errors && lastName.errors['forbiddenName].message}}
