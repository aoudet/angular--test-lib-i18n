import { Component } from '@angular/core';
import { IWeather, WeatherEnum } from 'i18n-test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  logo = 'https://angular.io/assets/images/logos/angular/angular.png';
  

  // test with library exported elements
  weather: IWeather = {
    temperature: 22,
    type: [WeatherEnum.cloud],
  };
  onWeatherChange(event: IWeather) {
    console.log('onWeatherChange', event);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
