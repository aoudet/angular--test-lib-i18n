import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [ WeatherComponent ],
  imports: [    
    MatCommonModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [ WeatherComponent ],
})
export class I18nTestModule {}
