import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';

@Injectable()
export class FakeBackendHttpInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.handleRequests(req, next);
  }
  handleRequests(req: HttpRequest<any>, next: HttpHandler): any {
    const { url, method } = req;
    if (url.endsWith('/suggestion') && method === 'GET') {
      return of(new HttpResponse({ status: 200, body: 'BUY' }))
        .pipe(delay(500));
    }
    // if there is not any matches return default request.
    return next.handle(req);
  }
}

/**
* Mock backend provider definition for app.module.ts provider.
*/
export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendHttpInterceptor,
  multi: true,
};
