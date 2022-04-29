import { Injectable } from '@angular/core';

const TODOS = [
  { title: 'Install Angular CLI', isDone: true },
  { title: 'Style App', isDone: true },
  { title: 'Finish Service Functionality', isDone: false },
  { title: 'Setup API', isDone: false },
];

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  get() {
    return new Promise((resolve) => resolve(TODOS));
  }

  add(data: any) {
    return new Promise((resolve) => {
      TODOS.push(data);
      resolve(data);
    });
  }

  put(changed: any) {
    return new Promise((resolve) => {
      const index = TODOS.findIndex((todo) => todo === changed);
      TODOS[index].title = changed.title;
      resolve(changed);
    });
  }

  delete(selected: any) {
    return new Promise((resolve) => {
      const index = TODOS.findIndex((todo) => todo === selected);
      TODOS.splice(index, 1);
      resolve(true);
    });
  }
}
