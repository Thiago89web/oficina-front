import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Oficina } from '../models/oficina';

@Injectable({
  providedIn: 'root'
})
export class OficinaService {

  constructor(private http: HttpClient) { }


  create(oficina: Oficina): Observable<Oficina> {
    return this.http.post<Oficina>(`${API_CONFIG.baseUrl}/oficinas`, oficina);
  }

  findById(codigo: string): Observable<Oficina> {
    return this.http.get<Oficina>(`${API_CONFIG.baseUrl}/oficinas/${codigo}`);
  }

  findAll(): Observable<Oficina[]> {
    return this.http.get<Oficina[]>(`${API_CONFIG.baseUrl}/oficinas`);
  }

  update(oficina: Oficina): Observable<Oficina> {
    return this.http.put<Oficina>(`${API_CONFIG.baseUrl}/oficinas/${oficina.codigo}`, oficina);
  }

  delete(codigo: string): Observable<Oficina> {
    return this.http.delete<Oficina>(`${API_CONFIG.baseUrl}/oficinas/${codigo}`);
  }
}
