import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatButtonModule } from "@angular/material/button"
import {  MatIconModule } from "@angular/material/icon";
import {  MatDividerModule } from "@angular/material/divider";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import {CdkTableModule} from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { DialogDeleteComponent } from './directive/dialog-delete/dialog-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogDeleteComponent,


  ],
  imports: [
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
