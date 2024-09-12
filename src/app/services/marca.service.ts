import { Injectable } from '@angular/core';
import { Marca } from '../models/marca';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private http: HttpClient) { }


  create(marca: Marca): Observable<Marca> {
    return this.http.post<Marca>(`${API_CONFIG.baseUrl}/marcas`, marca);
  }

  findById(codigo: string): Observable<Marca> {
    return this.http.get<Marca>(`${API_CONFIG.baseUrl}/marcas/${codigo}`);
  }

  findAll(): Observable<Marca[]> {
    return this.http.get<Marca[]>(`${API_CONFIG.baseUrl}/marcas`);
  }

  update(marca: Marca): Observable<Marca> {
    return this.http.put<Marca>(`${API_CONFIG.baseUrl}/marcas/${marca.codigo}`, marca);
  }

  delete(codigo: string): Observable<Marca> {
    return this.http.delete<Marca>(`${API_CONFIG.baseUrl}/marcas/${codigo}`);
  }
}
