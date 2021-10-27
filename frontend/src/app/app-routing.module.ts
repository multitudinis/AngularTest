import { movieDeleteComponent } from './components/movie/movie-delete/movie-delete.component';
import { movieUpdateComponent } from './components/movie/movie-update/movie-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { movieCrudComponent } from "./views/movies-crud/movie-crud.component";
import { movieCreateComponent } from './components/movie/movie-create/movie-create.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "movies",
    component: movieCrudComponent
  },
  {
    path: "movies/create",
    component: movieCreateComponent
  },
  {
    path: "movies/update/:id",
    component: movieUpdateComponent
  },
  {
    path: "movies/delete/:id",
    component: movieDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
