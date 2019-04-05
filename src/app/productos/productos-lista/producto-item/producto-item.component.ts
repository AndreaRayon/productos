import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../producto';
import { ProductosListaComponent } from '../productos-lista.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {
  modoCarrito = true;
  @Input() producto: Producto;
  @Output() borrarProducto = new EventEmitter();
  @Output() detalleProducto = new EventEmitter();
  @Output() addProducto = new EventEmitter();
  constructor(private productoLista: ProductosListaComponent,  private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // if ( this.router.url === '/productos') {
    //   this.modoCarrito = false;
    // } else {
    //   this.modoCarrito = true;
    // }
    this.modoCarrito = this.productoLista.modoCarrito;
  }
  productoPorBorrar() {
    this.borrarProducto.emit(this.producto);
  }
  productoDetalle() {
    this.detalleProducto.emit(this.producto);
  }
  addProductoAux() {
    this.addProducto.emit(this.producto);
  }

}
