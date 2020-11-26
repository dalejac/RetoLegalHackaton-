import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  showErrorMessage = false;

  constructor(private router: Router,
              private fb: FormBuilder,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    const { email, password } = this.form.value;
    console.log(email, password);
    this.authService
        .login(email, password)
        .subscribe(result => {
          if (result) {
            this.router.navigate(['dashboard']);
          } else {
            this.showErrorMessage = true;
          }
    });
  }
}
