import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modelo } from '../models/modelo';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  constructor(private http: HttpClient) { }

  create(modelo: Modelo): Observable<Modelo> {
    return this.http.post<Modelo>(`${API_CONFIG.baseUrl}/modelos`, modelo);
  }

  findById(codigo: string): Observable<Modelo> {
    return this.http.get<Modelo>(`${API_CONFIG.baseUrl}/modelos/${codigo}`);
  }

  findAll(): Observable<Modelo[]> {
    return this.http.get<Modelo[]>(`${API_CONFIG.baseUrl}/modelos`);
  }

  update(modelo: Modelo): Observable<Modelo> {
    return this.http.put<Modelo>(`${API_CONFIG.baseUrl}/modelos/${modelo.codigo}`, modelo);
  }

  delete(codigo: string): Observable<Modelo> {
    return this.http.delete<Modelo>(`${API_CONFIG.baseUrl}/modelos/${codigo}`);
  }
}
