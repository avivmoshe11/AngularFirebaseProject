import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: ` <app-page-header
    title="page not found"
    icon="bi bi-exclamation-lg"
    description="the page you are looking for is not found - Error 404"
  ></app-page-header>`,
  styles: [],
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
