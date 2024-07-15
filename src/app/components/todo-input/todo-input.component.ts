import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoModel } from '../../providers/todos.states';
import { todosSelector } from '../../providers/todos.reducers';
import { actions } from '../../providers/todos.actions';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.scss'
})

export class TodoInputComponent {

  todoInput?:string;
  todos?:TodoModel[];

  constructor(private store:Store){}

  ngOnInit():void{
    this.store.select(todosSelector).subscribe(state=>this.todos=state)
  }

  addTodo(){

    if(this.todoInput!.trim().length>0)
      this.store.dispatch(actions.addTodoAction(
        {
          id:this.todos!.length,
          completed:false,
          title:this.todoInput!.trim(),

        }
      ));
    
      this.todoInput='';
  }
}
