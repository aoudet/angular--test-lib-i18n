// import { CommonModule } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCommonModule } from '@angular/material/core';
// import { MatCommonModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { I18nTestModule } from 'i18n-test';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCommonModule,
    MatButtonToggleModule,

    I18nTestModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
