import { enableProdMode, importProvidersFrom } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
// import { AnalyticsService } from './app/shared/analytics.service';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    // AnalyticsService
    importProvidersFrom(AppRoutingModule),
  ],
});
