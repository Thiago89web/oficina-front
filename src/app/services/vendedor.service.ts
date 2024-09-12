import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendedor } from '../models/vendedor';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor(private http: HttpClient) { }


  create(vendedor: Vendedor): Observable<Vendedor> {
    return this.http.post<Vendedor>(`${API_CONFIG.baseUrl}/vendedors`, vendedor);
  }

  findById(codigo: string): Observable<Vendedor> {
    return this.http.get<Vendedor>(`${API_CONFIG.baseUrl}/vendedors/${codigo}`);
  }

  findAll(): Observable<Vendedor[]> {
    return this.http.get<Vendedor[]>(`${API_CONFIG.baseUrl}/vendedors`);
  }

  update(vendedor: Vendedor): Observable<Vendedor> {
    return this.http.put<Vendedor>(`${API_CONFIG.baseUrl}/vendedors/${vendedor.codigo}`, vendedor);
  }

  delete(codigo: string): Observable<Vendedor> {
    return this.http.delete<Vendedor>(`${API_CONFIG.baseUrl}/vendedors/${codigo}`);
  }
}
