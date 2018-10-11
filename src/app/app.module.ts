import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { CarduserComponent } from './carduser/carduser.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
const appRoutes: Routes = [
  { path: '',      component: HomeComponent },
  { path: ':username',      component: CarduserComponent }
  ];

@NgModule({
  declarations: [AppComponent, CarduserComponent, HomeComponent],
  imports: [BrowserModule,
  BrowserAnimationsModule, MatButtonModule, HttpClientModule, MatListModule, RouterModule.forRoot(appRoutes), MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
