import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-contact-details-form',
  templateUrl: './contact-details-form.component.html',
  styleUrls: ['./contact-details-form.component.scss']
})
export class ContactDetailsFormComponent implements OnInit {

  contactDetailsForm!:FormGroup;
  sender!:FormControl;
  receiver!:FormControl;
  message!:FormControl;
  title!:FormControl;


  @Input() myStepper!: MatStepper;
  @Output() formSubmit = new EventEmitter();

  constructor(private fomrBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.sender = new FormControl('',[Validators.required,Validators.email]);
    this.receiver = new FormControl('',[Validators.required,Validators.email]);
    this.title = new FormControl('');
    this.message = new FormControl('');

    this.contactDetailsForm = this.fomrBuilder.group({
      sender: this.sender,
      receiver: this.receiver,
      title: this.title,
      message: this.message
    })
  }

  onSubmit(){
    console.log(this.contactDetailsForm.value)
    this.formSubmit.emit(this.contactDetailsForm.value);
    this.myStepper.next();
  }

}
