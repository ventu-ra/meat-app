import {
  enableProdMode,
  ErrorHandler,
  importProvidersFrom,
} from "@angular/core";
import { environment } from "./environments/environment";

import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { ApplicationErrorHandler } from "./app/app.error-handler";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { SharedModule } from "./app/shared/shared.module";
import {
  withPreloading,
  provideRouter,
  PreloadAllModules,
} from "@angular/router";
import { ROUTES } from "./app/app.routes";
import { AppComponent } from "./app/app.component";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, SharedModule.forRoot()),
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    // { provide: LOCALE_ID, useValue: "pt-BR" },
    { provide: ErrorHandler, useClass: ApplicationErrorHandler },
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    provideRouter(ROUTES, withPreloading(PreloadAllModules)),
  ],
});
