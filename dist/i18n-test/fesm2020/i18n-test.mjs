import '@angular/localize/init';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i2 from '@angular/forms';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import * as i1 from '@angular/material/button-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i3 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i4 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import { MatCommonModule } from '@angular/material/core';

var WeatherEnum;
(function (WeatherEnum) {
    WeatherEnum[WeatherEnum["none"] = 0] = "none";
    WeatherEnum[WeatherEnum["sun"] = 1] = "sun";
    WeatherEnum[WeatherEnum["cloud"] = 2] = "cloud";
    WeatherEnum[WeatherEnum["rain"] = 4] = "rain";
    WeatherEnum[WeatherEnum["snow"] = 8] = "snow";
    WeatherEnum[WeatherEnum["variable"] = 16] = "variable";
})(WeatherEnum || (WeatherEnum = {}));

class WeatherComponent {
    constructor() {
        this.multiple = false;
        this.weather = {
            temperature: undefined,
            type: [WeatherEnum.none],
        };
        this.changed = new EventEmitter();
        this.weatherEnum = WeatherEnum;
        this.temp = new FormControl(undefined);
    }
    ngOnInit() {
        this.temp.setValue(this.weather.temperature);
        this.temp.valueChanges.pipe(debounceTime(50)).subscribe((data) => {
            this.weather.temperature = data || undefined;
            this.changed.emit(this.weather);
        });
    }
    onWeatherChange(event) {
        console.log('onWeatherChange', event.value);
        this.weather.type = event.value;
        this.changed.emit(this.weather);
    }
}
WeatherComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: WeatherComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
WeatherComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.2", type: WeatherComponent, selector: "lib-weather", inputs: { multiple: "multiple", weather: "weather" }, outputs: { changed: "changed" }, ngImport: i0, template: "<p>weather works!</p>\n<div class=\"row\">\n  <mat-form-field class=\"temperatureLabel\">\n    <mat-label i18n=\"@@Resx.WeatherExtension.Temperature\"\n      >Resx.WeatherExtension.Temperature</mat-label\n    >\n    <input matInput type=\"number\" [formControl]=\"temp\" />\n    <span matSuffix i18n=\"@@Resx.WeatherExtension.Celcius\"\n      >Resx.WeatherExtension.Celcius</span\n    >\n  </mat-form-field>\n\n  <div>\n    <mat-button-toggle-group\n      #group=\"matButtonToggleGroup\"\n      [value]=\"weather.type\"\n      [multiple]=\"multiple\"\n      (change)=\"onWeatherChange($event)\"\n    >\n      <mat-button-toggle [value]=\"weatherEnum.sun\">\n        <img src=\"./assets/extensions/Sun.png\" alt=\"sun\" title=\"sun\" />\n      </mat-button-toggle>\n      <mat-button-toggle [value]=\"weatherEnum.cloud\">\n        <img src=\"./assets/extensions/Cloud.png\" alt=\"cloud\" title=\"cloud\" />\n      </mat-button-toggle>\n      <mat-button-toggle [value]=\"weatherEnum.rain\">\n        <img src=\"./assets/extensions/Rain.png\" alt=\"rain\" title=\"rain\" />\n      </mat-button-toggle>\n      <mat-button-toggle [value]=\"weatherEnum.snow\">\n        <img src=\"./assets/extensions/Snow.png\" alt=\"snow\" title=\"snow\" />\n      </mat-button-toggle>\n    </mat-button-toggle-group>\n  </div>\n</div>\n<p>temperature : {{ weather.temperature }}</p>\n<p>type of : {{ weatherEnum[weather.type[0]] }}</p>\n<p>type of : {{ weatherEnum[weather.type[1]] }}</p>\n<p>type of : {{ weatherEnum[weather.type[2]] }}</p>\n<p>type of : {{ weatherEnum[weather.type[3]] }}</p>\n", styles: [".row{display:flex;flex-flow:row nowrap}.temperatureLabel{min-width:10%;text-align:right;max-width:20%;margin-right:5px}img{width:40px;height:40px}\n"], dependencies: [{ kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatSuffix, selector: "[matSuffix]" }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: WeatherComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-weather', template: "<p>weather works!</p>\n<div class=\"row\">\n  <mat-form-field class=\"temperatureLabel\">\n    <mat-label i18n=\"@@Resx.WeatherExtension.Temperature\"\n      >Resx.WeatherExtension.Temperature</mat-label\n    >\n    <input matInput type=\"number\" [formControl]=\"temp\" />\n    <span matSuffix i18n=\"@@Resx.WeatherExtension.Celcius\"\n      >Resx.WeatherExtension.Celcius</span\n    >\n  </mat-form-field>\n\n  <div>\n    <mat-button-toggle-group\n      #group=\"matButtonToggleGroup\"\n      [value]=\"weather.type\"\n      [multiple]=\"multiple\"\n      (change)=\"onWeatherChange($event)\"\n    >\n      <mat-button-toggle [value]=\"weatherEnum.sun\">\n        <img src=\"./assets/extensions/Sun.png\" alt=\"sun\" title=\"sun\" />\n      </mat-button-toggle>\n      <mat-button-toggle [value]=\"weatherEnum.cloud\">\n        <img src=\"./assets/extensions/Cloud.png\" alt=\"cloud\" title=\"cloud\" />\n      </mat-button-toggle>\n      <mat-button-toggle [value]=\"weatherEnum.rain\">\n        <img src=\"./assets/extensions/Rain.png\" alt=\"rain\" title=\"rain\" />\n      </mat-button-toggle>\n      <mat-button-toggle [value]=\"weatherEnum.snow\">\n        <img src=\"./assets/extensions/Snow.png\" alt=\"snow\" title=\"snow\" />\n      </mat-button-toggle>\n    </mat-button-toggle-group>\n  </div>\n</div>\n<p>temperature : {{ weather.temperature }}</p>\n<p>type of : {{ weatherEnum[weather.type[0]] }}</p>\n<p>type of : {{ weatherEnum[weather.type[1]] }}</p>\n<p>type of : {{ weatherEnum[weather.type[2]] }}</p>\n<p>type of : {{ weatherEnum[weather.type[3]] }}</p>\n", styles: [".row{display:flex;flex-flow:row nowrap}.temperatureLabel{min-width:10%;text-align:right;max-width:20%;margin-right:5px}img{width:40px;height:40px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { multiple: [{
                type: Input
            }], weather: [{
                type: Input
            }], changed: [{
                type: Output
            }] } });

class I18nTestModule {
}
I18nTestModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: I18nTestModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
I18nTestModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.2", ngImport: i0, type: I18nTestModule, declarations: [WeatherComponent], imports: [MatCommonModule,
        MatButtonToggleModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule], exports: [WeatherComponent] });
I18nTestModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: I18nTestModule, imports: [MatCommonModule,
        MatButtonToggleModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: I18nTestModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [WeatherComponent],
                    imports: [
                        MatCommonModule,
                        MatButtonToggleModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatInputModule,
                    ],
                    exports: [WeatherComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { I18nTestModule, WeatherComponent, WeatherEnum };
//# sourceMappingURL=i18n-test.mjs.map
