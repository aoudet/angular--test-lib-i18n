import { Component } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { IWeather, WeatherEnum } from 'i18n-test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  minutes = 0;
  gender = 'female';
  fly = true;
  logo = 'https://angular.io/assets/images/logos/angular/angular.png';
  inc(i: number) {
    this.minutes = Math.min(5, Math.max(0, this.minutes + i));
  }
  male() {
    this.gender = 'male';
  }
  female() {
    this.gender = 'female';
  }
  other() {
    this.gender = 'other';
  }

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
