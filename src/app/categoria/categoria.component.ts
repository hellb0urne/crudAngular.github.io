import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './categoria.service';
import { Categoria } from '../categoria.interface';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categorias: Categoria[] = [];
  nuevaCategoria: Categoria = { id: 0, nombre: '' }; // Para almacenar la nueva categoría
  categoriaEditar: Categoria | null = null;


  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
  this.cargarCategorias();
  }
  cargarCategorias(): void {
      this.categoriaService.buscarCategoria().subscribe((data: Categoria[]) => {
        this.categorias = data;
      });
    }

  agregarCategoria(): void {
    // Llama al servicio para agregar la nueva categoría
    this.categoriaService.agregarCategoria(this.nuevaCategoria).subscribe((data: Categoria) => {
      // Agrega la nueva categoría a la lista
      this.categorias.push(data);
      // Reinicia el objeto nuevaCategoria
      this.nuevaCategoria.nombre = '';
    });
  }

  editarCategoria(categoria: Categoria): void {
      this.categoriaEditar = categoria; // Establece la categoría que se está editando
    }

    guardarEdicion(): void {
      if (this.categoriaEditar) {
        this.categoriaService.editarCategoria(this.categoriaEditar).subscribe(() => {
          this.categoriaEditar = null; // Finaliza la edición
          this.cargarCategorias(); // Vuelve a cargar las categorías actualizadas
        });
      }
    }

    cancelarEdicion(): void {
      this.categoriaEditar = null; // Cancela la edición
    }

    borrarCategoria(id: number): void {
      this.categoriaService.borrarCategoria(id).subscribe(() => {
        this.cargarCategorias(); // Vuelve a cargar las categorías actualizadas
      });
    }

}
