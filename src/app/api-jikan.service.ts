import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiJikanService {
  // URL pour l'api web dans une variable private
  private url = 'https://api.jikan.moe/v4/anime'
  //injection de détependance dans le constructeur HttpClient
  constructor(private http: HttpClient) { }
  // méthode getAnime() qui retourne un Observable de type any avec toutes les datas de l'api
  getAnime(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
