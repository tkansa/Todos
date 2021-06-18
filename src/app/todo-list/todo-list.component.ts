import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  todos : Todo[] = [
    { todoItem : "Feed Fluffy", completed : false},
    {todoItem : "Read Warren Peas", completed : false},
    { todoItem : "Start a Tik Tok craze", completed : false},
    { todoItem : "Finish lab", completed : false}
  ]

  todo : Todo;

  ngOnInit(): void {
  }

  add(newTodo: string): void {
   
    this.todos.push({ todoItem: newTodo, completed : false});
    
  }

  clear() : void {
    this.todos = this.todos;
  }

  delete(todoItem: string): void {
    
    this.todos = this.todos.filter(t => t.todoItem !== todoItem);

  }

  filter(searchTerm : string) : void {
    
    if(!searchTerm){
      this.todos = this.todos;
    }

    const match : string = searchTerm.trim().toLowerCase();
    this.todos = this.todos.filter(todo => todo.todoItem.toLocaleLowerCase().includes(match));

  }

  toggleCompleted(todoItem : string): void {
   
    this.todo = this.todos.find(t => t.todoItem === todoItem);
    this.todo.completed = !this.todo.completed;
 
  } 
}
