import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatStepper } from '@angular/material/stepper';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contact-details-form',
  templateUrl: './contact-details-form.component.html',
  styleUrls: ['./contact-details-form.component.scss'],
  exportAs: 'contactForm'
})
export class ContactDetailsFormComponent implements OnInit {

  contactDetailsForm!:FormGroup;


  @Input() myStepper!: MatStepper;
  @Output() formSubmit = new EventEmitter();
  @Output() state = new EventEmitter();


  matcher = new ErrorStateMatcher();

  constructor(private fomrBuilder:FormBuilder) {
    this.contactDetailsForm = this.fomrBuilder.group({
      sender: ['',[Validators.required,Validators.email]],
      receiver: ['',[Validators.required,Validators.email]],
      title: ['',[Validators.required]],
      message: ''
    })
   }

  ngOnInit(): void {
    // this.contactDetailsForm.statusChanges.pipe(
    //   distinctUntilChanged(),
    //   tap(console.log)
    //  ).subscribe()
  }

  onSubmit(){
    if(this.contactDetailsForm.invalid){
      this.contactDetailsForm.markAllAsTouched();
      
    }else{
      this.formSubmit.emit(this.contactDetailsForm.value);
      this.myStepper.next();
    }
  }

}
