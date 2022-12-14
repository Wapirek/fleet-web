import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SignInComponent } from 'src/app/auth/sign/sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignComponent } from 'src/app/auth/sign/sign.component';
import { SignUpComponent } from 'src/app/auth/sign/sign-up/sign-up.component';


const routes: Route[] = [
  {
    path: '',
    component: SignComponent,
    children: [
      { path: '', component: SignInComponent },
      { path: 'rejestracja', component: SignUpComponent },
    ]
  },
  { path: 'wylogowanie', component: SignOutComponent }
];

@NgModule({
  declarations: [
    SignComponent,
    SignInComponent,
    SignUpComponent,
    SignOutComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatSnackBarModule,
    SharedModule
  ]
})
export class AuthModule {}
