import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { AddEditTodosComponent } from './todos/add-edit-todos/add-edit-todos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'todos', component: TodosListComponent},
  { path: 'add-edit', component: AddEditTodosComponent},

  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
