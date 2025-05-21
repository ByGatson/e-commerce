import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(
    private httpClient: HttpClient,
    @Inject('BaseUrl') private baseUrl: string
  ) {}

  private createUrl(requestParameters: RequestParameters): string {
    if (requestParameters.fullEndPoint) return requestParameters.fullEndPoint;

    return `${
      requestParameters.baseUrl ? requestParameters.baseUrl : this.baseUrl
    }${requestParameters.controller ? `/${requestParameters.controller}`:''}${
      requestParameters.action ? `/${requestParameters.action}` : ''
    }`;
  }

  get<T>(requestParameters: RequestParameters, id?: string): Observable<T> {
    let url = `${this.createUrl(requestParameters)}${id ? `/${id}` : ''}`;
    console.log(url);
    return this.httpClient.get<T>(url, { headers: requestParameters.headers });
  }

  post<T>(requestParameters: RequestParameters, body: T): Observable<T> {
    let url = `${this.createUrl(requestParameters)}`;
    return this.httpClient.post<T>(url, body, {
      headers: requestParameters.headers,
    });
  }

  put<T>(requestParameters: RequestParameters, body: T): Observable<T> {
    let url = `${this.createUrl(requestParameters)}`;
    return this.httpClient.put<T>(url, body, {
      headers: requestParameters.headers,
    });
  }

  delete<T>(requestParameters: RequestParameters, id: string): Observable<T> {
    let url = `${this.createUrl(requestParameters)}${id}`;
    return this.httpClient.delete<T>(url, {
      headers: requestParameters.headers,
    });
  }
}

export class RequestParameters {
  controller?: string;
  action?: string;

  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string;
}
