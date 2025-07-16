import { Injectable } from '@angular/core';
import { HttpClientService } from '../../../../core/services/common/http-client.service';
import { catchError, map, Observable, throwError } from 'rxjs';
import { User } from '../../../../core/models/user.dto';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private controller : string = "User";
  private baseUrl :string =  "https://localhost:7149";
  constructor(private httpService: HttpClientService) { }
  
  create(user: User): Observable<boolean> {
    return this.httpService
      .post<User>({ baseUrl:this.baseUrl, controller: this.controller, action: 'create' }, user)
      .pipe(
        map(() => true),
        catchError((err: HttpErrorResponse) => {
          const errors = err?.error?.errors;
          const message = errors
            ? Object.values(errors).flat().join('\n')
            : 'Bir hata oluştu.';
          return throwError(() => message);
        })
      );
  }
}
