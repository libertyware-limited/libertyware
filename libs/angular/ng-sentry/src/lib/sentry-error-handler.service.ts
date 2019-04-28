import { Injectable, ErrorHandler, Inject } from '@angular/core';
import * as Sentry from '@sentry/browser';
import { sentryToken } from './ng-sentry.token';

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor(@Inject(sentryToken) private sentry: Sentry.BrowserClient) {}
  handleError(error) {
    const eventId = this.sentry.captureException(error.originalError || error);
    Sentry.showReportDialog({ eventId });
  }
}
