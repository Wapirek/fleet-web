import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Route[] = [
  { path: 'logowanie', component: SignInComponent },
  { path: 'wylogowanie', component: SignOutComponent }
];

@NgModule({
  declarations: [
    SignInComponent,
    SignOutComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class AuthModule {}
