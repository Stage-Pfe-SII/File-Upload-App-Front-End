import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserService } from 'src/app/services/user.service';
import { userUserNameValidator } from './async.validator';




export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  registrationForm!:FormGroup;
  regexMail = new RegExp("^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])$")
  matcher = new ErrorStateMatcher();
  hidePassword = true;
  hidePasswordConfirmation = true;

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('password_confirmation')?.value
       ? null : {'mismatch': true};
 }

  constructor(private formBuilder:FormBuilder,private userService:UserService) {
    this.registrationForm = this.formBuilder.group({
      username: ['mohammedaminerabhi@gmail.com',{
        validators: [Validators.required,Validators.email, Validators.pattern(this.regexMail)],
        asyncValidators : [userUserNameValidator(userService)],
        updateOn: 'blur'
      }],
      email: ['mohammedaminerabhi@gmail.com',[Validators.required,Validators.email, Validators.pattern(this.regexMail)]],
      password: ['password',[Validators.required]],
      password_confirmation: ['password',[Validators.required]],
    },{
      validators: this.passwordMatchValidator,

    })
   }

  ngOnInit(): void {
  }

  onSubmit(){

    const user = {
      username : this.registrationForm.value.username,
      email : this.registrationForm.value.email,
      password : this.registrationForm.value.password,
    }

    this.userService.createUser(user).subscribe(
      user => console.log(user),
    )

  }
}
