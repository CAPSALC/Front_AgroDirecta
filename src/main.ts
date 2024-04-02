import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import bootstrap from './main.server';

// IMPORTAR bootstrap

// import * as $ from 'jquery';

import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import '../node_modules/@popperjs/core/dist/umd/popper.min.js'


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
