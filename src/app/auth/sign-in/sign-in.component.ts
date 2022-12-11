import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/_services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  mainForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {}

  ngOnInit(): void {

    this.mainForm = this.formBuilder.group({
      username: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(255),
        ])
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(255),
        ])
      ],
    })
  }

  login(): void {

    if (!this.mainForm.valid) { return; }

    this.authService.signIn(
      this.mainForm.get('username')?.value,
      this.mainForm.get('password')?.value,
    ).subscribe(
      (msg: string) => this.router.navigate([''])
        .then(() => this.snackBar.open(msg)),
      (err: HttpErrorResponse) => this.snackBar.open(err.error.message)
    )
  }
}
