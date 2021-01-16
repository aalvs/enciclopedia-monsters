import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Monstros } from '../models/monstros.model';
import { Lideres } from '../models/lideres.model';
import { Medalhas } from '../models/medalhas.model';

@Injectable({
  providedIn: 'root'
})
export class ApiResourceService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getMontstros(): Observable<Monstros> {
    return this.http.get<Monstros>(`${this.apiUrl}monstros`);
  }

  public getLideres(): Observable<Lideres> {
    return this.http.get<Lideres>(`${this.apiUrl}lideres`);
  }

  public getMedalhas(): Observable<Medalhas> {
    return this.http.get<Medalhas>(`${this.apiUrl}medalhas`);
  }
}
