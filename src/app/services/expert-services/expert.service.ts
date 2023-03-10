import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { expert } from 'src/app/model/expert.model';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {

  baseUrl = 'http://localhost:3000/expert';

  constructor(private http: HttpClient) {}

  getExperts() {
    return this.http.get<expert []>(this.baseUrl);
  }

}
