import { numOfCartItemsReducer } from './store/numOfCartItems.reducer';
import { provideServiceWorker } from '@angular/service-worker';
import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BASE_URL } from '../../projects/auth/src/lib/base-url.token';
import { provideStore } from '@ngrx/store';
import { tokenReducer } from './store/token.reducer';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    { provide: BASE_URL, useValue: 'https://flower.elevateegy.com/api/v1/' },
    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    }), provideStore({
      userToken : tokenReducer ,
      numOfCartItems:numOfCartItemsReducer
    })]
};
