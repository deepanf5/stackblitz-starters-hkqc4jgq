import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { Header } from './app/components/shared/header/header';
import Aura from '@primeng/themes/aura';

@Component({
  selector: 'app-root',
  template: `
    <prime-header></prime-header>
  `,
  imports:[Header]
})
export class App {
  name = 'prime parts';
}

bootstrapApplication(App,{
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
          preset: Aura
      }
  })
]
});
