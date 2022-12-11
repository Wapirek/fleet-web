import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Route[] = [
  { path: '', component: SignInComponent },
  { path: 'wylogowanie', component: SignOutComponent }
];

@NgModule({
  declarations: [
    SignInComponent,
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
