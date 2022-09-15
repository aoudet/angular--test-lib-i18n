import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
//import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { I18nTestComponent } from './i18n-test.component';
// import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [I18nTestComponent],
  imports: [
    MatCommonModule,
    // MatButtonToggleModule
  ],
  exports: [I18nTestComponent],
})
export class I18nTestModule {}
