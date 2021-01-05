import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { UserServiceService} from '../user-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private userService : UserServiceService){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        if (req.headers.get('noauth')) {
            return next.handle(req.clone());
        } else {
            const clonedreq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + this.userService.getToken())
            });
            return next.handle(clonedreq).pipe(
                tap(
                    event => { },
                    err => {
                        if (err.error.auth === false) {
                            console.log("false")
                        }
                    })
            );
        }
    }
}