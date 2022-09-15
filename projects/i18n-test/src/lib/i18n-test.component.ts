import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-i18n-test',
  template: `
    <h3>{{test}}</h3>
    <p>i18n-test works!</p>
    <span i18n="@@5206857922697139278">5206857922697139278</span>
  `,
  styles: [],
})
export class I18nTestComponent implements OnInit {
  test: string = '';
  constructor() {
    // this.test = $localize`@@5206857922697139278:test007`;
  }

  ngOnInit(): void {}
}
