import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, HttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CustomTranslateLoader } from '../assets/i18n/custom-translate.loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideRouter(routes),
    provideHttpClient(),
    provideHttpClient(withFetch()),  // enable fetch
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) => new CustomTranslateLoader(http),
          deps: [HttpClient]
        },
        fallbackLang: 'en'
      })
    )
  ]
};
