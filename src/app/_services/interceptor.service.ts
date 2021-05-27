import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("this is the begining");
    return next.handle(req).pipe(
      finalize(
        () => {
          console.log("this is the end of the interception")
        }
      )
    );
  }
}
