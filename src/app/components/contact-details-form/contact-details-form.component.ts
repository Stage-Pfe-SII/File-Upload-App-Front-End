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
  regexMail = new RegExp("^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])$")


  matcher = new ErrorStateMatcher();

  constructor(private fomrBuilder:FormBuilder) {
    this.contactDetailsForm = this.fomrBuilder.group({
      sender: ['y@n.com',[Validators.required,Validators.email, Validators.pattern(this.regexMail)]],
      receiver: ['y@n.com',[Validators.required,Validators.email, Validators.pattern(this.regexMail)]],
      title: ['dada',[Validators.required]],
      message: ['']
    })
    
   }

  ngOnInit(): void {
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
