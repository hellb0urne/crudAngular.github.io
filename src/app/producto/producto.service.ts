import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  verProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>('http://localhost:8080/api/verProductos');
  }

  agregarProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>('http://localhost:8080/api/agregarProducto', producto);
  }

  actualizarProducto(producto: Producto): Observable<Producto> {
  return this.http.put<Producto>(`http://localhost:8080/api/actualizarProducto`, producto);
  }

  borrarProducto(id: number): Observable<void> {
  return this.http.delete<void>(`http://localhost:8080/api/borrarProducto/${id}`);
  }


}
