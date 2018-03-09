import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AngularFireAuth } from 'angularfire2/auth';
@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [LoginComponent,LoginFormComponent],
  exports:[LoginComponent,LoginFormComponent],
  providers:[AngularFireAuth]
})
export class LoginModule { }
