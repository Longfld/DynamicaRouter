import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable()
export class DataServices {
  constructor(private http: HttpClient) { }

  private menusUrl = 'app/menu.json';

  GetMenuLinks() {
    return this.http.get<any>(this.menusUrl).pipe(
      catchError(this.handleError("login"))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} error: ${error.message}`);
      return of(result as T);
    };
  }
}
