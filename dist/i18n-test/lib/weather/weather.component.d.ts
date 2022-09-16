import { EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { WeatherEnum } from './enums/weather-enum';
import * as i0 from "@angular/core";
export interface IWeather {
    temperature: number | undefined;
    type: WeatherEnum[];
}
export declare class WeatherComponent implements OnInit {
    multiple: boolean;
    weather: IWeather;
    changed: EventEmitter<IWeather>;
    temp: FormControl;
    weatherEnum: typeof WeatherEnum;
    tt: string;
    constructor();
    ngOnInit(): void;
    onWeatherChange(event: MatButtonToggleChange): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WeatherComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WeatherComponent, "lib-weather", never, { "multiple": "multiple"; "weather": "weather"; }, { "changed": "changed"; }, never, never, false>;
}
