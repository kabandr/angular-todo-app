import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService],
})
export class TodoComponent implements OnInit {
  public todos: any;
  public activeTasks: any;
  public newTodo: any;

  constructor(private todoService: TodoService) {}

  getTodos() {
    return this.todoService.get().then((todos) => {
      this.todos = todos;
      this.activeTasks = this.todos.filter((todo: any) => !todo.isDone).length;
    });
  }

  addTodo() {
    this.todoService
      .add({ title: this.newTodo, isDone: false })
      .then(() => {
        return this.getTodos();
      })
      .then(() => {
        this.newTodo = ''; // clear input form value
      });
  }

  updateTodo(todo: any, newValue: any) {
    todo.title = newValue;
    return this.todoService.put(todo).then(() => {
      todo.editing = false;
      return this.getTodos();
    });
  }

  destroyTodo(todo: any) {
    this.todoService.delete(todo).then(() => {
      return this.getTodos();
    });
  }

  ngOnInit() {
    this.getTodos();
  }
}
