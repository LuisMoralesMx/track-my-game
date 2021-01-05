import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable, of } from "rxjs";
import { GAMES_LIST_MOCK } from "src/app/mocks/games-list.mock";
import { Games } from "src/app/models/games";

@Component({
  selector: "app-view-game",
  templateUrl: "./view-games.component.html",
  styleUrls: ["./view-games.component.scss"],
})
export class ViewGamesComponent implements OnInit {
  @ViewChild("addGameDialog", { static: true }) addGameDialog!: TemplateRef<any>;

  constructor(private dialog: MatDialog) {}

  gameList!: Observable<Games[]>;
  displayedColumns: string[] = ["name", "platform", "genre", "progress"];

  ngOnInit(): void {
    this.gameList = of(GAMES_LIST_MOCK);
  }

  openDialog(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
}
