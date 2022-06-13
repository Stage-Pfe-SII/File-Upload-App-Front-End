import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';


export class ErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  matcher = new ErrorStateMatcher();
  error!: string;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.f.setValue({ username: 'mohammedaminerabhi17@gmail.com', password: 'password' });
  }

  submit() {
    console.log('clicked', this.f.valid);
    if (this.f.valid) {
      this.error = '';
      console.log(this.f.value)
    } else {
      this.error = 'username or password is invalid';
    }
  }

  get f() {
    return this.loginForm;
  }

  get username() {
    return this.f.get('username');
  }

  get password() {
    return this.f.get('password');
  }

}
