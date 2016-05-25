import { Component } from '@angular/core';
import { HTTP_PROVIDERS} from '@angular/http';
import { Overlay } from '@angular2-material/core/overlay/overlay';

@Component({
  moduleId: module.id,
  selector: 'app',
  viewProviders: [HTTP_PROVIDERS, Overlay],
  template: `<div><h1>Started</h1></div>`,
  directives: []
})
export class App {}
