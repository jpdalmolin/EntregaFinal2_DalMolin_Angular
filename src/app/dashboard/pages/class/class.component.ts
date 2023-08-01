import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';

import { Class } from './models';
import { ClassService } from './class.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styles: [
  ]
})
export class ClassComponent implements OnInit, OnDestroy {
  // public dataSource: Product[] = [];
  public data$: Observable<Class[]>;

  public displayedColumns = ['id', 'name', 'description','actions'];

  constructor(private classService: ClassService) {
    this.data$ = this.classService.getClass();
  }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    // CARGO LOS PRODUCTOS
    this.classService.loadProducts();
    // // LUEGO LOS OBTENGO
    // this.productService.getProducts().subscribe({
    //   next: (data) => console.log('data: ', data),
    // });
  }

  onCreate(): void {
    this.classService.create();
  }

  onDelete(id: number): void {
    this.classService.deleteById(id);
  }
}
