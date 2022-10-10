Custom form controls
We can build our own custom form control that works with the Reactive Forms API.

1 - ControlValueAccessor - is an interface working as a mediator b/w a FormControl and the native element
  export class TextInputComponent implements ControlValueAccessor{ }
  
It has 4 methods to override in implementaation class
2- writeValue- this is the call for writing a value into a child form control
  writeValue(obj: string) {
    this.value = obj;
  }
3- registerOnChange- registerOnChange is a method to propagate native control value to form control value
  onChange = (string) => {};

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }
4- registerOnTouched -  child control can report its touched status back to the parent form via this method
  onTouched = (string) => {};

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }
5- setDisabledState - we must also notify the parent form when child control was set disabled
  disabled: boolean = false;
  SetDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

6- Dependency injection configuration in component's metadata
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => TextInputComponent)
  }]

//Eg
Template
<input type="text" [ngModel]="value" (ngModelChange)="onChange($event)"/>
Component 

@Component({
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> TextInputComponent),
      multi: true,
    }
  ],
})

export class TextInputComponent implements ControlValueAccessor{
  value: string;
  onChange: () => {};
  onTouched = (string) => {};

  writeValue(obj: string) {
    this.value = obj;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

}