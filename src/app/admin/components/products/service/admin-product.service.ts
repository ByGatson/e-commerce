import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from '../../../../core/services/common/http-client.service';

@Injectable({
  providedIn: 'root',
})
export class AdminProductService {
  constructor(private httpService: HttpClientService) {}

  getAll():any{
    return this.httpService.get<any>({fullEndPoint:"https://jsonplaceholder.typicode.com/comments",});
  }
}
