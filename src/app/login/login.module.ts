import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
  ],
  declarations: [
    CommonModule,
    BrowserModule,
    LoginComponent
  ],
  exports: [CommonModule, LoginComponent],
  entryComponents: [LoginComponent],
})
export class LoginModule { }
