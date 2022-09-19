import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { debounceTime } from 'rxjs/operators';

import { WeatherEnum } from './enums/weather-enum';

export interface IWeather {
  temperature: number | undefined;
  type: WeatherEnum[];
}

@Component({
  selector: 'lib-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  @Input() multiple: boolean = false;
  @Input() weather: IWeather = {
    temperature: undefined,
    type: [WeatherEnum.none],
  };
  @Output() changed = new EventEmitter<IWeather>();

  temp: FormControl;
  weatherEnum = WeatherEnum;

  tt: string = '';

  constructor() {
    // here is a test with a call to $localize global function, needed to build custom error or
    // params errors...
    this.tt = $localize`:@@Resx.WeatherExtension.Celcius:@@Resx.WeatherExtension.Celcius`;

    this.temp = new FormControl<number | undefined>(undefined);
  }

  ngOnInit(): void {
    this.temp.setValue(this.weather.temperature);
    this.temp.valueChanges.pipe(debounceTime(50)).subscribe((data) => {
      this.weather.temperature = data || undefined;
      this.changed.emit(this.weather);
    });
  }

  onWeatherChange(event: MatButtonToggleChange) {
    // console.log('onWeatherChange', event.value);
    this.weather.type = event.value;
    this.changed.emit(this.weather);
  }
}
