import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatStepper } from '@angular/material/stepper';
import { map, Observable, startWith, tap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

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

  regexMail = new RegExp("^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])$")
  sender = new FormControl('', [Validators.required, Validators.pattern(this.regexMail)]);
  receiver = new FormControl('', [Validators.required, Validators.pattern(this.regexMail)]);

  senderFilteredOptions!: Observable<any[]>;
  senderOptions!: any[];

  receiverFilteredOptions!: Observable<any[]>;
  receiverOptions!: any[];

  contactDetailsForm!: FormGroup;

  @Input() myStepper!: MatStepper;
  @Output() formSubmit = new EventEmitter();
  @Output() state = new EventEmitter();

  matcher = new ErrorStateMatcher();

  constructor(
    private fomrBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.contactDetailsForm = this.fomrBuilder.group({
      sender: this.sender,
      receiver: this.receiver,
      title: ['File Transfert Test', [Validators.required]],
      message: ['Message']
    })
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.senderOptions = data;
      this.receiverOptions = data;

      this.senderFilteredOptions = this.sender.valueChanges.pipe(
        startWith(''),
        map(value => this._filter_sender(value || '')),
      );

      this.receiverFilteredOptions = this.receiver.valueChanges.pipe(
        tap(console.log),
        startWith(''),
        map(value => this._filter_receiver(value || '')),
      );
    })
  }

  private _filter_sender(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.senderOptions.filter(option => option.username.toLowerCase().includes(filterValue));
  }

  private _filter_receiver(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.receiverOptions.filter(option => option.username.toLowerCase().includes(filterValue));
  }



  onSubmit() {
    if (this.contactDetailsForm.invalid) {
      this.contactDetailsForm.markAllAsTouched();

    } else {
      console.log(this.contactDetailsForm.value)
      this.formSubmit.emit(this.contactDetailsForm.value);
      this.myStepper.next();
    }
  }


}
