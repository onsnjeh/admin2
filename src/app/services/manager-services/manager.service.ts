import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { manager } from 'src/app/model/manager.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  baseUrl = 'http://localhost:3000/manager';

  constructor(private http: HttpClient) {}

  getManagers() {
    return this.http.get<manager []>(this.baseUrl);
  }

}
