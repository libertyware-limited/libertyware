import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgSentryModule } from '@libertyware/angular/ng-sentry';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    NgSentryModule.forRoot({
      dsn: 'https://58ffce333b21422483b37bae9484f34a@sentry.io/1447726'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
