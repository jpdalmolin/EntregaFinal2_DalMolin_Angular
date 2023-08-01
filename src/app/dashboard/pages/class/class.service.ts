import { BehaviorSubject, Observable, take } from 'rxjs';

import { Class } from './models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  private class$ = new BehaviorSubject<Class[]>([]);

  constructor() {}

  getClass(): Observable<Class[]> {
    return this.class$.asObservable();
  }

  loadProducts(): void {
    // fetch ...
    /// .then((data) => this.products$.next(data))
    this.class$.next([
      {
        id: 1,
        name: 'Matemática',
        description: 'lorem ipsum',

      },
      {
        id: 2,
        name: 'Literatura',
        description: 'lorem ipsum',

      },
      {
        id: 3,
        name: 'Historia',
        description: 'lorem ipsum',

      },
    ]);
  }

  create(): void {
    this.class$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this.class$.next([
          ...arrayActual,
          {
            id: arrayActual.length + 1,
            name: 'Random name',
            description: 'Random description',

          },
        ]);
      },
    });
  }

  deleteById(id: number): void {
    this.class$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this.class$.next(
          arrayActual.filter((p) => p.id !== id),
        );
      }
    })
  }
}
