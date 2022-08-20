import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { UserService } from './user.service';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BmloginComponent } from './bmlogin/bmlogin.component';
import { Header1Component } from './header1/header1.component';
import { Footer1Component } from './footer1/footer1.component';


import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApplyComponent } from './apply/apply.component';
import { StatusComponent } from './status/status.component';
import { StudentService } from './student.service';
@NgModule({
  declarations: [
    AppComponent,
    MainhomeComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    ForgetpasswordComponent,
    StudentloginComponent,
    AdminloginComponent,
    BmloginComponent,
    Header1Component,
    Footer1Component,
    HomeComponent,
    ApplyComponent,
    StatusComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
   
   
  ],
 
  providers: [ UserService,StudentService,HttpClient,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
