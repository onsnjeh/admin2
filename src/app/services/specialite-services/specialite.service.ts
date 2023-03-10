import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { specialite } from 'src/app/model/specialite.model';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {

  baseUrl = 'http://localhost:3000/specialite';

  constructor(private http: HttpClient) {}

  getSpecialites() {
    return this.http.get<specialite []>(this.baseUrl);
  }
}
