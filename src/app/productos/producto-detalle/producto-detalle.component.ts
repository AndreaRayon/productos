import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from '../producto';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  id: number;
  producto: Producto;
  constructor(private productoService: ProductosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params.id) {
      this.id = Number(params.id);
      this.producto = this.productoService.getProducto(this.id);
      console.log(this.id);
      console.log(this.producto);
      }
    });
  }

}
