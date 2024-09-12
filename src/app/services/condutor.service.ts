import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Condutor } from '../models/condutor';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class CondutorService {

  constructor(private http: HttpClient) { }

  create(condutor: Condutor): Observable<Condutor> {
    return this.http.post<Condutor>(`${API_CONFIG.baseUrl}/condutors`, condutor);
  }

  findById(codigo: string): Observable<Condutor> {
    return this.http.get<Condutor>(`${API_CONFIG.baseUrl}/condutors/${codigo}`);
  }

  findAll(): Observable<Condutor[]> {
    return this.http.get<Condutor[]>(`${API_CONFIG.baseUrl}/condutors`);
  }

  update(condutor: Condutor): Observable<Condutor> {
    return this.http.put<Condutor>(`${API_CONFIG.baseUrl}/condutors/${condutor.codigo}`, condutor);
  }

  delete(codigo: string): Observable<Condutor> {
    return this.http.delete<Condutor>(`${API_CONFIG.baseUrl}/condutors/${codigo}`);
  }
}
