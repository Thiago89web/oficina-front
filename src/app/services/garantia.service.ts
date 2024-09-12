import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Garantia } from '../models/garantia';

@Injectable({
  providedIn: 'root'
})
export class GarantiaService {

  constructor(private http: HttpClient) { }

  create(garantia: Garantia): Observable<Garantia> {
    return this.http.post<Garantia>(`${API_CONFIG.baseUrl}/garantias`, garantia);
  }

  findById(codigo: string): Observable<Garantia> {
    return this.http.get<Garantia>(`${API_CONFIG.baseUrl}/garantias/${codigo}`);
  }

  findAll(): Observable<Garantia[]> {
    return this.http.get<Garantia[]>(`${API_CONFIG.baseUrl}/garantias`);
  }

  update(garantia: Garantia): Observable<Garantia> {
    return this.http.put<Garantia>(`${API_CONFIG.baseUrl}/garantias/${garantia.codigo}`, garantia);
  }

  delete(codigo: string): Observable<Garantia> {
    return this.http.delete<Garantia>(`${API_CONFIG.baseUrl}/garantias/${codigo}`);
  }
}
