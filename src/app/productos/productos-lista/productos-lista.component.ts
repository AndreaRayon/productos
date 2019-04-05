import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductosService } from '../productos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})
export class ProductosListaComponent implements OnInit {
  id: number;
  productos: Producto[];
  cart: Producto[];
  modoCarrito = true;
  total = 0;
  cant = 0;
  private subscript: Subscription;
  constructor(private productoService: ProductosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.productos = this.productoService.getProductos();
    this.cart = this.productoService.getCart();
    this.productoService.productosCarrito.forEach(pro => this.total += pro.precio);
    console.log(this.total);
    this.subscript = this.productoService.cambiaDato.subscribe(
      (arregloProductos: Producto[]) => {
        this.cart = arregloProductos;
      }
    );
    if ( this.router.url === '/productos') {
      this.modoCarrito = false;
    } else {
      this.modoCarrito = true;
    }
  }

  borrarProductoLista(productoABorrar) {
    this.productoService.borrarProducto(productoABorrar.id);
  }
  getProductoLista(productoDetalle) {
   this.router.navigate([productoDetalle.id], {relativeTo: this.route});
  }

  addProduct() {
    this.productoService.addProducto();
  }
  addProductAux(producto: Producto) {
    this.productoService.addProductAux(producto);
    this.cant = this.productoService.aux.length;
    console.log(this.cant);
  }

}
