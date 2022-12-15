import { Component } from '@angular/core';
import { StructureBuilderArray } from 'src/app/auth/sign/sign-up/_arrays/structure-builder.array';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormBuilderHelper } from 'src/app/auth/sign/sign-up/_helpers/form-builder.helper';
import { AuthService } from 'src/app/auth/_services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  templateUrl: '../_template/template.component.html',
  styleUrls: ['../_template/template.component.scss']
})
export class SignUpComponent {
  structureBuilderArray = StructureBuilderArray;
  cmpForm: FormGroup = FormBuilderHelper(this.formBuilder);

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {}

  // todo register
  save(): void {

    // @ts-ignore
    console.log(this.cmpForm.controls?.errors?.notSame);

    if (!this.cmpForm.valid) { return; }
  }
}
