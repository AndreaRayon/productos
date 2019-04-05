import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cambiaDato = new Subject<Producto[]>();

  productos: Producto[] = [{
    id: 0,
    nombre: 'Zbook',
    marca: 'hp',
    categoria: 'laptop',
    precio: 15000,
    existencia: 8
  },
  {
    id: 1,
    nombre: 'MacBook Air',
    marca: 'MAC',
    categoria: 'laptop',
    precio: 34000,
    existencia: 3
  },
  {
    id: 2,
    nombre: 'MacBook Pro',
    marca: 'MAC',
    categoria: 'laptop',
    precio: 41000,
    existencia: 2
  },
  {
    id: 3,
    nombre: 'Envy',
    marca: 'MAC',
    categoria: 'laptop',
    precio: 17500,
    existencia: 4
  },
  {
    id: 4,
    nombre: 'Nitro',
    marca: 'Acer',
    categoria: 'laptop',
    precio: 16000,
    existencia: 4
  },
  {
    id: 5,
    nombre: 'Pavilion',
    marca: 'hp',
    categoria: 'laptop',
    precio: 12000,
    existencia: 7
  },
  {
    id: 6,
    nombre: 'IdeaPad',
    marca: 'Lenovo',
    categoria: 'laptop',
    precio: 6999,
    existencia: 10
  },
  {
    id: 7,
    nombre: 'Stream 14',
    marca: 'hp',
    categoria: 'laptop',
    precio: 4500,
    existencia: 16
  },
  {
    id: 8,
    nombre: 'Inspirion 15',
    marca: 'Dell',
    categoria: 'laptop',
    precio: 17200,
    existencia: 9
  }
];

  productosCarrito: Producto[] = [];
  aux: Producto[] = [];
  constructor() {}

  addProducto() {
    this.aux.forEach(pro => {
      if (!this.productosCarrito.includes(pro)) {
        this.productosCarrito.push(pro);
      }
    });
    this.aux.length = 0;
  }
  addProductAux(producto: Producto) {
    console.log(this.aux);
    const pos = this.aux.findIndex(pro => pro.id === producto.id);
    if (pos === -1) {
      this.aux.push(producto);
    } else {
      this.aux.splice(pos, 1);
    }
  }
  getCart(): Producto[] {
    return this.productosCarrito.slice();
  }
  getProductos(): Producto[] {
    return this.productos.slice();
  }
  getProducto(id: number): Producto {
    const pos = this.productos.findIndex(pro => pro.id === id);
    console.log('Producto detalle');
    return Object.assign({}, this.productos[pos]);
  }
  notificarCambios() {
    this.cambiaDato.next(this.productosCarrito.slice());
  }
  borrarProducto(id: number): boolean {
    const proPos = this.productosCarrito.findIndex(pro => pro.id === id);
    if (proPos >= 0) {
      console.log('Producto borrado');
      this.productosCarrito.splice(proPos, 1);
      console.log(this.productos.length);
      this.notificarCambios();
      return true;
    }
    return false;
  }
}
