import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaService } from './categoria/categoria.service';
import { ProductoComponent } from './producto/producto.component';
import { ProductoService } from './producto/producto.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/categoria', pathMatch: 'full' },
    ]),
    FormsModule
  ],
  providers: [CategoriaService, ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
