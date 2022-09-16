import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { I18nTestComponent } from './i18n-test.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [I18nTestComponent, WeatherComponent],
  imports: [
    
    MatCommonModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [I18nTestComponent, WeatherComponent],
})
export class I18nTestModule {}
