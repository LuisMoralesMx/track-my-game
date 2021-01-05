import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AddGameComponent } from "./components/add-game/add-game.component";
import { ViewGamesComponent } from "./components/view-games/view-games.component";

const routes: Routes = [
  { path: "home", component: AppComponent },
  { path: "view-games-component", component: ViewGamesComponent },
  { path: "add-games-component", component: AddGameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
