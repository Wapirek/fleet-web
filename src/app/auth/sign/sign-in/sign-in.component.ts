import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/_services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilderHelper } from 'src/app/auth/sign/sign-in/_helpers/form-builder.helper';
import { StructureBuilderArray } from 'src/app/auth/sign/sign-in/_arrays/structure-builder.array';

@Component({
  selector: 'app-sign',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  structureBuilderArray = StructureBuilderArray;
  cmpForm: FormGroup = FormBuilderHelper(this.formBuilder);

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {}

  login(): void {

    if (!this.cmpForm.valid) { return; }

    this.authService.signIn(
      this.cmpForm.get('username')?.value,
      this.cmpForm.get('password')?.value,
    ).subscribe(
      (msg: string) => this.router.navigate([''])
        .then(() => this.snackBar.open(msg)),
      (err: HttpErrorResponse) => this.snackBar.open(err.error.message)
    )
  }
}
