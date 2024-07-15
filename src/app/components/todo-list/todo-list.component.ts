import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoModel } from '../../providers/todos.states';
import { todosSelector } from '../../providers/todos.reducers';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})

export class TodoListComponent {

  todos:TodoModel[]=[];

  constructor(private store:Store){}

  ngOnInit():void{
    this.loadTodos();
  }

  loadTodos(){
    this.store.select(todosSelector).subscribe((state)=>{
      this.todos=state;
    });
  }
}
