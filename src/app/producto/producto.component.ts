import { Component, OnInit } from '@angular/core';
import { ProductoService } from './producto.service';
import { Producto } from '../producto.interface';



@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit{
  productos: Producto[] = [];
  nuevoProducto: Producto = { id: 0, nombre: '', precio: 0, categoria: 0, cantidad: 0 }; // Para almacenar la nueva categoría
  productoEditar: Producto | null = null;

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.verProductos();
  }

  verProductos(): void {
     this.productoService.verProductos().subscribe((data: Producto[]) => {
            this.productos = data;
          });
  }

   agregarProducto(): void {
      // Llama al servicio para agregar el nuevo producto
      this.productoService.agregarProducto(this.nuevoProducto).subscribe((data: Producto) => {
        // Agrega el nuevo producto a la lista
        this.productos.push(data);
        // Reinicia el objeto nuevoProducto
        this.nuevoProducto.id = 0;
        this.nuevoProducto.nombre = '';
        this.nuevoProducto.precio = 0;
        this.nuevoProducto.categoria = 0;
        this.nuevoProducto.cantidad = 0;
      });
    }

    editarProducto(producto: Producto): void {
        this.productoEditar = producto; // Establece la categoría que se está editando
      }

      guardarEdicion(): void {
        if (this.productoEditar) {
          this.productoService.actualizarProducto(this.productoEditar).subscribe(() => {
            this.productoEditar = null; // Finaliza la edición
            this.verProductos(); // Vuelve a cargar las categorías actualizadas
          });
        }
      }

      cancelarEdicion(): void {
        this.productoEditar = null; // Cancela la edición
      }

      borrarProducto(id: number): void {
        this.productoService.borrarProducto(id).subscribe(() => {
          this.verProductos(); // Vuelve a cargar los productos actualizados
        });
      }

}
