import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  constructor(private http: HttpClient) { }

  buscarCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('http://localhost:8080/api/buscarCategoria');
  }

  agregarCategoria(categoria: Categoria): Observable<Categoria> {
  return this.http.post<Categoria>('http://localhost:8080/api/agregarCategoria', categoria)
  }

  editarCategoria(categoria: Categoria): Observable<Categoria> {
  return this.http.put<Categoria>(`http://localhost:8080/api/actualizaCategoria`, categoria);
  }

  borrarCategoria(id: number): Observable<void> {
  return this.http.delete<void>(`http://localhost:8080/api/borrarCategoria/${id}`);
  }

}
