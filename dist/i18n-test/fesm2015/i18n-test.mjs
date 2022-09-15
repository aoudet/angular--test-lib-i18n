import '@angular/localize/init';
import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';

class I18nTestService {
    constructor() { }
}
I18nTestService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: I18nTestService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
I18nTestService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: I18nTestService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: I18nTestService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class I18nTestComponent {
    constructor() {
        this.test = '';
        // this.test = $localize`@@5206857922697139278:test007`;
    }
    ngOnInit() { }
}
I18nTestComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: I18nTestComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
I18nTestComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.2", type: I18nTestComponent, selector: "lib-i18n-test", ngImport: i0, template: `
    <h3>{{test}}</h3>
    <p>i18n-test works!</p>
    <span i18n="@@5206857922697139278">5206857922697139278</span>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: I18nTestComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-i18n-test', template: `
    <h3>{{test}}</h3>
    <p>i18n-test works!</p>
    <span i18n="@@5206857922697139278">5206857922697139278</span>
  ` }]
        }], ctorParameters: function () { return []; } });

// import { WeatherComponent } from './weather/weather.component';
class I18nTestModule {
}
I18nTestModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: I18nTestModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
I18nTestModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.2", ngImport: i0, type: I18nTestModule, declarations: [I18nTestComponent], imports: [MatCommonModule], exports: [I18nTestComponent] });
I18nTestModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: I18nTestModule, imports: [MatCommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: I18nTestModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [I18nTestComponent],
                    imports: [
                        MatCommonModule,
                        // MatButtonToggleModule
                    ],
                    exports: [I18nTestComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { I18nTestComponent, I18nTestModule, I18nTestService };
//# sourceMappingURL=i18n-test.mjs.map
