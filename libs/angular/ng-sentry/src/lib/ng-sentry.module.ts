import { NgModule, ModuleWithProviders, ErrorHandler } from '@angular/core';
import * as Sentry from '@sentry/browser';

import { sentryToken } from './ng-sentry.token';
import { SentryErrorHandler } from './sentry-error-handler.service';

@NgModule({
  providers: [{ provide: ErrorHandler, useClass: SentryErrorHandler }]
})
export class NgSentryModule {
  private static sentryInit(browserOption: Sentry.BrowserOptions): Sentry.BrowserClient {
    return new Sentry.BrowserClient(browserOption);
  }
  static forRoot(browserOption: Sentry.BrowserOptions): ModuleWithProviders {
    return {
      ngModule: NgSentryModule,
      providers: [{ provide: sentryToken, useValue: this.sentryInit(browserOption) }]
    };
  }
  static forChild(browserOption: Sentry.BrowserOptions): ModuleWithProviders {
    return {
      ngModule: NgSentryModule,
      providers: [{ provide: sentryToken, useValue: this.sentryInit(browserOption) }]
    };
  }
}
