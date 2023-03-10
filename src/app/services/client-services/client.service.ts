import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { client } from 'src/app/model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl = 'http://localhost:3000/client';

  constructor(private http: HttpClient) {}
//list client
  getClients() {
    return this.http.get<client []>(this.baseUrl);
  }
//recherche client
rechercher(nom: string,service:string): Observable<client []> {
  const url = '${this.baseUrl}/recherche?nom=${nom}&service=${service}';
  return this.http.get<client []>(this.baseUrl);
}
}
// , ville: string
// &ville=${ville}
