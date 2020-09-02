import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './todos-list/todos-list.component';
import { AddEditTodosComponent } from './add-edit-todos/add-edit-todos.component';



@NgModule({
  declarations: [TodosListComponent, AddEditTodosComponent],
  imports: [
    CommonModule
  ]
})
export class TodosModule { }
