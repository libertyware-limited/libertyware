import { InjectionToken, ValueProvider } from '@angular/core';
import * as Sentry from '@sentry/browser';

export const sentryToken = new InjectionToken<Sentry.BrowserClient>('BrowserClient');
